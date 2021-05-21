import React, { useState, useEffect, Component } from "react";
import { Text, View, Image, StyleSheet, TextInput, Button } from "react-native";
import { color } from "react-native-reanimated";
import images from "../../assets/avatar1.png";
import Icon from "react-native-vector-icons/FontAwesome";

const PayMentScreen = () => {
  const [currentDate, setcurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    setcurrentDate(date + "/" + month);
  }),
    [];

  return (
    <View style={{ flex: 1, backgroundColor: "#EAE7E6" }}>
      <View style={{ backgroundColor: "white", padding: 15, margin: 0 }}>
        <View style={styles.container}>
          <View style={styles.textcol}>
            <Text style={styles.text}>{currentDate}</Text>
            <Text style={styles.text2}>Payments</Text>
          </View>
          <Image source={images} style={styles.avatar} />
        </View>
        <View style={styles.searchbar1}>
          <TextInput
            style={styles.searchbar}
            placeholder="Type something to search"
          ></TextInput>
          <Icon name="search" size={30} color="grey" style={styles.icon} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.suggest1}>
          <Text style={styles.suggesttext}>Suggested</Text>
        </View>

        <View style={styles.suggest}>
          <View style={styles.box}>
            <Image
              source={require("../../assets/avatar1.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.suggestdesc}>Lily</Text>
            <Text style={styles.suggestdesc1}>Transfer</Text>
          </View>
          <View style={styles.box1}>
            <Image
              source={require("../../assets/avatar1.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.suggestdesc}>Electriciy</Text>
            <Text style={styles.suggestdesc1}>Transfer</Text>
          </View>
          <View style={styles.box2}>
            <Image
              source={require("../../assets/avatar1.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.suggestdesc}>Voilet</Text>
            <Text style={styles.suggestdesc1}>Transfer</Text>
          </View>
          <View style={styles.box3}>
            <Image
              source={require("../../assets/avatar1.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.suggestdesc}>Seth</Text>
            <Text style={styles.suggestdesc1}>Transfer</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: "90%",
          }}
        />

        <Text style={styles.billtext}>Bills Payment</Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "#C4C4BF",
            borderRadius: 20,
            padding: 20,
            margin: 15,
          }}
        >
          <View style={styles.billcards}>
            <Text style={styles.billcards1}>
              <Image
                source={require("../../assets/flash.png")}
                style={{ height: 30, width: 30, backgroundColor: "red" }}
              />
              Electricity
            </Text>
            <Text style={styles.billcards1}>
              <Image
                source={require("../../assets/flash.png")}
                style={{ height: 30, width: 30 }}
              />
              Installment
            </Text>
            <Text style={styles.billcards1}>
              <Image
                source={require("../../assets/flash.png")}
                style={{ height: 30, width: 30 }}
              />
              Fuel
            </Text>
            <Text style={styles.billcards1}>
              <Image
                source={require("../../assets/flash.png")}
                style={{ height: 30, width: 30 }}
              />
              Water
              <Button title="pay"></Button>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  textcol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 15,

    color: "gray",
  },
  text2: {
    flexDirection: "column",
    fontSize: 30,
    color: "gray",
    fontWeight: "bold",
  },
  avatar: {
    height: "80%",
    width: "100%",
    resizeMode: "contain",
  },
  searchbar: {
    width: 320,
    height: 35,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  searchbar1: {
    padding: 5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {},

  suggest: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#EAE7E6",
    width: "100%",
  },
  suggest1: {
    padding: 15,
    backgroundColor: "#EAE7E6",
  },
  suggesttext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "grey",
    marginTop: 10,
  },
  box: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  box1: {
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: "white",
  },
  box2: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  box3: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  suggestdesc: {
    padding: 1,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  suggestdesc1: {
    color: "grey",
  },
  billtext: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 20,
    color: "grey",
  },
  billcards1: {
    padding: 7,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  billcards: {
    flex: 1,
  },
  billButtons: {},
});

export default PayMentScreen;
