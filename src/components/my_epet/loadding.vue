<template>
  <div>
    <div class="loadingPage">
      <div class="loadingHeader">
        <a href="###">
          <span class="aback"></span>
        </a>
        <span class="message">提示信息</span>
        <span class="menu" @click="MenuShow"></span>
      </div>
      <!--菜单栏-->
      <div class="headerMenu" v-show="isShow" >

        <router-link to="/homePage" >
          <span class="icon icon1"></span>
          <p>首页</p>
        </router-link>
        <a href="###" >
          <span class="icon icon2"></span>
          <p>品牌分类</p>
        </a>
        <a href="###" >
          <span class="icon icon4"></span>
          <p>购物车</p>
        </a>
        <!--<a href="###" >
          <span class="icon icon5"></span>
          <p>我的E宠</p>
        </a>-->
        <router-link to="/myEpet" >
          <span class="icon icon5"></span>
          <p>我的E宠</p>
        </router-link>

      </div>
      <!--加载主体-->
      <div class="loadingBody">
        <div class="loadingImg">
          <img src="./zhuyi.png" >
        </div>
        <div class="loadding">验证登陆中...</div>
        <div class="free">如果没有自动跳转，请手动跳转！</div>
        <div class="jump">
          <router-link to="/myEpet">
            立即跳转
          </router-link>
          <!--<a href="###">立即跳转</a>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow:false

      }
    },
    methods:{
      MenuShow(){
        this.$nextTick(()=>{
          this.isShow = !this.isShow
        })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  /*加载页面*/

  .loadingPage
    width 100%
    height 100%
    background #fff
    position fixed
    z-index 10
    .loadingHeader
      width 100%
      height 10%
      line-height 50px
      position relative
      /*padding 0 10px*/
      border-bottom 0
      .aback
        width 30%
        height 20px
        background url('./personal-bico1.png') no-repeat
        background-size 12px 17px
        float left
        margin-left 15px
        margin-top 16px
      .message
        float left
        width 30%
        text-align center
      .menu
        float left
        width 30%
        height 20px
        background url('./imgtk-new.png') no-repeat
        background-size 22px 20px
        display inline-block
        position absolute
        margin-left 85px
        margin-top 16px


    .headerMenu
        width 100%
        background #fff
        border-top 1px solid #d7d7d7
        overflow hidden
        padding 10px 0
        a
          display inline-block
          width 23%
          text-align center
          .icon
            display inline-block
            width 30px
            height 30px
          .icon1
            background url("./head_icon1.png")  no-repeat
            background-size 30px 30px
          .icon2
            background url("./head_icon2.png")  no-repeat
            background-size 30px 30px
          .icon4
            background url("./head_icon4.png")  no-repeat
            background-size 30px 30px
          .icon5
            background url("./head_icon5.png")  no-repeat
            background-size 30px 30px
          p
            margin-top 4px
            margin-bottom 3px
            color #666
            font-size 14px
            text-align center


    .loadingBody
        height 90%
        text-align center
        background #eee
        .loadingImg
          text-align center
          padding-top 50px
          padding-bottom 30px
          img
            display  inline-block
            width 70px
            height 70px
        .loadding
          padding 30px 0
        .free
          padding-bottom 30px
          color #666
        .jump
          width 100%
          & > a
            display inline-block
            width 20%
            height 20px
            padding 2px 4px
            line-height 20px
            border-radius 5px
            color #666
            border 1px solid #666
</style>
