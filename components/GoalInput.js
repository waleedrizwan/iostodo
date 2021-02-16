import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  // state of goal currently being added
  const [enteredGoal, setEnteredGoal] = useState("");

  // updates enteredGoal state on every input keystroke
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const cancel = () => {
    props.changeMode(false);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.mode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Ex. Take a shit"
          style={styles.inputTag}
          value={enteredGoal}
        />
        <View style={styles.buttonHolder}>
          <View style={styles.button}> 
            <Button title="add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}> 
            <Button title="cancel" color="red" onPress={cancel} />
            </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputTag: {
    width: 200,
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 5,
    marginBottom: 11,
  },
  buttonHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
      width: '45%'
  }
});

export default GoalInput;
