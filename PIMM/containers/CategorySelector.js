import React, { Component } from "react";
import {StyleSheet, View} from "react-native";
import CategoryTile from "../components/CategoryTile";
import Colors from "../constants/Colors";


export default class CategorySelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            importantUrgentOpacity: 1,
            importantNotUrgentOpacity: 0.5,
            notImportantUrgentOpacity: 0.5,
            notImportantNotUrgentOpacity: 0.5,
        }
    }

    onPress = identifier => {
        switch(identifier){
            case "importantUrgent": //importantUrgent
                this.setState({
                    importantUrgentOpacity: 1,
                    importantNotUrgentOpacity: 0.5,
                    notImportantUrgentOpacity: 0.5,
                    notImportantNotUrgentOpacity: 0.5,
                }, this.props.handleCategoryChange(Colors.categoryGreen));
                break;

            case "importantNotUrgent": //importantNotUrgent
                this.setState({
                    importantUrgentOpacity: 0.5,
                    importantNotUrgentOpacity: 1,
                    notImportantUrgentOpacity: 0.5,
                    notImportantNotUrgentOpacity: 0.5,
                }, this.props.handleCategoryChange(Colors.categoryOrange));
                break;

            case "notImportantUrgent": //notImportantUrgent
                this.setState({
                    importantUrgentOpacity: 0.5,
                    importantNotUrgentOpacity: 0.5,
                    notImportantUrgentOpacity: 1,
                    notImportantNotUrgentOpacity: 0.5,
                }, this.props.handleCategoryChange(Colors.categoryBlue));
                break;

            case "notImportantNotUrgent": //notImportantNotUrgent
                this.setState({
                    importantUrgentOpacity: 0.5,
                    importantNotUrgentOpacity: 0.5,
                    notImportantUrgentOpacity: 0.5,
                    notImportantNotUrgentOpacity: 1,
                }, this.props.handleCategoryChange(Colors.categoryRed));
                break;
        }

    };

    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.importantUrgent, styles.basicTile, {opacity: this.state.importantUrgentOpacity}]}>
                    <CategoryTile
                        category={"important\n&\n urgent"}
                        onPress={this.onPress}
                        textStyle={styles.tileText}
                        identifier={"importantUrgent"}
                        style={{height: '100%', width: '100%'}}
                    />
                </View>
                <View style={[styles.importantNotUrgent, styles.basicTile, {opacity: this.state.importantNotUrgentOpacity}]}>
                    <CategoryTile
                        category={"important\n&\n not urgent"}
                        onPress={this.onPress}
                        textStyle={styles.tileText}
                        identifier={"importantNotUrgent"}
                        style={{height: '100%', width: '100%'}}
                    />
                </View>
                <View style={[styles.notImportantUrgent, styles.basicTile, {opacity: this.state.notImportantUrgentOpacity}]}>
                    <CategoryTile
                        category={"not important\n&\n urgent"}
                        onPress={this.onPress}
                        textStyle={styles.tileText}
                        identifier={"notImportantUrgent"}
                        style={{height: '100%', width: '100%'}}
                    />
                </View>
                <View style={[styles.notImportantNotUrgent, styles.basicTile, {opacity: this.state.notImportantNotUrgentOpacity}]}>
                    <CategoryTile
                        category={"not important\n&\nnot urgent"}
                        onPress={this.onPress}
                        textStyle={styles.tileText}
                        identifier={"notImportantNotUrgent"}
                        style={{height: '100%', width: '100%'}}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
    },
    basicTile: {
        margin: '1%',
        width: '45%',
        height: '43.45%',
    },
    importantUrgent: {
        backgroundColor: Colors.categoryGreen,
    },
    importantNotUrgent: {
        backgroundColor: Colors.categoryOrange,

    },
    notImportantUrgent: {
        backgroundColor: Colors.categoryBlue,
    },
    notImportantNotUrgent: {
        backgroundColor: Colors.categoryRed,
    },
    tileText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        marginTop: '5%',
    }
});