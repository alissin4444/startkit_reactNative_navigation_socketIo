import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Container } from "./styles";

const Home = ({ navigation }) => {
  return (
    <View justifyContent="center" alignItems="center" flex={1}>
      <TouchableOpacity onPress={() => navigation.push("Fruits")}>
        <Text>Visualize your fruits</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
