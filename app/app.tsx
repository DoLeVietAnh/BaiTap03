import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "red" }]}>
        <Text style={styles.boxText}>Square 1</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "darkorange" }]}>
        <Text style={styles.boxText}>Square 2</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "green" }]}>
        <Text style={styles.boxText}>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  box: {
    width: 90,
    height: 90,
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Flex;
