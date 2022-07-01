import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles, { DARK_GRAY, PRIMARY_COLOR, WHITE } from "../assets/styles";

const TabBarIcon = ({ focused, iconName, text }: TabBarIconT) => {
  const iconFocused = focused ? PRIMARY_COLOR : WHITE;

  return (
    
    <View style={styles.iconMenu}>
      <Icon name={iconName} size={32} color={iconFocused} />
      <Text style={[styles.tabButtonText, { color: iconFocused }]}>{text}</Text>
    </View>
  );
};

export default TabBarIcon;
