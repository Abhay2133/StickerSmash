import { MaterialIcons } from "@expo/vector-icons"
import {View, Pressable, StyleSheet } from "react-native"


export default function CirceButton({onPress}){
  return (
    <View style={styles.circleContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons style={styles.buttonIcon} size={38} color="#25292e" name="add" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  circleContainer:{
    height: 84,
    width: 84,
    borderRadius: 42,
    padding: 3,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d"
  },
  circleButton:{
    borderRadius: 42,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"center",
    flex: 1,
  },
  buttonIcon:{}
})