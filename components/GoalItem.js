import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 2,
    backgroundColor: "#373f4d",
    padding: 14,
    margin: 8,
    borderRadius: 8,
  },
  goalText: {
    color: "white",
  },
});
