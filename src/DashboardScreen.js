import { TouchableOpacity, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import CustomListview from "../component/List";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default class DashboardScreen extends Component {
  getData() {
    return [
      {
        key: 1,
        title: "Muhammad Alif Firdaus",
        description: "+6281386781404",
        image_url: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      },
      {
        key: 2,
        title: "Muhammad Ba Firdaus",
        description: "+6281386781405",
        image_url: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      },
      {
        key: 3,
        title: "Muhammad Ta Firdaus",
        description: "+6281386781406",
        image_url: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      },
      {
        key: 4,
        title: "Muhammad Tsa Firdaus",
        description: "+6281386781407",
        image_url: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      },
      {
        key: 5,
        title: "Muhammad Jim Firdaus",
        description: "+6281386781408",
        image_url: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      },
      {
        key: 6,
        title: "Muhammad Ha Firdaus",
        description: "+6281386781409",
        image_url: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomListview itemList={this.getData()} />
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.btnTambah}>
            <FontAwesomeIcon icon={faPlus} size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bcbdf1",
  },
  wrapperButton: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: "skyblue",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
