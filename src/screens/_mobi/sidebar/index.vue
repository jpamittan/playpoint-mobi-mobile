<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper" :bounces="false">
      <image
        class="drawer-cover"
        :style="stylesObj.drawerCoverObj"
      />
      <image
        :source="drawerImage"
        class="drawer-image"
        :style="stylesObj.drawerImageObj"
      />
      <nb-list v-if="isLogged">
        <nb-list-item
          v-for="data in dataLoggedIn"
          :key="data.route"
          button
          noBorder
          :onPress="() => handleListItemClick(data)"
        >
          <nb-left>
            <nb-icon
              active
              :name="data.icon"
              :style="{ color: data.color, fontSize: 26, width: 30 }"
            />
            <nb-text>
              {{ data.name }}
            </nb-text>
          </nb-left>
        </nb-list-item>
      </nb-list>
      <nb-list v-else>
        <nb-list-item
          v-for="data in dataLoggedOut"
          :key="data.route"
          button
          noBorder
          :onPress="() => handleListItemClick(data)"
        >
          <nb-left>
            <nb-icon
              active
              :name="data.icon"
              :style="{ color: data.color, fontSize: 26, width: 30 }"
            />
            <nb-text>
              {{ data.name }}
            </nb-text>
          </nb-left>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import drawerImage from "../../../../assets/mobi/playpoint_logo.png";
import store from "../../../store";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  created() {
    console.log("created")
  },
  mounted() {
    console.log("mounted")
  },
  computed: {
    isLogged() {
      return store.state.isLogged;
    }
  },
  data() {
    return {
      drawerImage,
      stylesObj: {
        drawerCoverObj: {
          height: deviceHeight / 7
        },
        drawerImageObj: {
          left: Platform.OS === "android" ? deviceWidth / 11.5 : deviceWidth / 10.5,
          top:
            Platform.OS === "android" ? deviceHeight / 26 : deviceHeight / 25,
          resizeMode: "cover"
        },
        badgeText: {
          fontSize: Platform.OS === "android" ? 11 : 13,
          marginTop: Platform.OS === "android" ? -3 : 0,
          fontWeight: "400"
        }
      },
      dataLoggedIn: [
        {
          name: "Games",
          route: "Games",
          icon: "logo-game-controller-b",
          color: "#E67E22",
          bg: "#C5F442"
        },
        {
          name: "Logout",
          route: "Logout",
          icon: "md-power",
          color: "#D95664",
          bg: "#C5F442"
        }
      ],
      dataLoggedOut: [
        {
          name: "Games",
          route: "Games",
          icon: "logo-game-controller-b",
          color: "#E67E22",
          bg: "#C5F442"
        },
        {
          name: "Signup / Login",
          route: "SignupLogin",
          icon: "person",
          color: "#7FB3D5",
          bg: "#C5F442"
        }
      ]
    };
  },
  methods: {
    handleListItemClick(dataObj) {
      this.navigation.navigate(dataObj.route);
    }
  }
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
}
.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  background-color: #f4f4f4;
}
.drawer-image {
  align-self: center;
  position: absolute;
  height: 55;
  width: 210;
}
</style>
