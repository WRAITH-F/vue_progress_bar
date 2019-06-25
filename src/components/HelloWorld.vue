<template>
  <div class="hello">
    <div style="width: 232px;height: 42px;margin: 0 auto">
      <vue-progress-bar :proStep = "step"></vue-progress-bar>
    </div>
    <button style="margin-top: 120px" @click="theBack()">上一步</button>
    <button style="margin-top: 120px" @click="theNext()">下一步</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        step: 0
      }
    },
    methods:{
      theNext(){
        if (this.step <2){
          this.step++;
        }
      },
      theBack(){
        if (this.step >=0 ){
          this.step--;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
