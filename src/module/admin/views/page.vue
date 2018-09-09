<template>
  <div id="page">
    <nav-header/>
    <main>
      <nav-menu/>
      <section>
        <router-view :style="{flex: 1}"/>
        <nav-footer/>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavHeader from '../components/NavHeader.vue'
import NavMenu from '../components/NavMenu.vue'
import NavFooter from '../components/NavFooter.vue'

@Component({
    components: {
      NavHeader,
      NavMenu,
      NavFooter
    }
})
export default class App extends Vue {}
</script>

<style lang="stylus" scoped>
#page
  min-height: 100vh
  display flex
  flex-direction column

main
  display flex
  flex-direction row
  flex 1
  width 100%
  section
    display flex
    flex-direction column
    width 100%
    footer
      height 3rem
      width 100%
</style>
