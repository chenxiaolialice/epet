<template>
  <div class="scrollerWrapper">
    <scroller>
      <div class="clearfix">
        <div class="container ">
          <div class="wrapper"  >
            <mt-swipe :auto="4000" v-for="(data,index) in datas" v-if="data.index== 1 " >
              <mt-swipe-item v-for="(item,index) in data.value" :key="index">
                <a href="###" >
                  <img :src="item.image" >
                </a>
              </mt-swipe-item>
             <!-- <mt-swipe-item>
                <a href="###">
                  <img src="./097de2a4fdf1e197c9304d9dba9a9876.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="###">
                  <img src="./e924a1c2af4d577a8d06b594167648d0.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="###">
                  <img src="./7666821c190eab2da6d85ce6d9bef445.png" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="###">
                  <img src="./a87ef931a96884b958d859952d3e40ad.png" >
                </a>
              </mt-swipe-item>-->
            </mt-swipe>
          </div>
        </div>

        <div class="module2-con">
          <div class="swiper-container ">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="###">
                  <img src="./eb1e56f630feb46a72be67984956c247.gif">
                </a>
              </div>
            </div>
          </div>

          <ul class="pagemenu">
            <li class="clearList">
              <a href="http://wap.epet.com/group/main.html?pet_type=cat&fw=0">
                <img src="./27e9bbcf34c51c1077d4dd8b835d0a2f.png" >
              </a>
            </li>
            <li class="clearList">
              <a href="">
                <img src="./7afb8e7f8be2b0dc2f91eec9a073cde8.png" >
              </a>

            </li>
            <li class="clearList">
              <a href="">
                <img src="./e5aac3f233b17be1e7c245a598f812e0.png" >
              </a>
            </li>
            <li class="clearList">
              <a href="">
                <img src="./75feae28f5876aaa615478b0b68992c3.png">
              </a>
            </li>
            <li class="clearList">
              <a href="">
                <img src="./9c429ba6358ee54f4c6bdd8e4aa6831f.png" >
              </a>
            </li>
          </ul>
        </div>
        <div class="page-line"></div>
        <!--每日疯抢-->
        <div class="surprise">
          <div class="surprise-tit ">
            <div class="fl titimg">
              <img src="./suprice.png" >
            </div>
            <div class="fl ft1 ml10">距本场结束</div>
            <div class="time ftc fl ml5">
              <div class="time1 dib clearfix ft14 dtime">
              <span class="times0">
                <span id="sec" class="time1"></span>:
                <span id="mini" class="time2"></span>:
                <span id="hour" class="time3"></span>
              </span>
              </div>
            </div>
            <div class="more">
              <a href="###">
                <img src="./65336c790d552d2356490bc03587fa04.png" >
              </a>
            </div>
          </div>
          <div class="surprise-pro " >
            <div class="swiper-container ">
              <div class="swiper-wrapper">
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./3f9f8d871afa9a1653917bf595d740e9.jpg" alt="">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">159</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./2566c58cdd7c2b7979778cc2fd0ef4bd.jpg" alt="">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">159</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./3009a8cc214984c389458d54d21db2a9.jpg" alt="">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">159</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./9949d6ee086150598a7363f74bf9cdbd.jpg" alt="">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">159</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./be4dc323fe311ab0d4652123e4c2f338.jpg" alt="">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">159</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./e2e67b1e123bb6f2b6c46a1e5d929f48.jpg" alt="">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">159</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./36dd27f95745e742ea29c61dadfc297d.jpg" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">89</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./6716112a179595212fe0e4732f1aa0d7.jpg" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">89</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./a4c3842b6bc2cdb81eab9dd2d1d98366.jpg" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">89</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./d9f3440f49a79249498ebbf81f7cbb82.jpg" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">89</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./e3390a20bc7fa419bf6893a6010ba898.jpg" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">89</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./ddfff8898f1c19ad514a09e1b4d75e1e.jpg" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">89</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="pro-block">
                    <a href="">
                      <div class="thispro-img loadimg-nofixed">
                        <img src="./d89f5b229b404d050a6db681ec546742.jpg" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span>
                        <span class="ft17">89</span>
                      </div>
                      <p class="c999 ftc ft12">省￥36.00</p>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
        <div class="page-line"></div>
        <!--热门栏目-->
        <div class="dibimg1"  v-for="(data,index) in datas" v-if="data.index== 6 " >
          <div class="titdiv rela"  >
            <img :src="data.center_image.image" >
          </div>
          <div class="divboximg flex"  >
            <div class="divimgLeft" >
              <a href="###">
                <!--<img :src="item.image" >-->
                <img src="./0d983a7720686c0f2a752f741f61cc39.png" >
              </a>
            </div>
            <div class="divimgRight">
              <a href="###">
                <img src="./b28d28780e77a619e106269cd63b6f2a.jpg" >
              </a>
              <a href="###">
                <img src="./8effccc6ec692af5980cbb231ea22583.jpg" >
              </a>
            </div>
          </div>
        </div>
        <div class="page-line"></div>
        <!--潮品视频-->
        <div class="titmoudle  clum-tit">
          <div class="centerimg titclass overflow">
            <img src="./c273ce882b843a24911ee3085398943a.png" >
          </div>
          <div class="more">
            <a href="###">
              <img src="./65336c790d552d2356490bc03587fa04.png" >
            </a>
          </div>
        </div>
        <div class="cmVideoList">
          <a href="###">
            <div class="relative imgBox ">
              <img src="./b74020c78e97fd082f6ae2796dbea567.jpg">
              <span class="cmallPlayIco"></span>
              <div class="cmViewBox cwhite ">
                <div class="fr">01:23</div>
              </div>
            </div>
            <div class="catCare">
              <div class="cat">
                神奇饮水除口臭
                <span class="care">#猫咪保健</span>
              </div>
              <div class="cVN">
                <span class="cmallViewIco mr3"></span>
                <span>16042</span>
              </div>
            </div>
          </a>


        </div>
        <div class="page-line"></div>
        <!--体验馆-->
        <div class="titmoudle  clum-tit">
          <div class="centerimg titclass overflow">
            <img src="./a3cf638c4a9d9119da4785f6f879f143.png" >
          </div>
          <div class="more">
            <a href="###">
              <img src="./65336c790d552d2356490bc03587fa04.png" >
            </a>
          </div>
        </div>
        <div class="swiper-wrapper3">
          <div class="swiper-slide3">
            <mt-swipe :auto="4000" v-for="(data,index) in datas" v-if="data.index== 12 ">
              <mt-swipe-item v-for="(item,index) in data.value" :key="index">
                <a href="###">
                  <img :src="item.image" >
                </a>
              </mt-swipe-item>
              <!--<mt-swipe-item>
                <a href="###">
                  <img src="./41e35ecbf5cbfcf85f75495d8967b5cc.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="###">
                  <img src="./51cfa965d3b55d0f027bd2854c8e61a2.jpg" >
                </a>
              </mt-swipe-item>-->
            </mt-swipe>
          </div>
        </div>
        <div class="page-line"></div>
        <!--品牌特卖-->
        <div class="titmoudle titcenter clum-tit">
          <div class="centerimg titclass overflow">
            <img src="./0985e7be719f6c63044266c29c29c9ec.png" >
          </div>
        </div>
        <!--我们日期不完美-->
        <div class="dataPerfect">
          <div class="text">
            <span class="textW">我的日期不完美</span>
            <span class="textB">大牌临期1折起</span>
          </div>
          <div class="soleimg">
            <a href="###">
              <img src="./8d4d184bcf01207d3f039b406a904651.jpg" >
            </a>
          </div>
        </div>
        <!--蓝氏-->
        <div class="dataPerfect">
          <div class="text">
            <span class="textW">蓝氏天然低敏粮</span>
            <span class="textB">亮毛&肠道护理&免疫</span>
          </div>
          <div class="soleimg">
            <a href="###">
              <img src="./lanshi.jpg" >
            </a>
          </div>
        </div>

        <!--公益-->
        <div class="publicBenefit">
          <div class="public ">
            <div class="leftimg2 ">
              <a href="###">
                <img src="./682fd54a104c5e719968cce468a1bd0f.jpg" >
              </a>
            </div>
            <div class="more">
              <a href="###">
                <img src="./13cacd7e83cbfdc5c5cec4977f00e105.png" >
              </a>
            </div>
          </div>
          <div class="ta-bg ">
            <img src="./c59cb143b0ce0e77fbb0e6cdf7af702e.jpg" >
            <div class="ta-barnds">
              <p >
                <span>截止今日，TA公益已联合E宠商城和</span>
                <span class="number">13</span>
                <span>家品牌</span>
              </p>
              <p >
                <span>累积捐赠</span>
                <span class="numberT">855,546.56</span>
                <span>元</span>
              </p>
              <p >
                <span>已合作 7 家公益组织，举办参与</span>
                <span class="number">2</span>
                <span>场公益活动,助养</span>
                <span class="number">32</span>
                <span>位领养人</span>
              </p>
            </div>
          </div>
          <div class="epetCat">
            <div class="sponsor">
              <img src="./67b4b39cc28a9934fa58fa1b9d7e0e90.png" >
            </div>
            <div class="epet">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./epet_brand_logo.png" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./637879a33f1ea84ccdbfa2dc1b3de16e.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./86414673b92fb227bbd0d006949814ab.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./d9e05c4a2d35c88ffee0dcec98fba6a4.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./92371ab34de0ea12b67028d6625c5180.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./c997f3ae79a7568cf7b6dde5c7b7f8b1.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./276527f25e9151ef48b0b8d2dba79d29.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./fc04341d858e72a3937fd5484f4a32e8.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./554b6be0390fa8c1254322d8f4af10b5.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="###">
                      <div class="db">
                        <img src="./e3fc4e24073e3ac5b8980603463a8828.jpg" >
                      </div>
                      <div class="help-money">已捐助¥213408.68</div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="page-line"></div>
        <!--口碑-->
        <div class="publicPraise">
          <div class="public ">
            <div class="leftimg2 ">
              <a href="###">
                <img src="./fbcacf13ccc5748295fe0e6124fbec5d.png" >
              </a>
            </div>
            <div class="more">
              <a href="###">好评率99.64%</a>
            </div>
          </div>

          <div class="brands-judge">
            <div class="brands">
              <a href="###">
                <div class="join">
                  <div class="main_img">
                    <img src="./d1cf520f66912ee6adcb29ffebe2efc8.jpg" >
                    <div class="join_time">加入E宠2年0月</div>
                  </div>
                  <div class="petCat">
                    <span class="petPer">红*****ω</span>
                    <span class="petName">中华田园猫</span>
                  </div>
                  <div class="petDec">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，
                    但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </a>
            </div>
            <div class="brands">
              <a href="###">
                <div class="join">
                  <div class="main_img">
                    <img src="./2bfa814e0924d3c870a2b758c335b18d.jpg" >
                    <div class="join_time">加入E宠2年0月</div>
                  </div>
                  <div class="petCat">
                    <span class="petPer">红*****ω</span>
                    <span class="petName">中华田园猫</span>
                  </div>
                  <div class="petDec">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，
                    但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </a>
            </div>
            <div class="brands">
              <a href="###">
                <div class="join">
                  <div class="main_img">
                    <img src="./2bfa814e0924d3c870a2b758c335b18d.jpg" >
                    <div class="join_time">加入E宠2年0月</div>
                  </div>
                  <div class="petCat">
                    <span class="petPer">红*****ω</span>
                    <span class="petName">中华田园猫</span>
                  </div>
                  <div class="petDec">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，
                    但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </a>
            </div>
            <div class="brands">
              <a href="###">
                <div class="join">
                  <div class="main_img">
                    <img src="./d1cf520f66912ee6adcb29ffebe2efc8.jpg" >
                    <div class="join_time">加入E宠2年0月</div>
                  </div>
                  <div class="petCat">
                    <span class="petPer">红*****ω</span>
                    <span class="petName">中华田园猫</span>
                  </div>
                  <div class="petDec">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，
                    但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </div>
                </div>
              </a>
            </div>





          </div>
        </div>

        <div class="page-line"></div>

        <div style="height: 55px"></div>

      </div>

    </scroller>
  </div>

</template>

<script>
  import axios from 'axios'
  /*import BScroll from 'better-scroll'*/
  export default {
    data(){
        return{
          datas:[],
          datass:[]
        }
    },
    mounted () {
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        freeMode: true,
        slidesPerView: 'auto',
        /*slidesPerView: 3.5,*/
        touchRatio: 0.5
      })
    },
    created(){
        axios.get('/indexpage')
          .then(response=>{
             const result = response.data
            if(result.code === 0){
                 this.datas = result.data.datas
                  //this.datass = result.data.datas[11].value
              console.log(result.data.datas)
            }
          })



      this.$nextTick(() => {
            setTimeout(()=>{
              let d = Date.UTC(2030, 6, 27, 16, 34)
              let obj = {
                sec: document.getElementById("hour"),
                mini: document.getElementById("mini"),
                hour: document.getElementById("sec")
              }
              console.log(obj)
              this.fnTimeCountDown(d, obj)
            },100)
      })

    },
    methods: {
      fnTimeCountDown (d, o){
        var f = {
          zero: function(n){
            var n = parseInt(n, 10);
            if(n > 0){
              if(n <= 9){
                n = "0" + n;
              }
              return String(n);
            }else{
              return "00";
            }
          },
          dv: function(){
            d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
            var future = new Date(d), now = new Date();
            //现在将来秒差值
            var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60, pms = {
              sec: "00",
              mini: "00",
              hour: "00",
              day: "00",
              month: "00",
              year: "0"
            };
            if(dur > 0){
              pms.sec = f.zero(dur % 60);
              pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
              pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
              pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";
              //月份，以实际平均每月秒数计算
              pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
              //年份，按按回归年365天5时48分46秒算
              pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
            }
            return pms;
          },
          ui: function(){
            if(o.sec){
              o.sec.innerHTML = f.dv().sec;
            }
            if(o.mini){
              o.mini.innerHTML = f.dv().mini;
            }
            if(o.hour){
              o.hour.innerHTML = f.dv().hour;
            }
            if(o.day){
              o.day.innerHTML = f.dv().day;
            }
            if(o.month){
              o.month.innerHTML = f.dv().month;
            }
            if(o.year){
              o.year.innerHTML = f.dv().year;
            }
            setTimeout(f.ui, 1000);
          }
        };
        f.ui();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .scrollerWrapper
    position absolute
    top 150px
    bottom 0
    left 0
    width 100%
    .clearfix
      &::before
        display block
        content ""
        clear both
      .container
        height 160px
        .wrapper
          height 160px
          img
            height 160px
      .module2-con
        .swiper-slide
          background #fff
          width 100%
          img
            width 100%
            display block
            vertical-align: middle


      .pagemenu
        width 100%
        height 90px
        &::after
          content: " ";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        .clearList
          width 20%
          height 100%
          float left
          img
            width 100%
      .page-line
        background: #f3f4f5;
        height: 10px;
      /*<!--每日疯抢-->*/
      .surprise
        height 197px
        .surprise-tit
          width 355px
          height 45px
          padding 10px
          position relative
          .fl
            width 85px
            height 24px
            float left
            img
              width 105px
              height 24px;
              margin-left -20px
          .ft1
            margin-top 1px
            width 65px
            height 20px
            margin-left 10px
            font-size 13px
          .time
            width 81px
            height 45px
            margin-left 5px
            text-align center
            .time1
              display inline-block
              font-size 14px
              text-align center
              .times0
                width 78px
                height 19px
                text-align center
                .timeT
                  display inline-block
                  border 1px solid #ddd
          .more
            position absolute
            top 2px
            right 0
            width 140px
            height 41px

            img
              display block
              width 70px
              height 41px
              margin-left 65px
              margin-right 5px
        .surprise-pro
          white-space nowrap
          overflow hidden
          height 132px
          padding-left 5px
          margin-bottom 10px
          .swiper-slide
            width 98px
            float left
            .pro-block
              margin 0 8px
              .thispro-img
                background: url(./default-epet.png) no-repeat center center #f4f4f4
                background-size 120px auto
                position relative
                padding-top 100%
                img
                  top 0
                  left 0
                  position absolute
                  width 100%
              .cred
                margin-top: 5px
                text-align center
                .ft12
                  color red
                  font-size 12px
                .ft17
                  color red
                  font-size 16px
              .c999
                line-height 22px
                color #999
                text-align center
                font-size 12px

      /*<!--热门栏目-->*/
      .titdiv
        width 100%
        img
          width 100%
      .divboximg
        border-top 1px solid #e7e7e7
        font-size 0
        .divimgLeft
          width 42%
          display inline-block
          img
            width 100%
        .divimgRight
          width 58%
          display inline-block
          img
            width 100%



      /*<!--潮品视频-->*/
      .titmoudle
        position relative
        text-align center
        padding-top 10px
        margin-bottom 5px
        .centerimg
          max-width 50%
          margin 0 auto
          img
            width 100%
        .more
          position absolute
          top 10px
          right -20px
          img
            width 50%
            margin-right 5px



      .cmVideoList
        .imgBox
          position relative
          height 160px
          overflow hidden
          img
            display block
            width 100%
          .cmallPlayIco
            background url("./play.png") 0 0 no-repeat
            background-size contain
            width 20px
            height 20px
            position absolute
            left: 50%
            top: 38%
            margin-left -10px
            margin-top -10px
            color #333
          .cmViewBox
            position absolute
            left 0
            top 0
            width 97%
            padding 0 5px
            font-size 12px
            line-height 1.6
            .fr
              float right
              color #fff
              font-size 12px
        .catCare
          color #333
          display flex
          margin 5px 0
          padding 10px 15px
          .cat
            font-size 12px
            flex 4
            float left
            .care
              color red


          .cVN
            flex 1
            font-size 12px
            text-align center
            .cmallViewIco
              display inline-block
              width 10px
              height 9px
              background url("./view-black.png")0 0 no-repeat
              background-size 10px 9px
              margin-right 3px


      /*<!--体验馆-->*/
      .swiper-wrapper3
        height 160px
        .swiper-slide3
          height 160px
          width 100%
          img
            height 160px
            width 100%


      .titcenter
        border-bottom 1px solid #999
      .dataPerfect
        .text
          padding 10px
          font-size 16px
          line-height 1.6
          .textW
            font-size 15px
          .textB
            margin-left 10px
            color #999
            font-size 12px
        .soleimg
          img
            display block
            width 100%
      /*公益*/
      .publicBenefit
        .public
          position relative
          text-align center
          padding-top 10px
          .leftimg2
            max-width 50%
            margin 0 auto
            img
              width 85%
          .more
            position absolute
            top 25px
            right -25px
            img
              width 50%
              margin-right 5px
        .ta-bg
          position relative
          img
            width 100%
          .ta-barnds
            position absolute
            top 20px
            left: 0
            p
              display block
              text-align center
              margin-top 5px
              span
                color #fff
                font-weight bold
                &.number
                  display inline-block
                  color red
                  width 25px
                  height 25px
                  line-height 25px
                  background #fff
                  text-align center
                  border-radius 5px
                  font-weight bold
                &.numberT
                  color red


        .epetCat
          padding-left 10px
          .sponsor
            width 60px;
            padding-top 10px
            float left
            img
              display block
              margin-top 10px
              vertical-align middle
              width 90%
          .epet
            margin-left 70px
            padding 5px 0 0 5px
            border-left 1px solid #e7e7e7
            /*.swiper-wrapper
              height 68px
              overflow hidden*/
            .swiper-slide
              width 110px
              margin-right 10px
              border-right 1px solid #e7e7e7
              .db
                height 40px
                width 100px
                background url("./default-epet.png") no-repeat center center #f4f4f4;
                background-size: 120px auto;
                position: relative
                img
                  height 100%
                  width 100%
              .help-money
                width 100px
                border-top 1px solid #e7e7e7
                margin-top 5px
                padding 3px 0
                font-size 12px
                color: #333
                text-overflow ellipsis
                white-space nowrap
                overflow hidden

       /*口碑*/
      .publicPraise
        .public
          position relative
          text-align center
          padding-top 10px
          .leftimg2
            max-width 50%
            margin 0 auto
            img
              width 85%
          .more
            height 18px
            background: url(./index_icon_comment_sanjiao.png) no-repeat right;
            background-size: 8px 10px;
            padding-right: 10px;
            transform scale(0.84)
            position absolute
            top 22px
            right 5px
            &>a
              font-size 12px
              color #999

        .brands-judge
          overflow hidden
          padding-bottom 10px
          .brands
            width 48.5%
            float left
            &>a
              color #333
              .join
                padding-bottom 15px
                background #f5f5f5
                display inline-block
                margin 10px 0 0 10px
                .main_img
                  position relative
                  height 150px
                  overflow hidden
                  img
                    display inline-block
                    width 100%
                    position absolute
                    left 0
                    top 0
                  .join_time
                    position absolute;
                    bottom 0
                    left 0
                    color #fff
                    font-size 12px
                    text-align center
                    vertical-align middle
                    width 100%
                    background rgba(0,0,0,0.4)
                .petCat
                  width 100%
                  font-size 12px
                  margin-top 5px
                  padding-right 0 5px
                  .petPer
                    float left
                  .petName
                    float right
                    background #ddd
                    border-radius 5px
                    padding 0 5px
                .petDec
                  display inline-block
                  width 96%
                  overflow hidden
                  height 60px
                  margin-top 5px
                  padding 0 5px
                  font-size 13px
                  line-height 1.6
                  color #999



</style>
