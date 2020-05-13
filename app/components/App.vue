<template>
    <Page>
        <ActionBar color="#FFFFFF" backgroundColor="#41B883">
            <StackLayout orientation="horizontal">
                <Image src="~/assets/images/playpoint_logo.png" width="100" verticalAlignment="center" />
            </StackLayout>
            <ActionItem @tap="onSearch"
                ios.systemIcon="12" ios.position="right"
                android.systemIcon="ic_menu_search" android.position="right"
            />
        </ActionBar>
        <FlexboxLayout flexDirection="column" v-if="isLoading">
            <Label text="Loading please wait..." height="100" class="game-na" />
        </FlexboxLayout>
        <TabView v-else iosIconRenderingMode="alwaysOriginal" selectedTabTextColor="#FFC300">
            <TabViewItem title="Spotlight" iconSource="~/assets/images/game-icon.png" stretch="none">
                <ScrollView>
                    <WrapLayout>
                        <StackLayout v-for="item in spotlightList" :key="item.id" 
                            width="47.5%" 
                            backgroundColor="#FFFFFF"
                            @tap="playGame(item.gameurl, item.name)"
                        >
                            <Image 
                                :src="item.featured_image" 
                                stretch="aspectFill" 
                            />
                            <Label :text="item.name" />
                        </StackLayout>
                    </WrapLayout>
                </ScrollView>
            </TabViewItem>
            <TabViewItem title="Categories" iconSource="~/assets/images/categories-icon.png" stretch="none">
                <ListView for="item in categoryList" @itemTap="onItemcategoryTap" separatorColor="transparent">
                  <v-template>
                    <stack-layout>
                        <grid-layout columns="*, auto" rows="auto, auto" class="list-item">
                            <Label row="0" :text="item.tag" class="list-title" />
                        </grid-layout>
                    </stack-layout>
                  </v-template>
                </ListView>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import store from '../store';
    import Play from './Play';
    import Category from './Category';
    import Search from './Search';

    export default {
        created() {
            // this.SPOTLIGHTS()
            // this.CATEGORIES()
        },
        mounted () {
            store.dispatch('SPOTLIGHTS')
            .then(response => {
                this.spotlightList = store.state.spotlights;
                this.isLoading = false;
            });
            store.dispatch('CATEGORIES')
            .then(response => {
                this.categoryList = store.state.categories;
            });
        },
        data() {
            return {
                isLoading: true,
                spotlightList: [],
                categoryList: []
            }
        },
        computed: {
            // ...mapGetters('spotlightStore', {
            //     spotlightList: 'spotlights',
            //     isLoading: 'isLoading'
            // }),
            // ...mapGetters('gamesCategoryStore', {
            //     categoryList: 'categories',
            // })
            // spotlightList() {
            //     console.log(store.state.spotlights);
            //     return store.state.spotlights;
            // },
            // categoryList() {
            //     console.log(store.state.categories);
            //     return store.state.categories;
            // },
            // isLoading() {
            //     return store.state.isLoading;
            // }
        },
        methods: {
            // ...mapActions('spotlightStore', ['SPOTLIGHTS']),
            // ...mapActions('gamesCategoryStore', ['CATEGORIES', 'SELECTED_CATEGORY']),
            onItemcategoryTap(event) {
                store.dispatch('SELECTED_CATEGORY', this.categoryList[event.index].tag)
                .then(response => {
                    this.$navigateTo(Category)
                });
                // this.SELECTED_CATEGORY(this.categoryList[event.index].tag)
            },
            playGame(gameurl, gameName) {
                store.dispatch('SELECTED_GAME', gameurl);
                store.dispatch('SELECTED_GAME_NAME', gameName);
                this.$navigateTo(Play);
            },
            onSearch() {
                this.$navigateTo(Search);
            }
        }
    }
</script>

<style scoped>
    TabView{
        font-size: 12;
    }
    Label {
        text-align: center;
        border: 1px solid #999999;
        color: #3368C9;
    }
    StackLayout {
        margin-left: 1%;
        margin-right: 1%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .search-layout {
        margin-left: 0 !important;
        margin-right: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
    SearchBar {
        border: 0;
        background-color: #FFFFFF;
        color: #000000;
    }
    .list-item {
        padding: 0;
        margin: 0;
    }
    .list-title {
        color: #FFFFFF;
        font-weight: normal;
        text-align: left;
    }
    .game-na {
        text-align: center;
        color: #FFFFFF;
    }
</style>
