<template>
  <div>

    <div class="tab ">
      <div class="tab-item active">
        <router-link to="/homePage">
          <img src="./image/main_cattab_1_sel.png">
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/sort">
          <img src="./image/main_tab_2.png" >
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/shopCart">
          <img src="./image/main_tab_3.png" >
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/myEpet">
          <img src="./image/main_tab_4.png" >
        </router-link>
      </div>

    </div>
    <router-view :indexpage="indexpage"> </router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          indexpage : {}
        }
    },
    created(){
        axios.get('/indexpage')
          .then( response=>{
              this.indexpage = response.data

          })
    }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    z-index 1
    background #fff
    position fixed
    bottom 0
    left 0
    width 100%
    border-top 1px solid #ddd
    height 45px
    display flex
    .tab-item
      flex 1
      text-align center
      height 40px
      margin auto 0
      img
        height 40px



</style>
