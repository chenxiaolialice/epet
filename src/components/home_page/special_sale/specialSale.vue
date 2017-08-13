<template>
  <div class="saleWrapper" >
    <scroller>

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

      <!--背景图-->
      <div class="banner">
        <img src="./banner.jpg" >
      </div>
      <!--内容-->

      <div class="brandSale">
        <!--/*导航*/-->
        <!--<div class="scrolldiv" ref="scrolldiv">
        &lt;!&ndash;<ul class="nav clearfix">&ndash;&gt;
          <mt-navbar v-model="selected" class="nav">
            <mt-tab-item id="1"  class="navContent">
              <div>
                <img src="./icons1.png">
                <div class="navtit">
                  <h5>最新上架</h5>
                  <h6>New arrival</h6>
                </div>
              </div>
            </mt-tab-item>
            <mt-tab-item id="2" class="navContent">
              <div >
                <img src="./icons1.png">
                <div class="navtit">
                  <h5>最热活动</h5>
                  <h6>The hottest</h6>
                </div>
            </div>
            </mt-tab-item>
            &lt;!&ndash;<mt-tab-item id="3"  class="navContent">
              <div>
                <img src="./icons1.png">
                <div class="navtit">
                  <h5>最热活动</h5>
                  <h6>The hottest</h6>
                </div>
            </div>
            </mt-tab-item>&ndash;&gt;
            <mt-tab-item id="3" class="navContent">
              <div >
                <img src="./icons1.png">
                <div class="navtit">
                  <h5>主粮</h5>
                  <h6>Cat Food</h6>
                </div>
            </div>
            </mt-tab-item>
            <mt-tab-item id="4" class="navContent">
              <div >
                <img src="./icons1.png">
                <div class="navtit">
                  <h5>零食</h5>
                  <h6>Cat Snacks</h6>
                </div>
            </div>
            </mt-tab-item>
            <mt-tab-item id="5" class="navContent">
              <div >
                <img src="./icons1.png">
                <div class="navtit">
                  <h5>医疗&保健</h5>
                  <h6>Health</h6>
                </div>
            </div>
            </mt-tab-item>
          </mt-navbar>
          <split></split>
          <split></split>
          <mt-tab-container class="tab-content" v-model="selected">
            <mt-tab-container-item class="tab-item"  id="1">
              <ul class="content">
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item class="tab-item"  id="2">
              <ul class="content">
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item class="tab-item"  id="3">
              <ul class="content">
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item class="tab-item"  id="4">
              <ul class="content">
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item class="tab-item"  id="5">
              <ul class="content">
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
                <split></split>
                <li class="liList">
                  <a href="###">
                    <img src="./newArrival1.jpg">
                  </a>
                </li>
              </ul>
            </mt-tab-container-item>
          </mt-tab-container>

      </div>-->
        <div class="scrolldiv" ref="scrolldiv">
          <ul class="nav clearfix">
            <li class="navContent">
              <img src="./icons1.png">
              <div class="navtit">
                <h5>最新上架</h5>
                <h6>New arrival</h6>
              </div>
            </li>
            <li class="navContent">
              <img src="./icons1.png">
              <div class="navtit">
                <h5>最热活动</h5>
                <h6>The hottest</h6>
              </div>
            </li>
            <li class="navContent">
              <img src="./icons1.png">
              <div class="navtit">
                <h5>主粮</h5>
                <h6>Cat Food</h6>
              </div>
            </li>
            <li class="navContent">
              <img src="./icons1.png">
              <div class="navtit">
                <h5>零食</h5>
                <h6>Cat Snacks</h6>
              </div>
            </li>
            <li class="navContent">
              <img src="./icons1.png">
              <div class="navtit">
                <h5>医疗&保健</h5>
                <h6>Health Protection</h6>
              </div>
            </li>
          </ul>
        </div>
        <split></split>
        <split></split>

        <ul class="content">
          <li class="liList">
            <a href="###">
              <img src="./newArrival1.jpg">
            </a>
          </li>
          <split></split>
          <li class="liList">
            <a href="###">
              <img src="./hottest.jpg">
            </a>
          </li>
          <split></split>
          <li class="liList">
            <a href="###">
              <img src="./hottest1.jpg">
            </a>
          </li>
          <split></split>
          <li class="liList">
            <a href="###">
              <img src="./hottest2.jpg">
            </a>
          </li>
          <split></split>
          <li class="liList">
            <a href="###">
              <img src="./hottest3.jpg">
            </a>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="footer">
        <div class="ft">
          <span class="bt" title="触屏版">触屏版</span>
          <span class="at">
            <a href="###">手机客户端</a>
          </span>
          <span class="at">
            <a href="###">关于我们</a>
          </span >
          <span class="at">
            <a href="###">联系我们</a>
          </span>
        </div>
        <div class="bq" >© wap.epet.com
          版权：重庆易宠科技有限公司
        </div>
      </div>



    </scroller>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import split from '../../split/split.vue'
  export default {
    data() {
      return {
        selected: '1',
        isShow: false,

      }
    },
    created(){
        this.$nextTick(()=>{
             new BScroll(this.$refs.scrolldiv,{
               click:true,
               scrollX:true,
               scrollY:false,
            })
        })
    },
    methods:{
      MenuShow(){
          this.$nextTick(()=>{
            this.isShow = !this.isShow
          })
      }
    },
    components: {
        split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .saleWrapper
    position: absolute
    top: 0
    left 0
    z-index 100
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
        position relative
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


    .banner
      width 100%
      img
        display block
        width 100%




    .brandSale
      width 100%
      /*导航*/
      .scrolldiv
        .nav
          width 200%
          height 40px
          overflow hidden
          background  #6a1e9f
          &::after
            display block
            content ""
            clear both
          .navContent
            float left
            /*border-bottom 3px solid #6a1e9f*/
            position relative
            padding-left 5%
            color #fff

            img
              display inline-block
              position absolute
              top 10px
              left 20px
              width 25px
              height 25px

            .navtit
              text-align center
              /*margin-top 15px*/
              margin-left 35px
              margin-right 20px
              display inline-block
              h5
                margin-top 10px
                font-size 12px
              h6
                font-size 10px


      .content
        width 100%
        .liList
          font-size 0
          width 100%
          &>a
            img
              width 100%


    .footer
      margin 16px 0 0
      padding-bottom 36px
      background #fff
      clear both
      .ft
        padding: 15px 0 5px;
        text-align: center
        font-size 14px
        .bt
          padding-right 10px
          line-height 1.6
          color red
        .at
          padding-right 10px
          &>a
            color #333
      .bq

        text-align center
        margin:0 10px 0 10px
        padding-bottom 25px
        font-size 12px




</style>
