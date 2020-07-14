import React, { useState, useEffect } from "react";

import { Text } from "react-native";

import io from "socket.io-client";

import { Container } from "./styles";

const socketio = io("http://192.168.0.5:3333");

const Home = ({ navigation }) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    socketio.on("@fruitApi/new_fruit", ({ fruit }) => {
      setFruits((oldFruits) => [
        ...oldFruits,
        `${fruit} ${new Date().getTime()}`,
      ]);
    });
  }, []);

  return (
    <Container>
      {fruits.map((fruit) => (
        <Text key={fruit}>{fruit}</Text>
      ))}
    </Container>
  );
};

export default Home;
