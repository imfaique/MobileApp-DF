// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// import axios from 'axios'

// const ChatBotScreen = () => {
//     const [messages, setMessages] = useState([])

//     const YOUR_CHATGPT_API_KEY = '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'
//     const handleSend = async (newMessages = []) => {
//         try {
//             //get user messages
//             const userMessage = newMessages[0];
//             //add user messages
//             setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
//             const messageText = userMessage.text.toLowerCase();
//             const keywords = ['Hi', 'Hello', 'How would like to help you'];
//             if (!keywords.some(keyword => messageText.includes(keyword))) {
//                 const botMessage = {
//                     _id: setStatusBarNetworkActivityIndicatorVisible().getTime() + 1,
//                     text: 'Contact Support',
//                     createdAt: new Date(),
//                     user: {
//                         _id: 2,
//                         name: 'Chat Support'
//                     }
//                 };
//                 setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
//                 return;


//             }
//             const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
//                 prompt: 'Give details related to vehicle  ${messageText}',
//                 max_tokens: 1200,
//                 temperature: 0.2,
//                 n: 1,
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ${YOUR_CHATGPT_API_KEY}'

//                 }
//             });
//             console.log(response.data);
//             const mess = response.data.choices[0].text.trim();
//             const botMessage = {
//                 _id: new Date().getTime() + 1,
//                 text: mess,
//                 createdAt: new Date(),
//                 user: {
//                     _id: 2,
//                     name: 'Chat Bot'
//                 }
//             };
//             setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));

//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <View style={{ flex: 1 }}>
//             <View
//                 style={{
//                     backgroundColor: '#F5F5F5',
//                     padding: 10,
//                     alignItems: 'center',
//                     borderBottomWidth: 1,
//                     marginTop: 40,
//                     marginBottom: 5
//                 }}>
//                 <Text style={{
//                     fontSize: 32,
//                     fontWeight: 'bold'
//                 }}>
//                     ChatBot
//                 </Text>
//             </View>
//             <GiftedChat
//                 messages={messages}
//                 onSend={newMessages => handleSend(newMessages)}
//                 user={{ _id: 1 }}

//             />

//         </View>
//     )
// }
// export default ChatBotScreen