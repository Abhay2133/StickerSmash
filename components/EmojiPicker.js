import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function EmojiPicker({ isVisible, onClose, children }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a Sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={22} color="#fff" />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    position:"absolute",
    bottom: 0,
    backgroundColor: '#25292e',
    // backgroundColor: 'red',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "16%",
    // backgroundColor:'green',
    backgroundColor: '#464C55',
    alignItems:"center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 16
  },
});
