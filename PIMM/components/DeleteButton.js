import React from "react";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import { CrossPlatformIcon } from "../components/TextIcon";

const DeleteButton = ({
  style,
  handleDelete,
  categoryColor,
  taskId,
  navigation
}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        handleDelete(taskId);
        navigation.navigate("Tasks");
      }}
    >
      <CrossPlatformIcon
        iconSize={30}
        defaultColor={categoryColor}
        name="trash"
      />
    </TouchableOpacity>
  );
};

export default withNavigation(DeleteButton);
