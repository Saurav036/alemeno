import React from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "./Styles";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props?.style }}>{props.children}</View>
  );
};

export default Card;
