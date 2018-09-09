<template>
    <section>
        <h1 :style="{textAlign: 'center'}">Welcome to unicome.org</h1>
        <article>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </article>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavMenu from '../components/NavMenu.vue'

@Component({
    components: {
        NavMenu
    }
})
export default class Index extends Vue {
}
</script>

<style lang="stylus" scoped>
ul
    list-style none
    margin 0
    padding 0
    display flex
    flex-direction column

</style>

