<template>
    <Page actionBarHidden="false">
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
        },
        data() {
            return {
                gameUrl: ""
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
