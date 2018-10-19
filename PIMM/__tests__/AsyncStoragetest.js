import { saveData, loadData, deleteData } from "../mock/MockLocalAsyncStorage";

const testValueString = "dataValue";
const testValueObject = { val1: 2, val2: "test", val3: 1 };
const TEST_KEY = "testKey";

test("save then load string", () => {
  saveData(TEST_KEY, testValueString);
  return loadData(TEST_KEY).then(data => {
    expect(data).toBe(testValueString);
  });
});

test("save then load object", () => {
  saveData(TEST_KEY, testValueObject);
  return loadData(TEST_KEY).then(data => {
    expect(data).toEqual(testValueObject);
  });
});

test("save then remove object", () => {
  saveData(TEST_KEY, testValueObject);
  deleteData(TEST_KEY);
  return loadData(TEST_KEY).then(data => {
    expect(data).toBe(null);
  });
});

test("save then remove string", () => {
  saveData(TEST_KEY, testValueString);
  deleteData(TEST_KEY);
  return loadData(TEST_KEY).then(data => {
    expect(data).toBe(null);
  });
});

test("Load non-existing key", () => {
  return loadData("NON_EXISTING").then(data => {
    expect(data).toBe(null);
  });
});
