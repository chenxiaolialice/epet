<template>
  <div>
    <!--loadding图-->
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
    <div class="Category">
      <div class="header">
        <div class="sort">
          <span class="cur">分类</span>
        </div>
        <div class=" nav-sort">
          <span>品牌</span>
        </div>
        <a href="###">
          <img src="./search.png" >
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
      return{
        loadShow:true
      }
  },

  methods: {

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




  /*主体*/

  .Category
    padding 0 15px
    border-bottom 1px solid #cbcbcb
    position fixed
    left 0
    right 0
    top 0
    height 40px
    z-index 11
    .header
      background: #fff
      .sort
        display inline-block
        width 40%

        height 40px
        text-align right
        padding-right 17px
        font-weight bold
        .cur
          color #ed4044
          border-bottom 2px solid #ed4044
        span
          display inline-block;
          height 40px;
          padding 0 4px;
          cursor pointer
          font-size 13px
          line-height 40px
      .nav-sort

        padding-left 17px
        display inline-block
        width: 40%;
        height: 40px;
        line-height: 40px
</style>
