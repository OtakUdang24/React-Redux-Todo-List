import React, { Component } from "react";
import { Text, View, Button, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from "react-native";
import { connect } from 'react-redux'
import Note from './Note'
import { addTodo, deleteTodo, setTodoId } from "../actions/actions"

class Todo extends Component {
  state = {
    noteText: "",
    todoId: ""
  };

  componentWillMount(){
    console.log(this.props.todo)
  }
  handleDelete = (index) => {
    // alert(index)
    this.props.dispatch(deleteTodo(index))
  }
  handleUpdate = () => {
    const d = new Date();
    todo = {
      'date' : d.getFullYear() +
        '/' + (d.getMonth() + 1) +
        '/' + d.getDate(),
      'todo' : this.state.noteText
    }
    this.props.dispatch(setTodoId(this.state.todoId, todo))
    this.setState({
      noteText: '',
      todoId: ''
    })    
  }
  textInput = (text, id) => {
    this.setState({
      noteText: text,
      todoId: id
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}> Notes</Text>
        </View>
        {/* <ScrollView style={styles.scrollContainer}>

        </ScrollView> */}
        <View style={styles.scrollContainer}>
          <FlatList
            data={this.props.todo}
            renderItem={({item, index}) => (
              <Note
                todo={item.text.todo}
                date={item.text.date}
                delete={() => this.handleDelete(item.id)}
                textInput={() => this.textInput(item.text.todo, item.id)}
                // onpress={() => this.handleOnPress(index)}
                // textInput={() => this.textInput(item.text.todo)}
              />
            )}
            keyExtractor={(item,index) => 'key ' + index}
          />
        </View>
        <View style={styles.footer}>
          <TextInput
            onChangeText={noteText => this.setState({ noteText })}
            style={styles.textInput}
            placeholder="write note here"
            placeholderTextColor="white"
            value={this.state.noteText}
          />
          <TouchableOpacity 
            onPress={this.handleUpdate}
            style={{padding: 20, backgroundColor: '#E91E63'}}>
            <Text style={{color: '#fff', alignSelf: "stretch",}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('Add')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => (
  { todo: state.todo }
)

export default connect(mapStateToProps)(Todo)


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
    zIndex: 10,
    flexDirection: 'row'
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#E91E63",
    flex:1
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
