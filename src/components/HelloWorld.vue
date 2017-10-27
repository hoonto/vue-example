<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ nicsMessage }}</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button @click.prevent="goSomewhere('nic')">Go See Nic in LA!</button>
  </div>
</template>

<script>
import Nic from './Nic';

export default {
  name: 'HelloWorld',
  components: { Nic },
  data () {
    return {
      msg: 'Hey Nic!',
      nicsMessage: ''
    }
  },
  mounted() {
    this.nicsMessage = `${this.msg} How are you today?`;
  },
  methods: {
    goSomewhere(whereTo) {
      this.$router.push(`/${whereTo}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
