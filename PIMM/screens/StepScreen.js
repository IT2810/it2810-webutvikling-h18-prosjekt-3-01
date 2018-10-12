import Expo from "expo";
import React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import { Pedometer } from "expo";
import Colors from "../constants/Colors";

export default class StepScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedometerAvailable: "checking",
      stepsToday: 0,
      dailyGoal: 10000
    };
  }
  
  static navigationOptions = {
    title: "Steps",
    headerTitleStyle: { color: Colors.darkGray }
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  updateStepsToday = () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(24, 0, 0, 0);

    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ stepsToday: result.steps });
      },
      error => {
        this.setState({
          stepsToday: "Could not get stepCount: " + error
        });
      }
    );
  };

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.updateStepsToday();
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          pedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          pedometerAvailable: "Could not get pedometerAvailable: " + error
        });
      }
    );
    this.updateStepsToday();
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  renderErrorMessage() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.exampleText}>
            Pedometer is not available on your device, so the steps cannot load.
            {"\n"} Have you granted the permissions?
          </Text>
        </View>
      </ScrollView>
    );
  }

  goalReached() {
    return this.state.stepsToday >= this.state.dailyGoal;
  }

  returnMotivationQuote() {
    if (this.goalReached()) {
      return "Goal reached! Now sit down and chill for the rest of the day ;-)";
    } else {
      return "Walk a little bit more!";
    }
  }

  render() {
    if (this.state.pedometerAvailable) {
      return (
        <ScrollView>
          <View style={[styles.container, styles.center]}>
            <View style={styles.container}>
              <Text style={styles.exampleText}>
                {this.returnMotivationQuote()}
              </Text>
            </View>
            <View style={styles.progressBarContainer}>
              <ProgressBarContainer
                dailyGoal={this.state.dailyGoal}
                stepsToday={this.state.stepsToday}
              />
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return this.renderErrorMessage();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.whiteBackround
  },
  exampleText: {
    marginBottom: 20,
    color: Colors.primaryBlue,
    fontSize: 18,
    lineHeight: 19,
    textAlign: "center",
    paddingHorizontal: 15
  },
  progressBarContainer: {
    margin: 10
  },
  center: {
    justifyContent: "space-between"
  }
});

Expo.registerRootComponent(StepScreen);
