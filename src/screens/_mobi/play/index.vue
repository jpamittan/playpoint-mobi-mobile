<template>
  <view class="container">
    <web-view
      v-if="gameUrl"
      :source="{ uri: gameUrl }"
      :onPress="() => this.props.navigation.goBack()"
    />
    <view v-else :style="{ flex: 1, justifyContent: 'center', alignItems: 'center' }">
      <nb-icon name="md-sad" :style="{ color: 'orange' }" />
      <nb-text :style="{ marginTop: 10, fontSize: 20 }">Game not available.</nb-text>
    </view>
    <View :style="{ position: 'absolute', left: 0, bottom: 0, zIndex: 1 }">
      <nb-button transparent class="exit-btn" :onPress="() => exitGame()">
        <nb-text class="exit-text" :style="{ color: 'orange' }">Exit</nb-text>
      </nb-button>
    </View>
  </view>
</template>

<script>
import ScreenOrientation from 'expo-screen-orientation';
import { Orientation } from 'react-native-orientation';
import { Dimensions } from 'react-native';
import { WebView } from "react-native-webview";
import { ActionSheet } from "native-base";
import store from "../../../store";
Dimensions.addEventListener('change', (dimensions) => {
  //  dimensions.window.width
  //  dimensions.window.height
  //  dimensions.screen.width
  //  dimensions.screen.height
  console.log("dimensionss changed...");
  // ScreenOrientation.OrientationLock.LANDSCAPE_LEFT;
});

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    "web-view": WebView
  },
  created() {
    this.gameUrl = store.state.selected_game_url;
  },
  data() {
    return {
      gameUrl: "",
      btnOptions: ["Yes", "No"],
      optionCancelIndex: 1,
      optionDestructiveIndex: 0,
      accelerometerData: {}
    };
  },
  methods: {
    exitGame() {
      ActionSheet.show(
        {
          options: this.btnOptions,
          cancelButtonIndex: this.optionCancelIndex,
          destructiveButtonIndex: this.optionDestructiveIndex,
          title: "Exit the game?"
        },
        buttonIndex => {
          if (buttonIndex == 0) {
            this.navigation.goBack();
          }
        }
      );
    }
  }
};
</script>

<style>
.container {
  background-color: #FFFFFF;
  flex: 1;
}
.exit-btn {
  height: 25;
  background-color: #CCCCCC;
  border-radius: 0;
}
.exit-text {
  padding-left: 3;
  padding-right: 3;
}
</style>