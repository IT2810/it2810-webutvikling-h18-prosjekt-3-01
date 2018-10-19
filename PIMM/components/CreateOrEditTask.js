import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import moment from "moment";
import { createStackNavigator, withNavigation } from "react-navigation";

import Colors from "../constants/Colors";
import CategorySelector from "../containers/CategorySelector";
import { TasksConsumer } from "../containers/Tasks.context";

import { CrossPlatformIcon } from "../components/TextIcon";
import ReminderSelector from "../components/ReminderSelector";
import DateTimePickerItem from "../components/DateTimePickerItem";
import SubmitButton from "../components/SubmitButton";
import DeleteButton from "../components/DeleteButton";

const CreateOrEditTask = ({
  navigation,
  isEdit,
  categoryColor,
  descriptionText,
  dueDate,
  selectedCategory,
  allTasks,
  taskId,

  handleCreateTask,
  handleDelete,
  handleEditTask,
  handleTextChange,
  handleCategoryChange,
  handleDueDateChange,
  handleReminderChange,
  getCategoryColor
}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={[styles.descriptionWrapper, { backgroundColor: categoryColor }]}
      >
        <Text style={[styles.label, { color: "#fff" }]}>TASK DESCRIPTION</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleTextChange(text)}
          value={descriptionText}
          placeholder={"What do you want to remember?"}
          placeholderTextColor={"rgba(255,255,255,0.8)"}
          underlineColorAndroid={"transparent"}
          multiline={true}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          padding: SPACINGCONTAINER,
          paddingTop: SPACINGCONTAINER / 1.5
        }}
      >
        <View>
          <CategorySelector
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
            labelStyle={styles.label}
            categoryColor={categoryColor}
          />

          <DateTimePickerItem
            label="DUE"
            labelStyle={styles.label}
            icon={
              <CrossPlatformIcon
                iconSize={45}
                defaultColor={categoryColor}
                name="calendar"
              />
            }
            placeholder="Set a due date and time"
            handleDateChange={handleDueDateChange}
            categoryColor={categoryColor}
          />

          <ReminderSelector
            categoryColor={categoryColor}
            handleReminderChange={handleReminderChange}
            dueDate={dueDate}
          />
        </View>

        <SubmitButton
          text={isEdit ? "Save changes" : "Create task"}
          categoryColor={categoryColor}
          onPress={isEdit ? handleEditTask : handleCreateTask}
          navigateTo="Tasks"
          disabled={!descriptionText}
        />
        {isEdit && (
          <DeleteButton
            categoryColor={categoryColor}
            handleDelete={handleDelete}
            taskId={taskId}
            style={{ position: "absolute", bottom: 10, right: 10 }}
          />
        )}
      </View>
    </ScrollView>
  );
};

const SPACINGCONTAINER = 30;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  label: {
    textAlign: "left",
    letterSpacing: 0.5,
    marginBottom: 5,
    fontWeight: "bold"
  },
  descriptionWrapper: {
    padding: SPACINGCONTAINER
  },
  textInput: {
    color: "#fff",
    textAlign: "left",
    marginTop: 5,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  deleteButton: {}
});

export default withNavigation(CreateOrEditTask);
