<template>
    <Page>
        <ActionBar color="#FFFFFF" backgroundColor="#41B883">
            <StackLayout orientation="horizontal">
                <Image src="~/assets/images/playpoint_logo.png" width="100" verticalAlignment="center" />
            </StackLayout>
        </ActionBar>
        <WrapLayout>
            <StackLayout width="100%" class="search-layout">
                <SearchBar 
                    hint="Search game..." 
                    v-model="searchQuery" 
                    @submit="onSearch" 
                    textFieldHintColor="#CCCCCC"
                />
            </StackLayout>
        </WrapLayout>
    </Page>
</template>

<script>
    import store from '../store';
    import SearchResults from './SearchResults';

    export default {
        data() {
            return {
                searchQuery: ""
            }
        },
        methods: {
            onSearch() {
                store.dispatch('SEARCH_QUERY', this.searchQuery);
                this.$navigateTo(SearchResults);
            }
        }
    }
</script>

<style scoped>
    SearchBar {
        font-size: 16px;
    }
</style>
