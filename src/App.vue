<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
import { Root } from "native-base";
import MobiHomeScreen from "./screens/_mobi/home/index.vue";
import MobiSideBarScreen from "./screens/_mobi/sidebar/index.vue";

const Drawer = createDrawerNavigator(
  {
    MobiHome: { screen: MobiHomeScreen },
  },
  {
    initialRouteName: "MobiHome",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: MobiSideBarScreen
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer }
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);
export default {
  components: { Root, AppNavigation }
};
</script>
