import React, { Component } from "react";
import {StyleSheet, View} from "react-native";
import CategoryTile from "../components/CategoryTile";
import Colors from "../constants/Colors";


export default class CategorySelector extends Component {
    constructor(props){
        super(props);

    }

    onPress = () => {};

    setStyle = () => {
        return styles.basicTile;
    };

    render(){
        return(
            //TODO Use enum instead of arbitrary numbers?
            <View style={styles.container}>
                <CategoryTile
                    category={"important\n&\n urgent"}
                    onPress={this.onPress()}
                    style={styles.importantUrgent}
                    textStyle={styles.tileText}
                />
                <CategoryTile
                    category={"important\n&\n not urgent"}
                    onPress={this.onPress()}
                    style={styles.importantNotUrgent}
                    textStyle={styles.tileText}
                />
                <CategoryTile
                    category={"not important\n&\n urgent"}
                    onPress={this.onPress()}
                    style={styles.notImportantUrgent}
                    textStyle={styles.tileText}
                />
                <CategoryTile
                    category={"not important\n&\nnot urgent"}
                    onPress={this.onPress()}
                    style={styles.notImportantNotUrgent}
                    textStyle={styles.tileText}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    basicTile: {
        width: '48%',
        padding: '8%',
        margin: '1%',
    },
    importantUrgent: {
        backgroundColor: Colors.categoryGreen,
        width: '48%',
        padding: '8%',
        margin: '1%',
    },
    importantNotUrgent: {
        backgroundColor: Colors.categoryOrange,
        width: '48%',
        padding: '8%',
        margin: '1%',
    },
    notImportantUrgent: {
        backgroundColor: Colors.categoryBlue,
        width: '48%',
        padding: '8%',
        margin: '1%',
    },
    notImportantNotUrgent: {
        backgroundColor: Colors.categoryRed,
        width: '48%',
        padding: '8%',
        margin: '1%',
    },
    tileText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
    }
});