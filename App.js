import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalInputText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalInputText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    console.log("DELETE ITEM HERE!");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 26,
  },
  goalsContainer: {
    flex: 5,
  },
});
