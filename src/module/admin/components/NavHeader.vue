<template>
    <header id="navHeader">
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavMenu extends Vue {
    applications:Array<{}> = []
    created () {
        this.applications.push({tag: 'dashboard', path: '/admin'})
        this.applications.push({tag: 'blog', path: '/blog'})
    }
}
</script>

<style lang="stylus" scoped>
header
    height 3rem
    width 100%
    box-shadow 0 2px 4px 0 rgba(0,0,0,.2)
</style>
