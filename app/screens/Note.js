import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
const Note = props => {
  return (
    
      <View style={styles.note} >
        <TouchableOpacity onPress={props.textInput}>
            <Text style={styles.noteText}>{props.date}</Text>
            <Text style={styles.noteText}>{props.todo}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.delete} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}> Delete </Text>
        </TouchableOpacity>
      </View>
    
  );
};

export default Note;

const styles = {
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "red"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#e91e63"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "white"
  }
};
