<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
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
      <view v-if="spotlight" class="card-wrapper">
          <nb-card v-for="item in spotlightList" :key="item.id" class="card-item">
            <nb-card-item cardBody button :onPress="() => playGame(item.gameurl)">
              <image
                :source="{ uri: item.featured_image }"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'; borderBottomWidth: 0;">
              <nb-text>{{ item.name }}</nb-text>
            </nb-card-item>
          </nb-card>
      </view>
      <nb-list v-if="categories">
        <nb-list-item v-for="item in categoryList" 
          button 
          :key="item.tag" 
          :style="{ marginLeft: 0 }" 
          :onPress="() => selectedCategory(item.tag)">
          <nb-left>
            <nb-text :style="{ marginLeft: 10 }">
              {{ item.tag }}
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
    <nb-footer>
      <nb-footer-tab>
        <nb-button :active="spotlight" :onPress="togglespotlight">
          <nb-icon name="apps" :active="spotlight" />
          <nb-text>Spotlight</nb-text>
        </nb-button>
        <nb-button :active="categories" :onPress="togglecategories">
          <nb-icon name="ios-list" :active="categories" />
          <nb-text>Categories</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
import store from "../../../store";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  mounted() {
    store.dispatch('SPOTLIGHTS');
    store.dispatch('CATEGORIES');
  },
  data() {
    return {
      header: "Games",
      screenBgColor: '#FFFFFF',
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
        }
      },
      spotlight: true,
      categories: false
    };
  },
  computed: {
    spotlightList() {
      return store.state.spotlights;
    },
    categoryList() {
      return store.state.categories;
    }
  },
  methods: {
    togglespotlight() {
      this.spotlight = true;
      this.categories = false;
    },
    togglecategories() {
      this.spotlight = false;
      this.categories = true;
    },
    selectedCategory(tag) {
      store.dispatch('SELECTED_CATEGORIES', tag);
      this.navigation.navigate("GamesByCategory");
    },
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
