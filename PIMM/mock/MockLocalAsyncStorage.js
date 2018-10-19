import MockAsyncStorage from "./MockAsyncStorage";

const storageCache = {};
const AsyncStorage = new MockAsyncStorage(storageCache);

jest.setMock("AsyncStorage", AsyncStorage);


export async function saveData(dataKey, dataValue) {
  let stringifiedVal = stringify(dataValue);
  try {
    await AsyncStorage.setItem(dataKey, stringifiedVal);
  } catch (error) {}
}

export async function loadData(dataKey) {
  try {
    let data = await AsyncStorage.getItem(dataKey);
    return parse(data);
  } catch (error) {}
}

export async function deleteData(dataKey) {
  try {
    await AsyncStorage.removeItem(dataKey);
  } catch (error) {}
}

//--Helper functions mocked--//
function parse(dataString) {
  return JSON.parse(dataString);
}

function stringify(dataValue) {
  return JSON.stringify(dataValue);
}
