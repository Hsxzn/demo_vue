<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <button @click="change">change computed modalFromData</button>
    <br/>
    <br/>
    <br/>
    <button @click="close">close dialog</button>
  </div>
</template>

<script>
import { modalOpt, edit } from './data'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    modalFromData: function() {
      // 这里条件计算
      if (this.msg) {
        const param = this.modalOpt
        return param
      } else {
        const param = [this.edit, ...this.modalOpt]
        return param
      }
    }
  },
  data() {
    return {
      modalOpt,
      edit
    }
  },
  methods:{
    change() {
      this.modalOpt[2].fields[3].disabled = false
      console.log('change', this.modalOpt, this.modalFromData);
      this.$forceUpdate()
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
