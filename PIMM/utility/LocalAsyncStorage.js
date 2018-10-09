import { AsyncStorage } from "react-native";
import React, { Component } from "react";

class LocalAsyncStorage extends Component {
  saveData = (dataKey, dataValue) => {
    let storeData = async () => {
      try {
        await AsyncStorage.setItem(dataKey, dataValue);
      } catch (error) {
        // Error saving data
      }
    };
  };

  loadData = async dataKey => {
    try {
      const data = await AsyncStorage.getItem(dataKey);
      if (data !== null) {
        //Load successful
        console.log(data);
      }
    } catch (error) {
      //Error retrieving data
    }
    return data;
  };

  deleteData = async dataKey => {
    try {
      await AsyncStorage.removeItem(dataKey);
    } catch (error) {
      //Could not delete item with key: dataKey
    }
  };

  loadAllData = () => {
    //LocalAsyncStorage.getAllKeys()
    //Loop gjennom keys
    //Last data for hver key
    //Returner resultat
  };

  render() {
    return null;
  }
}

export default LocalAsyncStorage;
