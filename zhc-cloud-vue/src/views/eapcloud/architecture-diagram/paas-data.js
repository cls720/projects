import axios from 'axios'
export const paas = {
  developTools: {
    title: "开发工具",
    linkUrl: "/amrept-web/amreport/designer/tree/design.do",
    children: [{
        title: "数据库",
        linkUrl: "/amrept-web/eaptpl/designer/dbTable/design.do?desc=%E8%BF%9B%E5%BA%A6%E5%81%8F%E5%B7%AE&bizpath=eaptpl.pro/sjk.dbdir/eaptpl.dsdir/dbtbldir.dbtbldir/bbzt.tabledir/de_fjdpc.table&ver=1.0.0"
      },
      {
        title: "数据集",
        linkUrl: "/amrept-web/eaptpl/designer/store/open.do?desc=进度偏差&fkind=store&bizpath=eaptpl.pro/bbzt.dir/sczt.dir/kyscjkzx.modeldir/datadir.datadir/jdpc.store&ver=1.0.0"
      },
      {
        title: "功能",
        linkUrl: "/amrept-web/eaptpl/designer/func/open.do?desc=%E8%BF%9B%E5%BA%A6%E5%81%8F%E5%B7%AE&fkind=func&bizpath=eaptpl.pro/bbzt.dir/sczt.dir/kyscjkzx.modeldir/funcdir.funcdir/jdpc.func&ver=1.0.0"
      },
      {
        title: "逻辑流",
        linkUrl: "/amrept-web/eaptpl/designer/logic/open.do?desc=进度偏差&fkind=logic&bizpath=eaptpl.pro/bbzt.dir/sczt.dir/kyscjkzx.modeldir/logicdir.logicdir/jdpc.logic&ver=1.0.0"
      },
      {
        title: "工作流",
        linkUrl: "/amrept-web/eaptpl/designer/flow/open.do?desc=生产计划调整&fkind=flow&bizpath=eaptpl.pro/bbzt.dir/sczt.dir/kyscjkzx.modeldir/flowdir.flowdir/scjhtz.flow&ver=1.0.0"
      },
      {
        title: "UI视图",
        linkUrl: "/amrept-web/eaptpl/designer/rpt/open.do?desc=生产偏差&fkind=rpt&bizpath=eaptpl.pro/bbzt.dir/sczt.dir/kyscjkzx.modeldir/viewdir.viewdir/scpc.rpt&componentTypes=[%27co%27,%27zl%27]&ver=1.0.3"
      },
      {
        title: "BI报表",
        linkUrl: "/amrept-web/eaptpl/designer/rpt/open.do?desc=生产偏差&fkind=rpt&bizpath=eaptpl.pro/bbzt.dir/sczt.dir/kyscjkzx.modeldir/viewdir.viewdir/scpc.rpt&componentTypes=[%27co%27,%27zl%27]&ver=1.0.3"
      },
      {
        title: "Websocket接口",
        linkUrl: ""
      },
      {
        title: "作业调度",
        linkUrl: "/amrept-web/eaptpl/designer/job/open.do?desc=生产偏差&fkind=job&bizpath=eaptpl.pro/bbzt.dir/sczt.dir/kyscjkzx.modeldir/jobdir.jobdir/scpc.job&ver=1.0.0"
      }
    ]
  },
  mbPt: {
    title: "移动平台",
    linkUrl: "/amrept-web/eaptpl/designer/rpt/open.do?desc=%E9%A6%96%E9%A1%B5&fkind=mrpt&bizpath=eaptpl.pro/sjapp.dir/sy.modeldir/viewdir.viewdir/sy.mrpt&componentTypes=[%27co%27,%27zl%27]&ver=1.0.0&deviceName=iphone6",
    children: [{
        title: "React Native",
        linkUrl: ""
      },
      {
        title: "H5",
        linkUrl: ""
      },
      {
        title: "小程序",
        linkUrl: ""
      },
      {
        title: "公众号",
        linkUrl: ""
      },
      {
        title: "移动App",
        linkUrl: ""
      }
    ]
  },
  blockGj: {
    title: "模块化构件",
    linkUrl: "",
    children: [{
      title: '函数库',
      linkUrl: ''
    }, {
      title: '组件库',
      linkUrl: ''
    }, {
      title: '模板库',
      linkUrl: ''
    }, {
      title: '功能库',
      linkUrl: ''
    }]
  },
  bigData: {
    title: "大数据应用",
    linkUrl: "",
    children: [{
      title: '数据可视化',
      linkUrl: ''
    }, {
      title: '数据分析',
      linkUrl: ''
    }, {
      title: 'ETL数据清洗',
      linkUrl: ''
    }, {
      title: '大数据接口调用',
      linkUrl: ''
    }]
  },
  ztFz: {
    title: "海创物联",
    linkUrl: "",
    callback:function(){
      /*axios({
        url:"http://iot.fdauto.com/iot/oauth/token",
        method:"post",
        params:{
          "grant_type": "password",
          "client_id": "client",
          "scope": "write read",
          "client_secrete": "secrete",
          "username": "root", 
          "password": "fdauto2018"
        },
        headers: {
          "Authorization": "Basic "+btoa("client:secret"),
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
      }).then(function(res){
            console.log('post请求...'); 
            console.log(res.data);
            Cookies.set("adminToken",res.data.access_token,{
              domain:".fdauto.com"
            });
            window.open("http://iot.fdauto.com");
      });*/
      window.open("http://iot.gkiiot.com/#/platform/logins?userId=root&passWord=fdauto2018");
    },
    children: [{
      title: '2D平面仿真',
      linkUrl: '',
      callback:function(){
        axios.post("http://design.gkiiot.com/api/index/returneditUrl",
            {token:'afYWFjYjRiNjktZTkyYi00ZjU0LWJhMWUtMzkxMGUwN2RiMDc1',aid:"376"}
        ).then(function(res){
          window.open(res.data.msg);
        });
      }
    }, {
      title: '3D立体仿真',
      linkUrl: '',
      callback:function(){
        axios.post("http://design.gkiiot.com/api/index/returneditUrl",
            {token:'afYWFjYjRiNjktZTkyYi00ZjU0LWJhMWUtMzkxMGUwN2RiMDc1',aid:"442"}
        ).then(function(res){
          window.open(res.data.msg);
        });
      }
    }]
  },
  bootService: {
    title: "微服务集成",
    linkUrl: "",
    children: [{
      title: '通知体系',
      linkUrl: ''
    }, {
      title: '文件服务',
      linkUrl: ''
    }, {
      title: '搜索服务',
      linkUrl: ''
    }, {
      title: '验证服务',
      linkUrl: ''
    }, {
      title: '数据服务',
      linkUrl: ''
    }, {
      title: '生活服务',
      linkUrl: ''
    }, {
      title: '企业管理',
      linkUrl: ''
    }]
  },
  devopsMoniter: {
    title: "运维监控",
    linkUrl: "",
    children: [{
      title: '容器管理',
      linkUrl: ''
    }, {
      title: '集群管理',
      linkUrl: ''
    }, {
      title: '日志管理',
      linkUrl: ''
    }, {
      title: '异常报警',
      linkUrl: ''
    }, {
      title: '性能分析',
      linkUrl: ''
    }]
  }
}
