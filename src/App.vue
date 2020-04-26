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
// MOBI screens
import MobiGameScreen from "./screens/_mobi/games/index.vue";
import MobiCategoryScreen from "./screens/_mobi/games/category.vue";
import MobiLoginScreen from "./screens/_mobi/login/index.vue";
import MobiLogoutScreen from "./screens/_mobi/login/logout.vue";
import MobiSideBarScreen from "./screens/_mobi/sidebar/index.vue";
import MobiSearchScreen from "./screens/_mobi/search/index.vue";

const Drawer = createDrawerNavigator(
  {
    Games: { screen: MobiGameScreen },
    SignupLogin: { screen: MobiLoginScreen }
  },
  {
    initialRouteName: "Games",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: MobiSideBarScreen
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer },
      GamesByCategory: { screen: MobiCategoryScreen },
      SearchGames: { screen: MobiSearchScreen },
      Logout: { screen: MobiLogoutScreen }
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
