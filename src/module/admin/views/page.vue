<template>
  <div id="page">
    <div class="menu"><nav-menu/></div>
    <div class="container"><router-view/></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavMenu from '../components/NavMenu.vue'

@Component({
    components: {
        NavMenu
    }
})
export default class App extends Vue {}
</script>

<style lang="stylus" scoped>
#page
  min-height: 100vh
  display flex
  flex-direction row
.menu
  width: 10rem
  border-right: 1px solid #cfd4db
.container
  padding: .5rem
  width: 100%
</style>
