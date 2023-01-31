import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import { useNavigation } from '@react-navigation/native';
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const logo = require("../../assets/logos/logo2.png");
import series from "../data/series";
import series1 from "../data/series1";
import series2 from "../data/series2";
import { LinearGradient } from "expo-linear-gradient";

const CompanyScreen = () => {
  const navigation = useNavigation();
  const submit = () => {
    // return Alert.alert(userName, password);
    // if (id === '1') {
    //   // Alert.alert(`Thank-You ${userName}`);
    //   navigation.navigate('Car');
    // } else {
    //   navigation.navigate('Hiace');
    // }

  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: SPACING * 4,
          }}
        >
          <Image
            style={{
              height: SPACING * 7,
              width: SPACING * 20,
            }}
            source={logo}
          />
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 5,
              fontWeight: "700",
            }}
          >
            Select Service
          </Text>
          {/* <Text
            style={{
              color: colors.light,
              marginTop: SPACING / 2,
            }}
          >
            5 Searies
          </Text> */}
        </View>
        {series.map((item) => (
          <LinearGradient
            key={item.id}
            colors={[colors["dark-gray"], colors.black]}
            style={{
              height: 40,
              borderRadius: SPACING * 2,
              padding: SPACING * -2,
              marginBottom: SPACING * 16,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 100,
              }}
              resizeMode="contain"
              source={item.image}
            />
            <Text
              style={{
                color: colors.light,
                fontSize: SPACING * 2.0,
                fontWeight: "700",
                marginBottom: SPACING,
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.light }}>
                Starting price from PKR. {item.starting_price}
              </Text>




              <TouchableOpacity
                onPress={() => { navigation.navigate('Car') }}
                style={{
                  overflow: "hidden",
                  borderRadius: SPACING / 2,
                }}
              >
                <LinearGradient
                  style={{
                    paddingHorizontal: SPACING,
                    paddingVertical: SPACING / 3,
                  }}
                  colors={[colors["dark-gray"], colors.dark]}
                >
                  <Ionicons
                    name="arrow-forward"
                    color={colors.light}
                    size={SPACING * 2}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}

        {series1.map((item) => (
          <LinearGradient
            key={item.id}
            colors={[colors["dark-gray"], colors.black]}
            style={{
              height: 40,
              borderRadius: SPACING * 2,
              padding: SPACING * -2,
              marginBottom: SPACING * 16,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 100,
              }}
              resizeMode="contain"
              source={item.image}
            />
            <Text
              style={{
                color: colors.light,
                fontSize: SPACING * 2.0,
                fontWeight: "700",
                marginBottom: SPACING,
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.light }}>
                Starting price from PKR. {item.starting_price}
              </Text>




              <TouchableOpacity
                onPress={() => { navigation.navigate('Hiace') }}
                style={{
                  overflow: "hidden",
                  borderRadius: SPACING / 2,
                }}
              >
                <LinearGradient
                  style={{
                    paddingHorizontal: SPACING,
                    paddingVertical: SPACING / 3,
                  }}
                  colors={[colors["dark-gray"], colors.dark]}
                >
                  <Ionicons
                    name="arrow-forward"
                    color={colors.light}
                    size={SPACING * 2}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}

        {series2.map((item) => (
          <LinearGradient
            key={item.id}
            colors={[colors["dark-gray"], colors.black]}
            style={{
              height: 40,
              borderRadius: SPACING * 2,
              padding: SPACING * -2,
              marginBottom: SPACING * 16,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 100,
              }}
              resizeMode="contain"
              source={item.image}
            />
            <Text
              style={{
                color: colors.light,
                fontSize: SPACING * 2.0,
                fontWeight: "700",
                marginBottom: SPACING,
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.light }}>
                Starting price from PKR. {item.starting_price}
              </Text>




              <TouchableOpacity
                onPress={() => { navigation.navigate('Coaster') }}
                style={{
                  overflow: "hidden",
                  borderRadius: SPACING / 2,
                }}
              >
                <LinearGradient
                  style={{
                    paddingHorizontal: SPACING,
                    paddingVertical: SPACING / 3,
                  }}
                  colors={[colors["dark-gray"], colors.dark]}
                >
                  <Ionicons
                    name="arrow-forward"
                    color={colors.light}
                    size={SPACING * 2}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}

      </ScrollView>
      <TouchableOpacity>
        <LinearGradient
          style={{
            padding: SPACING / 5,
            borderRadius: SPACING * 2,
          }}
          colors={[colors.light, colors.dark]}
        >
          {/* <LinearGradient
            style={{
              padding: SPACING * 1.6,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SPACING * 2,
            }}
            colors={[colors["dark-gray"], colors.dark]}
          >
            <Text
              style={{
                color: colors.light,
                fontWeight: "800",
                fontSize: SPACING * 2,
              }}
            >
              View All
            </Text>
          </LinearGradient> */}
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CompanyScreen;

const styles = StyleSheet.create({});
