<template>
  <div id="progress-bar">
    <dl class="progress-box">
      <!--背景条-->
      <dt class="total-progress-bg">
        <div class="progress-bar-active"></div>
      </dt>
      <!--菱形-->
      <div class="progressBar-diamond-box progressBar-rhombus-box" ref="companyStyle" :style="{height:StyHeight}"><p
        class="progressBar-diamond progressBar-rhombus"></p></div>
      <div class="progressBar-diamond-box progressBar-rhombus-box1" ref="companyStyle" :style="{height:StyHeight}"><p
        class="progressBar-diamond progressBar-rhombus1"></p></div>
      <div class="progressBar-diamond-box progressBar-rhombus-box2" ref="companyStyle" :style="{height:StyHeight}"><p
        class="progressBar-diamond progressBar-rhombus2"></p></div>
    </dl>
  </div>
</template>

<script>
  export default {
    props: {
      proStep: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        stepData: 0,
        StyHeight: ''
      }
    },
    mounted() {
      let _this = this;
      this.$nextTick(function () {  //dom加载之后执行
        this.StyHeight = _this.$refs.companyStyle.clientWidth + 'px';   //获取盒子宽度并赋值给StyHeight
        this.changeStepClass(this.stepData);
      });
    },
    methods: {
      changeStepClass(stepData) {
        var proBar = document.getElementsByClassName("progress-bar-active")[0];
        var diamondBox = document.getElementsByClassName("progressBar-rhombus")[0];
        var diamondBox1 = document.getElementsByClassName("progressBar-rhombus1")[0];
        var diamondBox2 = document.getElementsByClassName("progressBar-rhombus2")[0];

        switch (stepData){
          case 0:
            setTimeout(function () {
              diamondBox.style.transitionDuration = ".5s";
              diamondBox.style.transform = "rotate(45deg)";
              diamondBox.style.background = "#fe5722";
              diamondBox.style.boxShadow = "inset 0px 0px 0px 5px #ff9a7a";
            }, 500);
            setTimeout(function(){
              proBar.style.width = "25%";
              proBar.style.transitionDuration = ".5s";
            }, 700);
            break;
          case 1:
            setTimeout(function(){
              proBar.style.width = "75%";
              proBar.style.transitionDuration = ".95s";
            }, 500);
            setTimeout(function () {
              diamondBox1.style.transitionDuration = ".5s";
              diamondBox1.style.transform = "rotate(45deg)";
              diamondBox1.style.background = "#fe5722";
              diamondBox1.style.boxShadow = "inset 0px 0px 0px 5px #ff9a7a";
            }, 700);
            break;
          case 2:
            setTimeout(function(){
              proBar.style.width = "100%";
              proBar.style.transitionDuration = ".5s";
            }, 500);
            setTimeout(function () {
              diamondBox2.style.transitionDuration = ".5s";
              diamondBox2.style.transform = "rotate(45deg)";
              diamondBox2.style.background = "#fe5722";
              diamondBox2.style.boxShadow = "inset 0px 0px 0px 5px #ff9a7a";
            }, 800);
            break;
        }
      },
      backChangeStepClass(stepData) {
        var proBar = document.getElementsByClassName("progress-bar-active")[0];
        var diamondBox = document.getElementsByClassName("progressBar-rhombus")[0];
        var diamondBox1 = document.getElementsByClassName("progressBar-rhombus1")[0];
        var diamondBox2 = document.getElementsByClassName("progressBar-rhombus2")[0];

        switch (stepData){
          case -1:
            setTimeout(function(){
              proBar.style.width = "0%";
              proBar.style.transitionDuration = ".5s";
            }, 500);
            setTimeout(function () {
              diamondBox.style.transitionDuration = ".5s";
              diamondBox.style.transform = "rotate(0deg)";
              diamondBox.style.background = "white";
              diamondBox.style.boxShadow = "inset 0px 0px 0px 5px #cccccc";
            }, 700);
            break;
          case 0:
            setTimeout(function(){
              proBar.style.width = "25%";
              proBar.style.transitionDuration = ".95s";
            }, 500);
            setTimeout(function () {
              diamondBox1.style.transitionDuration = ".5s";
              diamondBox1.style.transform = "rotate(0deg)";
              diamondBox1.style.background = "white";
              diamondBox1.style.boxShadow = "inset 0px 0px 0px 5px #cccccc";
            }, 700);
            break;
          case 1:
            setTimeout(function () {
              diamondBox2.style.transitionDuration = ".5s";
              diamondBox2.style.transform = "rotate(0deg)";
              diamondBox2.style.background = "white";
              diamondBox2.style.boxShadow = "inset 0px 0px 0px 5px #cccccc";
            }, 500);
            setTimeout(function(){
              proBar.style.width = "75%";
              proBar.style.transitionDuration = ".95s";
            }, 600);
            break;
        }
      }
    },
    watch: {
      //监听父组件传进来的值的变化
      proStep(newValue, oldValue) {
        if(newValue>oldValue){
          this.changeStepClass(newValue);
        }else{
          this.backChangeStepClass(newValue);
        }
      }
    }
  }
</script>

<style>
  dl, dd, p {
    margin: 0;
  }

  #progress-bar {
    width: 88%;
    height: 100%;
    padding: 0 6%;
  }

  .progress-box {
    width: 100%;
    height: 100%;
    position: relative;
  }

  /*背景条*/
  .total-progress-bg {
    width: 100%;
    height: 18%;
    margin: 0 0;
    background: #cccccc;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .progress-bar-active {
    width: 0;
    height: 100%;
    background: #fe5722;
  }

  /*菱形*/
  .progressBar-diamond-box {
    width: 11.25%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .progressBar-rhombus-box {
    left: 0%;
  }

  .progressBar-rhombus-box1 {
    left: 50%;
  }

  .progressBar-rhombus-box2 {
    left: 100%;
  }

  .progressBar-diamond {
    width: 100%;
    height: 100%;
    background: white;
    box-shadow: inset 0px 0px 0px 5px #CCCCCC;
  }
</style>
