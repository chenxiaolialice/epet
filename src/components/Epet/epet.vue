<template>
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
    <div class="newzone">
      <div class="newHeader">
        <img class="dog" src="./4.jpg" >
        <div class="user">
          <p class="username">alice</p>
          <p class="image">
            <img class="mm" style="width:16px ; height: 16px" src="./9.png" >
            <span class="zhipai">纸牌</span>
          </p>

        </div>
        <a>
          <span class="safety">账户安全管理</span>
          <img style="width: 6px; height: 10px" src="./personal-bico2.png" >
        </a>
      </div>
      <div class="mysale">
        <a href="###" class="pay">
          <div class="icon icon1"></div>
          <p class="wtpay">待付款</p>
        </a>
        <a href="###" class="pay">
          <div class="icon  icon2"></div>
          <p class="wtpay">待收货</p>
        </a>
        <a href="###" class="pay">
          <div class="icon icon3" ></div>
          <p class="wtpay">待评价</p>
        </a>
        <a href="###" class="pay">
          <div class="icon icon4"></div>
          <p class="wtpay">我的订单</p>
        </a>
      </div>
      <split></split>
      <split></split>
      <div class="weui-cells ">
        <a href="###" class="weui-cell">
        <div class="weui-cell__hd">
          <img src="./vip88.png" >
        </div>
        <div class="weui-cell__bd">
          <p>VIP俱乐部</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./ect.png" >
          </div>
          <div class="weui-cell__bd">
            <p>我的E宠团</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./apptry.png" >
          </div>
          <div class="weui-cell__bd">
            <p>我的使用</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./red_packets.png" >
          </div>
          <div class="weui-cell__bd">
            <p>红包余额</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>
      <split></split>
      <split></split>
      <div class="weui-cells ">
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./newzone_comment.png" >
          </div>
          <div class="weui-cell__bd">
            <p>我的评价</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./newzone_advice.png" >
          </div>
          <div class="weui-cell__bd">
            <p>我的资讯</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./newzone_history.png" >
          </div>
          <div class="weui-cell__bd">
            <p>我的收藏</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./newzone_ticket.png" >
          </div>
          <div class="weui-cell__bd">
            <p>我的优惠券</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./newzone_history.png" >
          </div>
          <div class="weui-cell__bd">
            <p>浏览历史</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>
      <split></split>
      <split></split>
      <div class="weui-cells ">
        <a href="###" class="weui-cell">
          <div class="weui-cell__hd">
            <img src="./newzone_massage.png" >
          </div>
          <div class="weui-cell__bd">
            <p>消息</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
        <a href="###" class="weui-cell sefcell">
          <div class="weui-cell__hd">
            <img src="./newzone_set.png" >
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
          <div class="sef">个人资料、宠物信息、地址管理 </div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>
      <div style="background: #eee; padding: 20px 0">
        <div class="logout">
          退出
        </div>
      </div>

      <!--<div style="height: 10px;background: #ddd"> </div>-->
    </div>
  </div>
</template>
<script  >
  import split from "../split/split.vue"
  export default{
      data(){
          return{
            isShow: false
          }
      },
    methods: {
      MenuShow(){
          this.isShow =!this.isShow
      }
    },
    components: {
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .saleWrapper
      position: absolute
      top: 0
      left 0
      z-index 100
      width: auto
      height 100%
      background #ddd
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
          width 10%
          height 20px
          background url('./imgtk-new.png') no-repeat
          background-size 22px 20px
          display inline-block
          position absolute
          margin-left 85px
          margin-top 16px
         background #fff
      .headerMenu
        background #fff
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


      .newzone
        background #fff
        max-width: 640px;
        margin: auto
        .newHeader
          overflow hidden
          padding 15px
          border-bottom 1px solid #eee
          .dog
            width 66px
            height 66px
            border: 5px solid #ebebeb
            border-radius 50%
            float left
          .user
            margin-left: 15px
            margin-top: 10px
            float: left
            .username
              font-size 16px
              color  #424242
              line-height 1.6
            .image
              line-height 26px
              width 55px
              height 26px
              margin-top 5px
              .mm
                vertical-align middle
              .zhipai
                font-size 12px
                color #999

          a
            color #333
            display inline-block
            float right
            .safety
              line-height 76px
              color #999
              font-size 12px

        .mysale
          padding-top 20px
          padding-bottom 10px
          display flex
          .pay
            flex 1
            padding-left 20px
            .icon
              width 36px
              height 30px
              margin 5px 7px
              padding-left 8px
            &>.icon1
              background url(./newzone_icon.png) no-repeat
              background-size 238px 100%
              background-position 0 0
            &>.icon2
              background url(./newzone_icon.png) no-repeat
              background-size 216px 100%
              background-position: -56px 0
            &>.icon3
              background url(./newzone_icon.png) no-repeat
              background-size 238px 100%
              background-position: -136px 0
            &>.icon4
              background url(./newzone_icon.png) no-repeat
              background-size 238px 100%
              background-position: -196px 0
            .wtpay
              font-size 14px


        .weui-cells
          color inherit
          .weui-cell
            width 95%
            display inline-block
            padding 10px 0 10px 15px
            .weui-cell__hd
              display inline-block
              img
                vertical-align middle
                width 20px
                margin-right 5px
                display inline-block
            .weui-cell__bd
              display inline-block
              p
                font-size 17px
                line-height 1.4
            .weui-cell__ft
              display inline-block
              float right
              margin-top 6px
              margin-right 5px
              width 10px
              height 12px
              background url("./personal-bico2.png")
              background-size 10px 12px
          .sefcell
            position relative
            .sef
              display inline-block
              font-size 10px
              position absolute
              top 18px
              right 50px


        .logout
          text-align center
          line-height 40px
          color  #fff
          border-radius 3px
          height 40px
          margin 0 10px
          background #f03131
</style>

