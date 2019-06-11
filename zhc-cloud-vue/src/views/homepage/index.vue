<template>
  <div class="homepage-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="paas_userInfo paas_cf">
          <div class="paas_userInfo_photo paas_fl">
            <img :src="paas_userInfo.balance.imgSrc" :onerror="paas_userInfo.balance.errorImg">
          </div>
          <div class="paas_userInfo_ctn paas_fl">
            <ul class="paas_userInfo_line1 paas_cf">
              <li v-for="balance in paas_userInfo.balance.listData" :key="balance" class="paas_fl">{{balance.desc}}（￥）：<span class="paas_userInfo_num">{{balance.value}}</span></li>
            </ul>
            <ul class="paas_userInfo_line2 paas_cf">
              <li v-for="detail in paas_userInfo.detail" :key="detail" class="paas_fl">
                <a href="javascript:void(0);" @click='top.Sys.addTab("/${amreptweb}/${projectName}/paaskfpt/zhgl/funcdir/zhgl.func?{{detail.link}}","{{detail.desc}}");'>
                  <svg-icon :icon-class="detail.icon" :style="{'color':detail.iconColor}"/>{{detail.desc}}
                </a>
              </li>
            </ul>
            <div class="paas_userInfo_btnGroup">
              <button v-for="infoBtn in paas_userInfo.infoBtn" :key="infoBtn" :class="infoBtn.bgColor" class="paas_btn bgcolor_main" @click='top.Sys.addTab("{{infoBtn.link}}")'>{{infoBtn.desc}}</button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18" style="padding:30px;">
        <el-row :gutter="20">
          <el-col :span="8" v-for="card in paas_userInfo.paas_cards" :key="card">
            <a href="javascript:void(0);" class="paas_cards bgcolor_main paas_fl" :class="card.bgColor">
              <div class="paas_cards_ctn">
                <svg-icon :icon-class="card.icon"/>{{card.desc}}
                <div class="paas_cards_r">
                  <div class="paas_cards_num yy_SUMPRO">{{card.value}}</div>
                  <div class="paas_cards_r_text">已{{card.desc}}数</div>
                </div>
              </div>
              <div class="paas_cards_info bgcolor_main_dark">
                {{card.info}}
                <svg-icon icon-class="arrow-right"/>
              </div>
            </a>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" class="paas_list">
            <div class="paas_list_head">市场统计</div>
				    <ul class="paas_list_items paas_list_withtag" id="paas_myMarket">
              <li v-for="sctj in paas_userInfo.sctjData" :key="sctj">
                <div class="paas_list_item" :title="我发布的+sctj.desc">
                  <span class="paas_list_itemsNum">{{sctj.value}}</span>我发布的{{sctj.desc}}
                </div>
              </li>
            </ul>
          </el-col>
          <el-col :span="12" class="paas_list">
            <div class="paas_list_head">部署统计</div>
				    <ul class="paas_list_items paas_list_withtag">
              <li v-for="bstj in paas_userInfo.bstjData" :key="bstj">
                <a class="paas_list_item" :title="bstj.desc">
                  <span class="paas_list_itemsNum">{{bstj.value}}</span>{{bstj.desc}}
                </a>
              </li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" style="padding:30px;padding-left:0;">
        <div class="paas_list">
          <div class="paas_list_head"><span>我参与的项目</span><a href="javascript:void(0);" onclick="top.Sys.addTab('/${amreptweb}/${projectName}/paaskfpt/zhgl/funcdir/wcydxm.func','我参与的项目')" style="float:right;color:#fff">更多</a></div>
          <ul class="paas_list_items_striped" id="paas_myPro">
            <li v-for="pro in paas_userInfo.proData.listData" :key="pro">
              <div class="paas_list_item paas_project" :title="pro.desc">
                <a class="paas_list_item_link" href="javascript:void(0);" :title="pro.desc">
                  <img :src="pro.imgSrc" :onerror="paas_userInfo.proData.errorImg">{{pro.desc}}
                </a>
                <div class="paas_list_item_btnBox paas_cf">
                  <a class="paas_list_item_btn paas_btn bgcolor_main bgcolor_orange" href="" traget="_blank">主页</a>
                  <a class="paas_list_item_btn paas_btn bgcolor_main bgcolor_orange" href="" traget="_blank">开发</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'homepage',
  //components: { adminDashboard, editorDashboard },
  data() {
    return {
      paas_userInfo:{
        balance:{
          imgSrc:"",
          errorImg:'this.src="'+require('@/images/admin.jpg')+'"',
          listData:[
            {
              desc:"账户余额",
              value:1500
            },{
              desc:"H币余额",
              value:200
            },{
              desc:"可提现余额",
              value:5
            }
          ]
        },
        detail:[
          {
            desc:"充值明细",
            link:"tradeOperate=cz",
            icon:"recharge",
            iconColor:"#ff6600"
          },{
            desc:"支出明细",
            link:"tradeOperate=zc",
            icon:"expend",
            iconColor:"#29b779"
          },{
            desc:"收入明细",
            link:"tradeOperate=sr",
            icon:"earning",
            iconColor:"#6666cc"
          },{
            desc:"H币明细",
            link:"viewid=ViewItem_2xE",
            icon:"hmoney",
            iconColor:"#bf9f09"
          },{
            desc:"提现明细",
            link:"tradeOperate=tx",
            icon:"advance",
            iconColor:"#27a9e3"
          }
        ],
        infoBtn:[
          {
            desc:"充值",
            bgColor:"bgcolor_orange",
            link:"/${amreptweb}/${projectName}/paaskfpt/zhgl/funcdir/zhgl.func?viewid=ViewItem_N0w"
          },{
            desc:"提现",
            bgColor:"bgcolor_yg",
            link:""
          },{
            desc:"会员升级",
            bgColor:"bgcolor_yg",
            link:""
          }
        ],
        paas_cards:[
          {
            icon:"pro",
            desc:"创建项目",
            value:"88",
            bgColor:"",
            info:"CREATE A PROJECT",
            func:()=>{
              console.log(1);
            }
          },{
            icon:"puzzle",
            desc:"创建组件",
            value:"88",
            bgColor:"bgcolor_green",
            info:"CREATE COMPONENTS",
            func:()=>{
              console.log(1);
            }
          },{
            icon:"instruct",
            desc:"创建指令",
            value:"88",
            bgColor:"bgcolor_purple",
            info:"CREAT INSTRUCTTIONS",
            func:()=>{
              console.log(1);
            }
          }
        ],
        sctjData:[
          {
            desc:"指令",
            value:66
          },{
            desc:"项目",
            value:66
          },{
            desc:"功能模块",
            value:66
          },{
            desc:"组件",
            value:66
          }
        ],
        bstjData:[
          {
            desc:"主机",
            value:66
          },{
            desc:"开发项目",
            value:666
          },{
            desc:"正式项目",
            value:6666
          }
        ],
        proData:{
          errorImg:'this.src="'+require('@/images/defaultLogo.png')+'"',
          listData:[
            {
              desc:"EAP云平台1",
              imgSrc:""
            },{
              desc:"EAP云平台2",
              imgSrc:""
            },{
              desc:"EAP云平台3",
              imgSrc:""
            },{
              desc:"EAP云平台4",
              imgSrc:""
            },{
              desc:"EAP云平台5",
              imgSrc:""
            }
          ]
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    
  }
}
</script>
<style lang="scss" scoped>
/*reset*/
*{
	padding: 0;
	margin:0;
}
html,body{
	height:100%;
	color: #333;
	font-family: 微软雅黑;
}
ul,li{
	list-style-type: none;
}
a{
	text-decoration: none;
}
.paas_fl{
	float: left;
}
.paas_fr{
	float: right;
}
.paas_cf:after{
	content: "";
	clear: both;
	display: block;
}
/*按钮*/
.paas_btn{
	height:35px;
	line-height: 35px;
	text-align: center;
	padding: 0 20px;
	border-radius: 3px;
	color: #fff;
	font-size: 14px;
	border:none;
  &:hover{
    cursor: pointer;
  }
}
/*颜色*/
.bgcolor_main{
	background-color:#27A9E3;
}
.paas_btn.bgcolor_main:hover,.bgcolor_main_dark{
	background-color: #2398CC;
}
@mixin hueColor($colordeg){
  -webkit-filter:hue-rotate($colordeg);
	filter:hue-rotate($colordeg);
}
.bgcolor_orange{
  @include hueColor(180deg);
}
.bgcolor_green{
  @include hueColor(300deg);
}
.bgcolor_yg{
  @include hueColor(250deg);
}
.bgcolor_purple{
  @include hueColor(50deg);
}
/*用户主页*/
.paas_userInfo{
	padding: 30px;
	background-color: #F2F2F2;
}
.paas_userInfo_photo{
	height:120px;
	width: 120px;
	border:1px solid #ccc;
	background-color: #fff;
	border-radius: 5px;
	margin-right: 30px;
	text-align: center;
  i{
    color: #27A9E3;
	  font-size: 100px;
  }
  img{
    height:100%;
    width:100%;
  }
}
.paas_userInfo_ctn{
	line-height: 40px;
}
.paas_userInfo_line1{
  li{
    margin-right: 45px;
    font-size: 13px;
  }
  .paas_userInfo_num{
    color: #FF6600;
    font-weight: bold;
  }
}
.paas_userInfo_line2{
  li{
    margin-right: 20px;	
    a{
      color: #333;
      font-size: 13px;
      .svg-icon{
        font-size: 16px;
        margin-right:5px;
      }
    }
  }
}
.paas_userInfo_btnGroup .paas_btn{
	margin-right: 20px;
}



/*卡片*/
.paas_cards{
	color: #fff;
	display: block;
	width: 100%;
	margin-bottom: 20px;
}
.paas_cards+.paas_cards{
	margin-left: 30px;
}
.paas_cards:hover{
	cursor: pointer;
}
.paas_cards_ctn{
	padding: 0 20px;
	line-height: 90px;
	position: relative;
  .svg-icon{
    font-size: 50px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .paas_cards_r{
    position: absolute;
    height:62px;
    width: 100px;
    right:20px;
    text-align: right;
    top:0;
    bottom:0;
    margin:auto;
    color: #fff;
    font-size: 14px;
  }
  .paas_cards_num{
    font-size: 30px;
    line-height: 42px;
    font-weight: bold;
  }
}
.paas_cards_r_text{
	line-height: 20px;
}
.paas_cards_info{
	height:30px;
	line-height: 30px;
	padding: 0 20px;
	font-size: 12px;
	color: #dbdbdb;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  .svg-icon{
    float: right;
    line-height: 30px;
    font-size: 16px;
  }
}
/*列表*/
.paas_list_head{
	padding: 0 10px;
	font-size: 13px;
	color: #fff;
	height:35px;
	line-height: 35px;
	border-radius: 3px 3px 0 0;
	background-color: #3B3E40;
}
.paas_list_items{
	overflow: auto;
}
.paas_list_items,.paas_list_items_striped{
  >li>.paas_list_item{
    padding: 0 15px;
    line-height: 70px;
    height:70px;
    border:1px solid #E9E9E9;
    border-top: none;
    background-color: #fff;
    font-size: 14px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    color: #333;
    display:block;
    &:hover{
      cursor: pointer;
    }
  }
}
.paas_list_itemsNum{
  position: absolute;
	left: 20px;
	top:0;
	bottom:0;
	margin:auto;
	width: 40px;
}
.paas_list{
  >.paas_list_withtag{
    .paas_list_item{
      padding-left: 70px;
    }
  }
  li{
    .paas_list_item{
      img{
        @extend .paas_list_itemsNum;
        height:40px;
        border:1px solid #E0E0E0;
        border-radius: 3px;
      }
    }
  }
}
.paas_list_items_striped>li:nth-child(odd) .paas_list_item{
	background-color: #F0F0F0;
}
.paas_list_item_link{
    display: inline-block;
    position:relative;
    height:60px;
    line-height:45px;
    width: 100%;
    padding-left: 50px;
    color:#333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .paas_list .paas_list_item & img{
      left:0;
      transform: translateY(7px);
    }
}
.paas_list_itemsNum{
	font-weight: bold;
	font-size: 22px;
    text-align: right;
}
.paas_list_item_btnBox{
    position: absolute;
    bottom:10px;
    left:65px;
    height:20px;
}
.paas_list_item_btn{
    display: inline-block;
    float:left;
    font-size: 12px;
    height:20px;
    line-height:20px;
    margin-right:10px;
    border-radius: 5px;
    padding: 0 10px;
    +.paas_list_item_btn{
      margin-right: 15px;
    }
}
</style>