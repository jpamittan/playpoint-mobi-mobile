import {
    createAppContainer,
    createStackNavigator
} from "vue-native-router";

// MOBI screens
import MobiCategoryScreen from "../screens/_mobi/games/category.vue";
import MobiLogoutScreen from "../screens/_mobi/login/logout.vue";
import MobiPlayGameScreen from "../screens/_mobi/play/index.vue";
import MobiSearchScreen from "../screens/_mobi/search/index.vue";
import Drawer from './drawer'

export default createAppContainer(
    createStackNavigator(
        {
            Drawer: { screen: Drawer },
            GamesByCategory: { screen: MobiCategoryScreen },
            SearchGames: { screen: MobiSearchScreen },
            PlayGame: { screen: MobiPlayGameScreen },
            Logout: { screen: MobiLogoutScreen }
        },
        {
            initialRouteName: "Drawer",
            headerMode: "none"
        }
    )
)