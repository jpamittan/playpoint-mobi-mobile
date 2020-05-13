<template>
    <Page>
        <ActionBar :title="gameName">
            <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="goBack" />
        </ActionBar>
        <WebView v-if="gameUrl" loadFinished="onLoadFinished" :src="gameUrl" />
        <FlexboxLayout flexDirection="column" v-else>
            <Label text="Game not available." height="100" class="game-na" />
        </FlexboxLayout>
    </Page>
</template>

<script>
    import store from '../store';

    export default {
        created() {
            this.gameUrl = store.state.selected_game_url;
            this.gameName = store.state.selected_game_name;
        },
        data() {
            return {
                gameUrl: "",
                gameName: ""
            };
        }
    }
</script>

<style scoped>
    WebView {
      margin-top: -20px;
    }
    .btn-exit {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 50px;
        height: 40px;
    }
    .game-na {
        text-align: center;
    }
</style>
