<template>
    <div >

      <div class="input-tel" v-if="OK">
        <form action="">
          <ul class="form-list">
            <li class="form-item">
              <span class="num-icon"></span>
              <input type="text"   @keyup="changeColor" ref="num">
            </li>
          </ul>
          <div class="next">
            <a href="javascript:;" ref="next" @click="next">下一步</a>
          </div>
        </form>
      </div>

      <div class="wap-bar" v-else="">
        <form action="">
          <ul class="form-list">
            <li class="form-item">
              <span class="num-icon"></span>
              <input type="text" :value="getVal"  @keyup="changeColor">
            </li>
            <li class="form-item">
              <span class="pic-icon"></span>
              <input type="text" placeholder="图片验证码"  @keyup="changeColor">
              <span class="yanzhengma">
                <img src="./seccode.jpg" alt="" class="yzm">
              </span>
            </li>
            <li class="form-item">
              <span class="sj-icon"></span>
              <input type="text" placeholder="验证码"  @keyup="changeColor">
              <a href="javascript:;">获取短信验证码</a>
            </li>
            <li class="form-item">
              <span class="name-icon"></span>
              <input type="text" placeholder="你的昵称/用户名"  @keyup="changeColor">
            </li>
            <li class="form-item">
              <span class="password-icon"></span>
              <input type="text" placeholder="请设置密码"  @keyup="changeColor">
            </li>
            <li class="form-item">
              <span class="repassword-icon"></span>
              <input type="text" placeholder="请确认密码"  @keyup="changeColor">
            </li>
          </ul>
          <div class="next">
            <a href="javascript:;" ref="next" @click = nextEpet>下一步</a>
          </div>
        </form>

      </div>

      <epet v-show="showEpet"></epet>

    </div>
</template>
<script>
  import {MessageBox} from "mint-ui";
  import epet from '../../Epet/epet.vue'
    export default {
        data(){
            return{
              OK:true,
              showEpet: false

            }
        },
        methods: {
          nextEpet(){
            this.showEpet = ! this.showEpet
          },
          changeColor(){
            this.$refs.next.style.background = "#feb312";
          },
          next(){
            let value = this.$refs.num.value.trim();
            if (!value) {
              MessageBox({
                title: "提示信息",
                message: "输入的值不能为空",
              });
              return
            }
            let reg = /^1[3-9][0-9]{9}$/;
            if (!reg.test(value)) {
              MessageBox({
                title: "提示信息",
                message: "请填写正确的手机",
              });
              return;

            }
            this.OK = false
          }
        },
      computed:{
            getVal(){
              let value = this.$refs.num.value;
              return value;
            }

      },
      components: {
           epet
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .form-list
      margin-left 12px
      .form-item
        position relative
        border-bottom 1px solid #e2e2e2
        padding 14px 0 14px 30px
        input::-webkit-input-placeholder
          color #666666
          opacity .5
        span
          float left
          width 17px
          height 17px
          margin 5px 0 0 -25px
        &>.num-icon
          background url("./ico1.png") no-repeat
          background-size contain
        &>.pic-icon
          background url("./ico5.png") no-repeat
          background-size contain
        &>.yanzhengma
          position absolute
          top 8px
          right 85px
        &>.sj-icon
          background url("./ico2.png") no-repeat
          background-size contain
        &>a
          display block
          background #fed171
          position absolute
          top 10px
          right 15px
          padding 3px 15px
          border-radius 30px
          font-size 14px
          color #fff
        &>.name-icon
          background url("./ico3.png") no-repeat
          background-size contain
        &>.password-icon
          background url("./ico4.png") no-repeat
          background-size contain
        &>.repassword-icon
          background url("./ico4.png") no-repeat
          background-size contain


        input
          border none
          outline none
          display block
          height 21px
          width 100%
          font-size 16px
          padding 0
          font-family "Microsoft Yahei,tahoma,arial"
          color #666

    .next
      padding-top 18px
      margin-top 24px
      text-align center
      a
        background #d7d7d7
        color #fff
        display block
        border-radius 30px
        margin 0 10%
        padding 6px 0
body
  background #fff
</style>
