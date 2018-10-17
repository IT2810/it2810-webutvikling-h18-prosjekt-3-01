import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { CrossPlatformIcon } from "../components/TextIcon";
import Colors from "../constants/Colors";

export default class DeleteButton extends Component {
  render() {
      return(
          <View>
              <TouchableOpacity
                  style={styles.touchable}
                  onPress={this.props.handleDeleteButton}
              >
                  <CrossPlatformIcon
                      iconSize={45}
                      defaultColor={this.props.screenColor}
                      name="trash"
                  />
              </TouchableOpacity>
          </View>
      )
    //TODO Unfinished Component
  }
}

const styles = StyleSheet.create({
    touchable: {}
});
