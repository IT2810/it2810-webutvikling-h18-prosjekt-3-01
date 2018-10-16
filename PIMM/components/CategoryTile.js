import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class CategoryTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: ""
        }
    }

    componentDidMount(){
        this.setState({category: this.props.category})
    }

    render() {
        return(
          <TouchableOpacity
            style={this.props.style}
            onPress={this.props.onPress}
          >
              <Text style={this.props.textStyle}>
                  {this.state.category}
              </Text>
          </TouchableOpacity>
        )
    }
}


