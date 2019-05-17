/**
 * userType 用户类型 ==> TY 体验用户, HZHB 合作伙伴, VIP Vip用户, PTYF 平台研发
 * userCity 用户城市 ==> 福建城市，沿海一线城城市
 * deviceType 设备类型 ==> PC pc电脑, MB 移动手机, PAD 平板
 */
const logRequests = [{
  'appId': 'app01',
  'appName': '安全生产',
  'requestUri': '/notice/send-mb-msg',
  'requestParams': '{msg:"[中海创]验证码：103254，硬件注册验证"}',
  'serviceId': 'sendMbMsg',
  'serviceName': '发送短信',
  'serviceGroupId': 'notice',
  'serviceGroupName': '通知服务',
  'serviceTestUrl': '/test/notice/send-mb-msg',
  'writeTime': '2019-05-07 09:40:23',
  'costTime': 325,
  'succ': 1
},
{
  'appId': 'app02',
  'appName': '设备管理',
  'requestUri': '/notice/send-mb-msg',
  'requestParams': '{msg:"[中海创]验证码：103254，硬件注册验证"}',
  'serviceId': 'sendMbMsg',
  'serviceName': '发送短信',
  'serviceGroupId': 'notice',
  'serviceGroupName': '通知服务',
  'serviceTestUrl': '/test/notice/send-mb-msg',
  'writeTime': '2019-05-07 09:40:23',
  'costTime': 325,
  'succ': 1
},
{
  'appId': 'app01',
  'appName': '安全生产',
  'requestUri': '/notice/send-wx-msg',
  'requestParams': '{msg:"[中海创]异常警报，异常编号：10056"}',
  'serviceId': 'sendWxMsg',
  'serviceName': '发送微信消息',
  'serviceGroupId': 'notice',
  'serviceGroupName': '通知服务',
  'serviceTestUrl': '/test/notice/send-mb-msg',
  'writeTime': '2019-05-07 09:40:23',
  'costTime': 325,
  'succ': 1
},
{
  'appId': 'app02',
  'appName': '设备管理',
  'requestUri': '/notice/send-wx-msg',
  'requestParams': '{msg:"[中海创]异常警报，异常编号：10023"}',
  'serviceId': 'sendWxMsg',
  'serviceName': '发送微信消息',
  'serviceGroupId': 'notice',
  'serviceGroupName': '通知服务',
  'serviceTestUrl': '/test/notice/send-mb-msg',
  'writeTime': '2019-05-07 09:40:23',
  'costTime': 325,
  'succ': 1
}
]

export default [
  // app log request
  {
    url: '/app/log-request',
    type: 'post',
    response: config => {
      debugger
      return {
        code: 20000,
        data: {
          rows: logRequests
        }
      }
    }
  }
]
