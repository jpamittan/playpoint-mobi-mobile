<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header searchBar rounded>
      <nb-icon 
        class="back-icon"
        name="arrow-back" 
        button 
        :onPress="() => this.props.navigation.goBack()"
      />
      <nb-item>
        <nb-input v-model="search" placeholder="Search game..." style="padding-left: 10;"/>
        <nb-icon 
          v-if="hasSearchInput" 
          active 
          name="md-close" 
          button
          :onPress="() => clearSearch()"
        />
      </nb-item>
      <nb-button transparent :onPress="() => searchGame()">
        <nb-text><nb-icon active name="search" /></nb-text>
      </nb-button>
    </nb-header>
    <nb-content v-if="isSearch" :style="{ backgroundColor: screenBgColor }" class="game-container">
      <view v-if="isLoading">
        <nb-spinner color="orange" />
      </view>
      <view class="card-wrapper" v-else>
          <view v-if="!gamesSearchList.length" :style="{ flex: 1, justifyContent: 'center', alignItems: 'center' }">
            <nb-text :style="{ marginTop: 50, fontSize: 20 }">No games found.</nb-text>
          </view>
          <nb-card v-for="item in gamesSearchList" :key="item.id" class="card-item">
            <nb-card-item cardBody>
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
            <nb-card-item footer style="flex: 1; flexDirection: 'column'">
              <nb-text>{{ item.name }}</nb-text>
            </nb-card-item>
          </nb-card>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import imagePlaceholder from "../../../../assets/mobi/image-placeholder.jpg";
import store from "../../../store";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      imagePlaceholder,
      screenBgColor: '#FFFFFF',
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover"
        }
      },
      search: "",
      isSearch: false,
    };
  },
  computed: {
    gamesSearchList() {
      return store.state.searchGames;
    },
    isLoading() {
      return store.state.isLoading;
    },
    hasSearchInput() {
      return this.search.length;
    }
  },
  methods: {
    searchGame() {
      if (this.hasSearchInput) {
        this.isSearch = true;
        store.dispatch('SEARCH_GAMES', this.search);
      }
    },
    clearSearch() {
      this.search = "";
      this.isSearch = false;
    }
  }
};
</script>

<style scoped>
.back-icon {
  margin-top: 8px
  margin-left: 10px;
  padding-right: 10px;
}
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
  flex-basis: 50%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
}
.card-item-image {
  flex: 1;
  height: 150;
}
</style>