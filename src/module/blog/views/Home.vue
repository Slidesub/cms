<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <c-m-editor/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import CMEditor from '@/components/CMEditor.vue';

@Component({
  components: {
    HelloWorld,
    CMEditor
  },
})
export default class Home extends Vue {}
</script>
