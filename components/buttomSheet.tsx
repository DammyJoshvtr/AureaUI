import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function BasicBottomSheetExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Sheet" onPress={() => setIsPresented(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPresented}
        onRequestClose={() => setIsPresented(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setIsPresented(false)}
        >
          <View style={styles.sheet}>
            <Text style={styles.text}>Hello, world!</Text>
            <Button title="Close" onPress={() => setIsPresented(false)} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  sheet: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
