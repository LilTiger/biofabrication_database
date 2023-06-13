<template>
  <div class="nav">
    <div class="catalogue container">
      <div class="logo">器官智造领域研究分析系统</div>
      <ul class="">
        <li v-for="nav in list">
          <span class="nav_txt" :class="{'active_nav':nav.value===active}" @click="changePage(nav.value)">
            {{ nav.label }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list: [
        { label: '科技发展趋势分析', value: '/trend' },
        { label: '国际合作分析', value: '/cooperation' },
        { label: '科技领域研究热点聚焦分析', value: '/hostpost' }
      ]
    }
  },
  computed: {
    active() {
      return this.$route.fullPath
    }
  },
  methods:{
    changePage(data){
      this.$router.push(data)
    }
  }
}
</script>

<style lang="less" scoped>
.nav{
  //width: 100%;
  height: 60px;
  background-color:rgba(29, 36, 47, 0.8);
  z-index: 2;
  //padding: 0 10%;
  .catalogue{
    display: flex;
    .logo{
      //width: 180px;
      height: 60px;
      //background: #3A7A99;
      //opacity: 0.53;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC,sans-serif;
      font-weight: 600;
      color: #f2f2f2;
      line-height: 60px;
      text-align: center;
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      clear: both;
      text-align: right;
      flex:1;
      li{
        font-size: 16px;
        color: #FFFFFF;
        line-height: 60px;
        display: inline;
        margin: 0 26px;
        cursor: pointer;
        .nav_txt{
          display: inline-block;
        }
      }
      .active_nav{
        font-weight: bold;
        color: #3EB3F1;
        position: relative;
      }
      .active_nav:after{
        content: ''; /*CSS伪类用法*/
        position: absolute; /*定位背景横线的位置*/
        bottom: 0;
        background: #3EB3F1; /*宽和高做出来的背景横线*/
        width: 100%;
        height: 4px;
        left: 0;
      }
    }
  }
}
</style>
