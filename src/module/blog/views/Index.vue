<template>
    <div class="index">
        <section>
            <h1 :style="{textAlign: 'center'}">Welcome to unicome.org</h1>
            <article>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </article>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Index extends Vue {
    data () {
        return {

        }
    }
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

