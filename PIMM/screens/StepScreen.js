import Expo from "expo";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from "react-native";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import StatisticsContainer from "../containers/StatisticsContainer";
import { Pedometer } from "expo";
import Colors from "../constants/Colors";
import Strings from "../constants/Strings";

export default class StepScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pedometerAvailable: "checking",
      stepsToday: 0,
      stepsThisWeek: 0,
      dailyGoal: 1700
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
          pedometerAvailable: "Could not get pedometerAvailable: " + error,
          stepsToday: "Could not get stepCount: " + error
        });
      }
    );
  };

  updateStepsThisWeek = () => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 7);

    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ stepsThisWeek: result.steps });
      },
      error => {
        this.setState({
          stepsToday: "Could not get stepCount: " + error,
          pedometerAvailable: "Could not get pedometerAvailable: " + error
        });
      }
    );
  };

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.updateStepsToday();
      this.updateStepsThisWeek();
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
    this.updateStepsThisWeek();
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  renderErrorMessage() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.quoteText}>{Strings.pedometerUnavailable}</Text>
        </View>
      </ScrollView>
    );
  }

  goalReached() {
    return this.state.stepsToday >= this.state.dailyGoal;
  }

  returnMotivationQuote() {
    if (this.goalReached()) {
      return Strings.goalReached.true;
    } else {
      return Strings.goalReached.false;
    }
  }

  render() {
    if (this.state.pedometerAvailable) {
      return (
        <ScrollView style={styles.container}>
          <View style={[styles.stepsContainer]}>
            <Text style={styles.quoteText}>{this.returnMotivationQuote()}</Text>
            <ProgressBarContainer
              dailyGoal={this.state.dailyGoal}
              stepsToday={this.state.stepsToday}
            />
            <View>
              <StatisticsContainer
                stepsToday={this.state.stepsToday}
                stepsThisWeek={this.state.stepsThisWeek}
              />
            </View>
            <View style={styles.container}>
              <Image
                style={styles.statisticsImage}
                source={require("../assets/images/walking-man.jpg")}
              />
            </View>
            <Text style={styles.quoteText}>{Strings.motivation.first}</Text>
            <Text style={styles.quoteText}>{Strings.motivation.second}</Text>
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
    backgroundColor: Colors.whiteBackround
  },
  stepsContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  quoteText: {
    textAlign: "center",
    paddingHorizontal: 15,
    paddingBottom: 10,
    color: Colors.primaryBlue,
    fontSize: 18,
    lineHeight: 19
  },
  statisticsImage: {
    width: null,
    resizeMode: "contain",
    height: 220
  }
});

Expo.registerRootComponent(StepScreen);
