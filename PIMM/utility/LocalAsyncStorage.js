import { AsyncStorage } from "react-native";

const TASK_KEY = "taskKey";
const STEP_KEY = "stepKey";

export async function saveData(dataKey, dataValue) {
  let stringifiedVal = stringify(dataValue);
  try {
    await AsyncStorage.setItem(dataKey, stringifiedVal);
  } catch (error) {
    //Error saving data
  }
}

export async function loadData(dataKey) {
  try {
    let data = await AsyncStorage.getItem(dataKey);
    return parse(data);
  } catch (error) {
    //Error retrieving data
  }
}

export async function deleteData(dataKey) {
  try {
    await AsyncStorage.removeItem(dataKey);
  } catch (error) {
    //Could not delete item with key: dataKey
  }
}

export function loadAllData() {
    //TODO 
}

//--Helper functions for this file--//
function parse(dataString) {
  return JSON.parse(dataString);
}

function stringify(dataValue) {
  return JSON.stringify(dataValue);
}
