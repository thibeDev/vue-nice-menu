<script>
    import Vue from 'vue';
    import VueNiceMenu from '@/vue-nice-menu.vue';

    export default Vue.extend({
        name: 'ServeDev',
        components: {
            VueNiceMenu
        }
    });
</script>

<template>
    <div id="app">
        <vue-nice-menu
                :menu-count="4"
                :items="[
                    {
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: null
                    },
                    {
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: null
                    },{
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: null
                    },
                    {
                        url: '/',
                        isRouterLink: false,
                        iconClass: '',
                        backgroundColor: null
                    },



                ]"
        ></vue-nice-menu>
    </div>
</template>
