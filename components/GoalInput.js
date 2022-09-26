import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  const [goalInput, setGoalInput] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalInput);
    setGoalInput("");
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          value={goalInput}
          onChangeText={goalInputHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button
            title="Cancel"
            onPress={() => {
              props.setShowModal(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
