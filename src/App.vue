<script>
import { state } from './state';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,

    },
    mounted() {
        const projects_url = state.base_api_url + state.projects_endpoint
        // console.log(projects_url);
        state.callApi(projects_url)
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
</template>