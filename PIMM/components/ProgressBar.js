import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Animated } from "react-native";
import Colors from "../constants/Colors";

export default class ProgressBar extends Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidMount() {
    Animated.timing(this.animation, {
      toValue: this.props.progress,
      duration: this.props.duration
    }).start();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
    }
  }

  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      fillColor,
      duration,
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    });

    const interpolateColor = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.stepBarStart, Colors.stepBarFinished]
    });

    const animatedStyle = {
      backgroundColor: interpolateColor
    };

    return (
      <View style={[styles.progressBar, { height: height }]}>
        <View
          style={[
            styles.borderView,
            { borderColor, borderWidth, borderRadius }
          ]}
        >
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: fillColor, borderRadius }
            ]}
          />
          <Animated.View
            style={[
              styles.animation,
              animatedStyle,
              {
                width: widthInterpolated,
                borderRadius
              }
            ]}
          />
          <Text style={styles.stepBarText}>
            {this.props.stepsToday} / {this.props.dailyGoal} steps
          </Text>
        </View>
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  height: 18,
  borderColor: Colors.stepBarFill,
  borderWidth: 2,
  borderRadius: 10,
  fillColor: Colors.stepBarFill,
  duration: 100
};

const styles = StyleSheet.create({
  progressBar: {
    flex: 1,
    flexDirection: "row",
    margin: 5
  },
  borderView: {
    flex: 1
  },
  animation: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0
  },
  stepBarText: {
    textAlign: "center",
    fontSize: 10,
    color: Colors.stepBarText
  }
});
