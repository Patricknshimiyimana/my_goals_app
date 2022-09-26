import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goalInputText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalInputText, id: Math.random().toString() },
    ]);
    setShowModal(false);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add new goal"
        color="#373f4d"
        onPress={() => {
          setShowModal(true);
        }}
      />
      <GoalInput
        showModal={showModal}
        setShowModal={setShowModal}
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        {/* <Text>List of goals</Text> */}
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
    marginTop: 20
  },
});
