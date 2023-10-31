import React from "react";
import { TouchableOpacity,View, Text, StyleSheet } from "react-native";
import { useNavigation, } from "@react-navigation/native";

const ProfileButton = ({currentScreen}) => {
  const navigation = useNavigation();
  // if(navState.name == 'Login') return null
  // if(currentScreen == 'Login') return null
  // if(navigation.state.name == 'Login') return null
  const handleProfilePress = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.buttonContainer}>

    <TouchableOpacity style={styles.button} onPress={handleProfilePress}>
      <Text style={styles.buttonText}>My Profile</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "white",
    // backgroundColor:'#CF9FFF',
    backgroundColor:'#7B1FA2',
    borderRadius:50,
    margin:15,
    width: "30%",
    alignItems: "center",
    paddingVertical: 10,
    bottom: 0,
    right:0,
    position: "absolute",
    shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation:10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonContainer:{
    // display:'flex',
    // flexDirection:'row',
    // justifyContent:'space-between',
    // padding:10,
    width:'100%'
  }
});

export default ProfileButton;
