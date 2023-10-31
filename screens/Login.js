import { useEffect, useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../components/base/Styles";
import Button from "../components/base/Button";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [pwd, setpwd] = useState("");
  const userRef = useRef("");
  const passWordRef = useRef("");

  useEffect(() => {}, [user, pwd]);

  const userData = {
    userName: "ankit",
    passWord: "123",
  };

  const onLoginPress = () => {
    if (!user || !pwd) return alert("Please Enter username and password");
    if (
      user.toLowerCase() === userData.userName &&
      pwd.toLowerCase() === userData.passWord
    ) {
      alert("hello ankit");
      return navigation.navigate("Courses",{replace:true});
    }
    alert("wrong credentials");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h}>Test App!</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          defaultValue={user}
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter password"
          defaultValue={pwd}
          onChangeText={(text) => setpwd(text)}
        />
      </View>
      <Button onChangeAction={onLoginPress} buttonText="Login" />
    </View>
  );
};

export default Login;
