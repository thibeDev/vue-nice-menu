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
            :icon-class="['fas fa-info-circle', 'fas fa-info-circle', 'fas fa-info-circle', 'fas fa-info-circle']"
            :menu-url-list="[{isUrl: false, url: '/'},{isUrl: false, url: '/'},{isUrl: false, url: '/'},{isUrl: false, url: '/'}]"
    ></vue-nice-menu>
  </div>
</template>
