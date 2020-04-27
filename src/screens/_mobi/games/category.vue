<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{ header }}</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent :onPress="() => searchGames()">
          <nb-icon name="search" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content :style="{ backgroundColor: screenBgColor }" class="game-container">
      <view v-if="isLoading">
        <nb-spinner color="orange" />
      </view>
      <view class="card-wrapper" v-else>
          <view v-if="!gamesByCategoryList.length" :style="{ flex: 1, justifyContent: 'center', alignItems: 'center' }">
            <nb-text :style="{ marginTop: 50, fontSize: 20 }">No games found.</nb-text>
          </view>
          <nb-card v-for="item in gamesByCategoryList" :key="item.id" class="card-item">
            <nb-card-item cardBody button :onPress="() => playGame(item.gameurl)">
              <image
                v-if="( item.featured_image != 'mpthumb.jpg')" 
                :source="{ uri: item.featured_image }"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
              <image
                v-else
                :source="imagePlaceholder"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'; borderBottomWidth: 0;">
              <nb-text>{{ item.name }}</nb-text>
            </nb-card-item>
          </nb-card>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
import imagePlaceholder from "../../../../assets/mobi/image-placeholder.jpg";
import store from "../../../store";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  created() {
    this.header = store.state.selected_category;
  },
  mounted() {
    store.dispatch('GAMES_CATEGORY', this.header);
  },
  data() {
    return {
      imagePlaceholder,
      header: "",
      screenBgColor: '#FFFFFF',
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover"
        }
      }
    };
  },
  computed: {
    gamesByCategoryList() {
      return store.state.gamesPerCategory;
    },
    isLoading() {
      return store.state.isLoading;
    }
  },
  methods: {
    searchGames() {
      this.navigation.navigate("SearchGames");
    },
    playGame(gameurl){
      store.dispatch('SELECTED_GAME', gameurl);
      this.navigation.navigate("PlayGame");
    }
  }
};
</script>

<style scoped>
.game-container {
  padding: 0;
  margin: 0;
}
.card-wrapper {
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
}
.card-item {
  flex-basis: 48%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  border-radius: 0;
}
.card-item-image {
  flex: 1;
  height: 120;
}
</style>
