import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
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
