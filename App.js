import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // state of all tasks to do created by user
  const [courseGoals, addGoal] = useState([]);

  // boolean state, to display Modal
  const [addMode, setAddMode] = useState(false);

  // handle button presses to add goals
  const addGoalHandler = (goalTitle) => {
    addGoal((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), val: goalTitle },
    ]);
    setAddMode(false)
  };

  const deleteHandler = (id) => {
    addGoal((currentGoals) => {
      return currentGoals.filter((elm) => elm.key !== id);
    });
  };


  return (
    <View style={styles.container}>
      <Button title="Add New Task" onPress={() => setAddMode(true)} />
      <GoalInput mode={addMode} changeMode={setAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={deleteHandler}
            title={itemData.item.val}
            id={itemData.item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:30
  },
  screen: {
    padding: 50,
  },
});
