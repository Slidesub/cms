<template>
    <div id="navHeader">
        <header>
        </header>
    </div>
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
ul
    list-style none
    display flex
    flex-direction column
    margin 0
    padding 0
    text-align center
    li
        padding 0.5rem
</style>
