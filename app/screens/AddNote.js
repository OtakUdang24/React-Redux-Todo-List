import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from "../actions/actions"

class AddNote extends Component {
  state = {
    todoText: ""
  };
  handleAdd = () => {
    const d = new Date();
    const txt= this.state.todoText
    todo = {
      'date' : d.getFullYear() +
        '/' + (d.getMonth() + 1) +
        '/' + d.getDate(),
      'todo' : txt
    }
    this.props.dispatch(addTodo(todo))
    this.setState({
      todoText: ''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Note</Text>
        <TextInput 
          onChangeText={(text) => {
            this.setState({
              todoText: text
            })
          }}
          value={this.state.todoText}
        />
        <Button 
          title="Add"
          onPress={()=> this.handleAdd()}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(AddNote)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  textHeader: {
    color: "white",
    fontSize: 24,
    padding: 20
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#E91E63"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 10,
    bottom: 90,
    backgroundColor: "#E91E63",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});
