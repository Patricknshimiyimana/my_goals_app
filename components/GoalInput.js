import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [goalInput, setGoalInput] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  };

  const addGoalHandler = () => {
    props.setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalInput, id: Math.random().toString() },
    ]);
    setGoalInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goals"
        onChangeText={goalInputHandler}
        value={goalInput}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
