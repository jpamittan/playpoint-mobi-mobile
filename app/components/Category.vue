<template>
    <Page>
        <ActionBar color="#FFFFFF" backgroundColor="#000000">
            <StackLayout orientation="horizontal">
                <Image src="~/assets/images/game-plus-logo.png" width="130" verticalAlignment="center" />
            </StackLayout>
        </ActionBar>
        <FlexboxLayout flexDirection="column" v-if="isLoading">
            <Label text="Loading please wait..." height="100" class="game-na" />
        </FlexboxLayout>
        <ScrollView v-else>
            <WrapLayout>
                <FlexboxLayout width="100%" flexDirection="column" v-if="!gamesByCategoryList.length">
                    <Label text="No games found." height="100" class="game-na" />
                </FlexboxLayout>
                <StackLayout v-else 
                    v-for="item in gamesByCategoryList" :key="item.id" 
                    width="47.5%" 
                    backgroundColor="#FFFFFF"
                    @tap="playGame(item.gameurl, item.name)"
                >
                    <Image
                        v-if="(item.featured_image == 'mpthumb.jpg')" 
                        src="~/assets/images/image-placeholder.jpg" 
                        stretch="aspectFill" 
                    />
                    <Image 
                        v-else
                        :src="item.featured_image" 
                        stretch="aspectFill" 
                    />
                    <Label :text="item.name" />
                </StackLayout>
            </WrapLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import store from '../store';
    import Play from './Play';

    export default {
        created() {
            store.dispatch('GAMES_CATEGORY', store.state.selected_category)
            .then(response => {
                this.gamesByCategoryList = store.state.gamesPerCategory;
                this.isLoading = false;
            });
        },
        data() {
            return {
                isLoading: true,
                gamesByCategoryList: []
            }
        },
        computed: {
            // gamesByCategoryList() {
            //     console.log(store.state.gamesPerCategory);
            //     return store.state.gamesPerCategory;
            // },
            // isLoading() {
            //     return store.state.isLoading;
            // }
        },
        methods: {
            playGame(gameurl, gameName) {
                store.dispatch('SELECTED_GAME', gameurl);
                store.dispatch('SELECTED_GAME_NAME', gameName);
                this.$navigateTo(Play);
            },
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
    .game-na {
        text-align: center;
        color: #FFFFFF;
    }
</style>
