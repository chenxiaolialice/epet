<template>
  <div>

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

    <div >
      <div class="header" >
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
        <div id="IndexdBox">
          <div class="indexdBox ">
            <div class="headerbox ">
              <div class="clearfix ">
                <div class="epet-search ">
                  <div class="f1">
                    <span class="catordog c333">猫站</span><!--
                    --><span class="data-reactid">|</span><!--
                    --><a href="https://wap.epet.com/place.html?pet_type=cat&amp;fw=0">
                        <!--https://wap.epet.com/place.html?pet_type=cat&amp;fw=0"-->
                        <span data-name="my-place" class="myposition" >重庆</span>

                        <img src="./index_icon_comment_sanjiao.png">

                    </a>
                  </div>
                  <p class="search-text" >
                    <a href="https://wap.epet.com/search.html?pet_type=cat&amp;fw=0" >
                      <input type="search" placeholder="搜索商品和品牌" disabled="">
                      <span class="eico serach-ico" >
                        <img src="./search.png" alt="">
                      </span>
                    </a>
                  </p>
                  <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
                    <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/mydope.png">
                  </a>
                </div>
              </div>
              <div class="dscroll-ul">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide " @click="showHome">
                      <router-link to="/homePage/page">首页</router-link>
                    </div>
                    <div class="swiper-slide" @click="showHome">
                      <router-link to="/homePage/carFood" >猫粮</router-link>
                    </div>
                    <div class="swiper-slide" @click="showHome">
                      <router-link to="/homePage/specialSale">特卖</router-link>
                    </div>
                    <div class="swiper-slide" @click="showHome">
                      <router-link to="/homePage/superMarket">罐头超市</router-link>
                    </div>
                    <div class="swiper-slide"@click="showHome">
                      <router-link to="/homePage/tideProductVideo">潮品视频</router-link>
                    </div>
                    <div class="swiper-slide"@click="showHome">
                      <router-link to="/homePage/newMeowClassroom">新喵课堂</router-link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="gocat"></div>



            </div>

          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    indexpage: Object
  },
  data(){
      return{
        loadShow:false
      }
  },
  mounted () {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 'auto',
      touchRatio: 0.5
    })

  },
  methods: {
    showHome(){
      this.loadShow=!this.loadShow
      setTimeout(() => {
          this.loadShow=!this.loadShow
      } ,1000)
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    left 0
    top 0
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
      height auto
      img
        height: 50%;
        position: fixed;
        width: 50%;
        left: 0;
        top: 50px;
        text-align: center;
        /*background: url(./loading.gif) no-repeat center center #fff;
        background-size: 90px auto;*/
        z-index: 101
    #IndexdBox
      .indexdBox
        width 100%
        .headerbox
          height 88px
          .clearfix
            padding 5px 10px
            height 43px
            .epet-search
              display flex
              width 100%
              height 27px
              padding 8px 0
              line-height 27px
              text-align center
              .f1
                flex-grow 1
                height 22px
                line-height 22px
                font-size 14px
                text-align center
                color #666
                span
                  color #333
                img
                  margin 0 4px 4px -1px
                  width 8px
                  height 4px
              .search-text
                position relative
                flex-grow 7
                input
                  width 100%
                  height 25px
                  background #f6f6f6
                  border-radius 4px
                  color #9e9e9e
                  text-indent 10px
                  font-size 13px
                  /*outline none*/

                .eico
                  position absolute
                  right 0
                  top 0
                  width 11px
                  height 11px
                  img
                    width 11px
                    height 11px
                    position absolute
                    right 5px
                    top 7px
              .epet-category
                flex-grow 1
                width 25px
                height 25px
                img
                  width 25px
                  height 25px
                  margin-left 5px
                  vertical-align middle
          /*导航条*/
          .dscroll-ul
            height 36px
            overflow hidden
            line-height 36px
            .swiper-slide
              width 20%
              text-align center
              font-size 14px
              color #666
              &>a
                display inline-block
                width 100%
                height 34px
                line-height 36px
                font-size 14px
                text-align center;
                color #666
              &>.active
                height 34px
                border-bottom 2px solid deeppink
                color deeppink



          .gocat
            position fixed
            top  75%
            right 0
            z-index 20
            width 49px
            height 49px
            background url(./gocat.png) no-repeat
            background-size 97px 49px;

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




</style>
