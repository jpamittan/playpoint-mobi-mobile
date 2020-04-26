<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-body>
        <nb-title>Logout</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <view>
        <nb-spinner color="orange" />
      </view>
      <text class="login-header">Logging out. Please wait...</text>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import { Toast } from "native-base";
import store from "../../../store";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  mounted() {
    store.dispatch('LOGOUT')
    .then(response => {
      setTimeout(() => {
        this.navigation.navigate("Games");
      }, 1000)
    });
  }
};
</script>

<style scoped>
.login-header {
  text-align: center;
}
</style>
