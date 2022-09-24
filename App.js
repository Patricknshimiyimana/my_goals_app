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

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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
