<template>
    <div id="codeMirror">
        <textarea id="editor" ref="editor" :style="{display: 'none'}"></textarea>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/darcula.css'

@Component
export default class CMEditor extends Vue {
//   @Prop() private msg!: string;
  cmEditor:any = undefined
  mounted () {
    let editorRef:any = document.querySelector('#editor')
    this.cmEditor = CodeMirror.fromTextArea(editorRef, {
        lineNumbers: true,
        theme:'darcula'
    })
  }
}
</script>
<style lang="stylus">
</style>


