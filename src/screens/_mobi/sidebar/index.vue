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
      <nb-list>
        <nb-list-item
          v-for="data in datas"
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
          <nb-right v-if="data.submenus">
            <nb-icon
              active
              name="ios-arrow-down"
              :style="{ fontSize: 26, width: 30 }"
            />
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import drawerImage from "../../../../assets/mobi/playpoint_logo.png";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  props: {
    navigation: {
      type: Object
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
            Platform.OS === "android" ? deviceHeight / 36 : deviceHeight / 35,
          resizeMode: "cover"
        },
        badgeText: {
          fontSize: Platform.OS === "android" ? 11 : 13,
          marginTop: Platform.OS === "android" ? -3 : 0,
          fontWeight: "400"
        }
      },
      datas: [
        {
          name: "Home",
          route: "MobiHome",
          icon: "home",
          color: "#2ECC71",
          bg: "#C5F442"
        },
        {
          name: "Games",
          route: "Games",
          icon: "logo-game-controller-b",
          color: "#E67E22",
          bg: "#C5F442",
          submenus: true
        },
        {
          name: "Spotlight",
          route: "GameSpotlight",
          bg: "#C5F442",
          show: "games"
        },
        {
          name: "Action",
          route: "GameAction",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Adventure",
          route: "GameAdventure",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Big Kids",
          route: "GameBigKids",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Board",
          route: "GameBoard",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Cards",
          route: "GameCards",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Casual",
          route: "GameCasual",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Family",
          route: "GameFamily",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Kids",
          route: "GameKids",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Match 3",
          route: "GameMatch3",
          bg: "#C5F442",
          parent: "games"
        },
        {
          name: "Signup / Login",
          route: "SignupLogin",
          icon: "person",
          color: "#7FB3D5",
          bg: "#C5F442"
        },
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
  height: 75;
  width: 210;
}
</style>
