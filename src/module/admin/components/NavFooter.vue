<template>
    <footer id="navFooter">unicome.org</footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavMenu extends Vue {
}
</script>

<style lang="stylus" scoped>
footer
    width 100%
    height 3rem
    line-height 3rem
</style>
