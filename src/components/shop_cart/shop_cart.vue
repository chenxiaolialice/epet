<template>
  <div >
    <!--加载图-->
    <div class="load" v-show="loadShow">
      <div class="overflow xiazaiApp">
        <div class="overflow rela">
          <div class="appdowimg">
            <a href="###">
              <i>
                <span class="clsoebtn">
                  <img src="./closebtn_03.png" >
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div class="loadpage">
        <img src="./loading.gif" >
      </div>
    </div>
    <!--主体-->
    <div>
      <div class="saleWrapper">
        <div class="saleHeader">
          <a href="###">
            <span class="aback" ></span>
          </a>
          <span class="message">品牌特卖</span>
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
            <span class="red">0</span>
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


        <div class="myCart">
          <div class="bgimg">
            <span class="u-emtcoupon"></span>
          </div>
          <div class="text">购物车是空的</div>
          <div class="mygo" @click="goShow">
            <a href="###" class="gogo">
              去逛逛
            </a>

            <a href="###">我的收藏</a>
          </div>
        </div>
        <div style="width: 100%; height: 400px;background: #eee"></div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      loadShow:false
    }
  } ,
  methods: {
    MenuShow(){
      this.$nextTick(()=>{
        this.isShow = !this.isShow
      })
    },
    goShow(){
      /*this.loadShow = !this.loadShow*/
      setTimeout(() => {
        this.loadShow = !this.loadShow
      } ,1000)
      this.loadShow = !this.loadShow
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

  /* loadding图*/
  .load
    position fixed
    top 0
    left 0
    z-index 1000
    height 100%
    width 100%
    .overflow
      position relative
      height 55px
      .appdowimg
        width 100%
        height 55px
        &>a
          &>i
            display inline-block
            width 100%
            height 55px
            background url("./211547bb51dd23758f74fb86e9d7aae5.png") no-repeat
            background-size 100% 55px
          .clsoebtn
            position absolute
            left 5px
            top 18px
            display inline-block
            height 25px
            width 19px
            z-index 2
            img
              height 19px
              width 19px

    .loadpage
      width 100%
      height 620px
      text-align center
      background #fff
      img
        margin-top 200px
        height: 100px
        width: 100px;
        text-align: center;




  .saleWrapper
    position: absolute
    top: 0
    left 0
    z-index 10
    width: 100%
    height 100%
    background #fff
    .saleHeader
      width 100%
      height 50px
      line-height 50px
      position relative
      border-bottom 1px solid #eee
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
      border-bottom 1px solid #d7d7d7
      overflow hidden
      padding 10px 0
      a
        display inline-block
        width 23%
        text-align center
        position relative
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
        .red
          text-align center
          line-height 18px
          display inline-block
          width 18px
          height 18px
          border-radius 18px
          background red
          position absolute
          top 0
          right 25px
          font-size 10px
          color #fff
        .icon5
          background url("./head_icon5.png")  no-repeat
          background-size 30px 30px
        p
          margin-top 4px
          margin-bottom 3px
          color #666
          font-size 14px
          text-align center

    .myCart
      padding-bottom  40px
      .bgimg
        padding-bottom  50px
        width 100px
        height 100px
        margin 0 auto
        span
          margin: 50px auto 20px;
          display: inline-block;
          width: 100px;
          height: 100px;
          background: url(./cart-ico.png) no-repeat 0 -160px
          background-size: 105px auto


      .text
        text-align center
        font-size: 16px
        color #dbdbdb
        margin 20px
      .mygo
        margin-top 15px
        text-align center
        font-size 0
        a
          font-size 16px
          display inline-block
          border-radius 5px
          border 1px solid #999
          height 40px
          line-height 40px
          width 100px
        .gogo
          margin-right 8px
</style>
