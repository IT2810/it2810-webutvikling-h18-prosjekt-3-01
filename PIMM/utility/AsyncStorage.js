import { AsyncStorage } from "react-native"
import React, { Component } from 'react'

class AsyncStorage extends Component {

    saveData = (dataKey, dataValue) => {
        let storeData = async () => {
            try {
                await AsyncStorage.setItem(dataKey, dataValue);
            } catch (error) {
                // Error saving data
            }
        }
    }

    loadData = (dataKey) => {
        let loadedData = async() => {
            try {
                const data = await AsyncStorage.getItem(dataKey);
                if (data !== null){
                    //Load successful
                    console.log(data);
                }
            } catch (error) {
                //Error retrieving data
            }
        }

        return loadedData
    }

    deleteData = (dataKey) => {
        const dataDelete = async() => {
            try {
                AsyncStorage.removeItem(dataKey);
            } catch (error) {
                //Could not delete item with key: dataKey
            }
        }
    }
}



