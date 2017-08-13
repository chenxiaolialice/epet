<template>

  <div>

    <loadding v-show="ok"></loadding>
    <div class="wrapper" v-show="!ok" >

      <div class="login_bg">
        <div class="header_top">
          <a href="javascript:;">
            <span class="aback " @click="showLoading"></span>
          </a>
          <!--<router-link to="/loadding">
            <span class="aback " @click="showLoading"></span>
          </router-link>-->
          <div class="register">
            <router-link to="/myEpet/register">
              注册
            </router-link>
            <!--<a href="###">注册</a>-->
          </div>
        </div>
        <div class="mlogo">
          <img src="./logo.png" >
        </div>
        <div class="es_por">
          <ul class="select">
            <li class="selectTag" @click="login">
              <a href="javascript:;" style="color: #fff">普通登录</a>
              <i :class="{triangle:have}"></i>
            </li>
            <li class="selectTag" @click="logOut">
              <a href="javascript:;" style="color: #fff">手机动态密码登录</a>
              <i :class="{triangle:!have}"></i>
            </li>
          </ul>
        </div>
      </div>
      <div style="background: #fff">
        <div class="write "   v-show="isShow">
          <div class="userForm">
            <span class="mNameIco"></span>
            <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
          </div>
          <div class="userForm">
            <span class="  mpasswordIco"></span>
            <input type="password" placeholder="输入密码" class="text" name="password" id="password">
          </div>
        </div>
        <div class="write "  v-show="!isShow">
          <div class="userForm">
            <span class="mNameIco"></span>
            <input type="text" placeholder="已注册的手机号或用户名" class="text" name="username" id="username1">
          </div>

          <div class="userForm">
            <span class="  mpasswordIco">

            </span>
            <input type="password" placeholder="请输入图片内容" class="text" name="password" id="password2">
            <span class="seccode">
              <div id="v_container" style="width: 100px;height: 50px; "></div>
            </span>
          </div>
          <div class="userForm">
            <span class="  mpasswordIco"></span>
            <input type="password" placeholder="请输入动态密码" class="text" name="password" id="password3">

            <a href="###" class="getpwd">获取动态密码</a>

          </div>
        </div>
        <div class="fogPas" >
          <a href="###">忘记密码?</a>
        </div>
        <div class="loginbtn" >
          <a href="###">登 录</a>
        </div>
        <div style="height: 100px "  ></div>
        <div class="other-login" >
          <div class="partners">
            <span>合作网站登录</span>
          </div>
          <ul class="image">
            <li class="pay">
              <a href="###">
                <img src="./login_ico4.png" >
              </a>
            </li>
            <li class="pay">
              <a href="###">
                <img src="./login_ico2.png" >
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

  import loadding from "./loadding.vue"
  import GVerify from '../../../static/gVerify'
export default {
    data(){
        return{
          isShow:true,
          have:true,
          ok: true
        }
    },
    methods: {
      login(){
          if(!this.isShow){
            this.isShow = !this.isShow
            this.have = !this.have
          }
      },
      logOut(){
          if(!this.isShow){
            return
          }else{
            this.isShow = !this.isShow
            this.have = !this.have
          }

      },
      showLoading(){
        this.ok=!this.ok
        setTimeout(()=>{
          this.ok=!this.ok
        },1000)
      },
    },
  created(){
    setTimeout(()=>{
      this.ok=!this.ok
    },1000)

    this.$nextTick(()=>{
      var verifyCode = new GVerify("v_container");

    })
  },
  components: {
      loadding
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  html,body
    overflow hidden
    .wrapper
      width 100%
      position absolute
      height 100%
      background #eee
      z-index 200
      /*注册主页*/
      .login_bg
        background: url('./9c1b1803b028094093a95a484fbaa511.png') no-repeat;
        background-size: 100% 100%
        .header_top
          height 50px
          line-height 50px
          position relative
          padding 0 10px
          border-bottom 0
          .aback
            width 22px
            height 20px
            background url('./personal-bico3.png') no-repeat
            background-size 12px 17px
            display block
            position absolute
            margin-top 16px
          .register
            display inline-block
            position absolute
            top 0
            right 20px
            a
              font-size 16px
              color #fff
        .mlogo
          text-align center
          padding 10px 0 20px 0
          img
            display block
            margin auto
            width 20%
        .es_por
          width 100%
          height 44px
          background-color rgba(255,255,255,0.3)
          .select
            width 100%
            height 44px
            .selectTag
              float left
              width 50%
              text-align center
              height 100%
              line-height 44px
              position relative
              .triangle
                width 0
                height 0
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                position absolute
                bottom 0
                left 0
                right 0
                margin auto
      .write
        width 92%
        margin 0 15px 10px 15px
        padding-left 0 6px
        .userForm
          overflow hidden
          position relative
          height 20px
          line-height 20px
          padding 12px 0 12px 30px
          border-bottom #e2e2e2 solid 1px
          input::-webkit-input-placeholder
            color #666666
            opacity .3
          .mNameIco
            float left
            display inline-block
            width 17px
            height 21px
            background url('./ico3.png') no-repeat
            background-size contain
            margin 1px  0 0 -25px
          .text
            float left
            display inline-block
            /*height 21px*/
            width 90%
            font-size 16px

            color #666
            font-family "Microsoft Yahei",tahoma,arial
            outline none
          .seccode
            display inline-block
            vertical-align middle
            position absolute
            right 0
            top 8px
          .mpasswordIco
            float left
            display inline-block
            width 17px
            height 21px
            background url('./ico4.png') no-repeat
            background-size contain
            margin 1px  0 0 -25px
          .getpwd
            display inline-block
            width 100px
            border 1px solid #eb4c33
            border-radius 3px
            position absolute
            right 0
            top 8px
            font-size 12px
            padding 3px 0
            background #fff
            color #ff4259
            text-align center

      .fogPas
        width 92%
        margin 0 10px
        overflow hidden
        a
          float right
          font-size 14px
          color #898989


      .loginbtn
        margin 0 4px
        text-align center
        padding-top 10px
        a
          color #fff
          display block
          letter-spacing 5px
          margin 0 10px
          border-radius 5px
          background #2ec975
          font-size 16
          padding 13px 0;
          text-align center

      .other-login
        height 200px
        .partners
          height 20px
          margin-top 8px
          color #d7d7d7
          text-align center
        .image
          /*width 100%*/
          padding 15px 0
          &::after
            display block
            content ""
            clear both
          .pay
            width 26%
            padding 0 12px
            display inline-block
            float left
            &>a
              width 100%
              img
                width 60px
                margin  0 20px
                max-width 176px


</style>
