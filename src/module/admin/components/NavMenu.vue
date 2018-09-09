<template>
    <aside id="navMenu">
        <ul>
            <li><img src="" alt=""></li>
        </ul>
        <ul>
            <li v-for="(application, index) of applications" :key="index">
                <a :href="application.path">{{application.tag}}</a>
            </li>
        </ul>
    </aside>
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
#navMenu
    width 10rem
    border-right: 1px solid #cfd4db
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
