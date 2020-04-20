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
        <nb-button transparent>
          <nb-icon name="search" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content :style="{ backgroundColor: '#635DB7' }">
      <nb-grid>
        <nb-col >
          <nb-card>
            <nb-card-item cardBody>
              <image
                :source="{uri: 'https://cdn.entertainment.mypacks.com/game/546e0d5e577f416ac92de08192623d37/mpthumb.jpg'}"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'">
              <nb-text>Car Rush</nb-text>
              <nb-text>
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18}"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="ios-star-outline"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
              </nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
        <nb-col>
          <nb-card>
            <nb-card-item cardBody>
              <image
                :source="{uri: 'https://cdn.entertainment.mypacks.com/game/546e0d5e577f416ac92de08192623d37/mpthumb.jpg'}"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'">
              <nb-text>Car Rush</nb-text>
              <nb-text>
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18}"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="ios-star-outline"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
              </nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
      </nb-grid>
      <nb-grid>
        <nb-col >
          <nb-card>
            <nb-card-item cardBody>
              <image
                :source="{uri: 'https://cdn.entertainment.mypacks.com/game/546e0d5e577f416ac92de08192623d37/mpthumb.jpg'}"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'">
              <nb-text>Car Rush</nb-text>
              <nb-text>
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18}"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="ios-star-outline"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
              </nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
        <nb-col>
          <nb-card>
            <nb-card-item cardBody>
              <image
                :source="{uri: 'https://cdn.entertainment.mypacks.com/game/546e0d5e577f416ac92de08192623d37/mpthumb.jpg'}"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'">
              <nb-text>Car Rush</nb-text>
              <nb-text>
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18}"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="ios-star-outline"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
              </nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
      </nb-grid>
      <nb-grid>
        <nb-col >
          <nb-card>
            <nb-card-item cardBody>
              <image
                :source="{uri: 'https://cdn.entertainment.mypacks.com/game/546e0d5e577f416ac92de08192623d37/mpthumb.jpg'}"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'">
              <nb-text>Car Rush</nb-text>
              <nb-text>
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18}"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="ios-star-outline"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
              </nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
        <nb-col>
          <nb-card>
            <nb-card-item cardBody>
              <image
                :source="{uri: 'https://cdn.entertainment.mypacks.com/game/546e0d5e577f416ac92de08192623d37/mpthumb.jpg'}"
                class="card-item-image"
                :style="stylesObj.cardItemImage"
              />
            </nb-card-item>
            <nb-card-item footer bordered style="flex: 1; flexDirection: 'column'">
              <nb-text>Car Rush</nb-text>
              <nb-text>
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18}"
                />
                <nb-icon
                  active
                  name="star"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
                <nb-icon
                  active
                  name="ios-star-outline"
                  :style="{ color: '#f68b33', fontSize: 18 }"
                />
              </nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
      </nb-grid>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      header: "Games",
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover"
        }
      }
    };
  }
};
</script>

<style>
.card-item-image {
  flex: 1;
  height: 150;
}
</style>
