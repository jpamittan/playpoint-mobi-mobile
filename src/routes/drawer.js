import MobiSideBarScreen from "../screens/_mobi/sidebar/index.vue";
import MobiGameScreen from "../screens/_mobi/games/index.vue";
import MobiLoginScreen from "../screens/_mobi/login/index.vue";

import {
    createDrawerNavigator
} from "vue-native-router";

export default createDrawerNavigator(
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