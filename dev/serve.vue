<template>
    <div id="app">
        <vue-nice-menu
                :menu-count="4"
                ref="test"
                @sub-menu-clicked="onProcess"
                :autoClose="false"
                :items="[
                    {
                        id: 1,
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: null,
                        color: '#0000',
                        openNewTab: false
                    },
                    {
                        id: 2,
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: '#000',
                        openNewTab: false
                    },
                    {
                        id: 3,
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: null,
                        openNewTab: false
                    },
                    {
                        id: 4,
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: null,
                        openNewTab: false
                    },
                ]"
        ></vue-nice-menu>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueNiceMenu from '@/vue-nice-menu.vue';

    export default Vue.extend({
        name: 'ServeDev',
        components: {
            VueNiceMenu
        },
        data() {
            return {

            }
        },
        methods: {
            onProcess(e) {
                this.$refs.test.close()
            }
        }
    });
</script>
