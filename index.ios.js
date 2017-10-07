import React from "react";
import { Text, AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"albums"} />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent("albums", () => App);
