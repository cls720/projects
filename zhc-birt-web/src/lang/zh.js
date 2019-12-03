export default {
  route: {
    homepage: '首页',
    birt: '报表',
    basicBirt: '基础报表',
    formBirt: '表单',
    formListBirt: '段落明细',
    gridListBirt: '网格明细',
    gridGroupStatBirt: '多表头分组统计',
    gridLockBirt: '网格分片冻结',
    columnSplitBirt: '列分栏',
    cardSplitBirt: '卡片分栏',
    invoicePrintBirt: '发票套打',
    advinceBirt: '高级报表',
    archivesBirt: '档案式报表',
    electronicSignatureBirt: '电子签章',
    documentsBirt: '合同文档式报表',
    dataDeepBirt: '数据钻取报表',
    chartDeepBirt: '图表钻取',
    bindDataset: '绑定数据集',
    orderDetailBirt: '订单明细',
    bomDetailBirt: 'Bom清单',
    chart: "图表",
    basicChart: "基础图表",
    pieChart: "饼图",
    barChart: "柱图",
    lineChart: "线图",
    radarChart: "雷达图",
    deepJoinStatChart: "钻取&联动分析",
    mobile: "移动",
    mobileBasic: "移动基础",
    seniorLeadership: "高层领导",
    middleLevelLeadership: "中层领导",
    frontLineStaff: "一线员工"
  },
  navbar: {
    homepage: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小',
    searchPlaceholder: '搜索',
    debug: '调试'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  eapcloud: {
    architectureDiagram: 'HiCloud平台架构导航图'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  },
  register: {
    title: '欢迎注册海创云',
    idPopoverText1: '5到20个字符',
    idPopoverText2: '只能包含字母，数字及下划线和减号',
    idPopoverText3: '请勿包含身份证和银行卡等信息，设置成功后将无法修改 ',
    idPlaceholder: '请设置用户账号',
    pwdPopoverText1: '6到20个字符 ',
    pwdPopoverText2: '只能包含字母，数字及标点符号(除空格)',
    pwdPopoverText3: '字母、数字和标点符号至少包含两种',
    pwdPlaceholder: '请设置您的登录密码',
    confirmPwdPlaceholder: '请再次输入您的密码',
    phonePlaceholder: '请输入手机号码',
    emailPlaceholder: '请输入邮箱',
    product: '我已阅读并同意',
    privacyPolicy: '《隐私政策》',
    productTerms: '《海创云服务条款》',
    confirm: "注册",
    pwdErrorInfo1: "请输入6到20个字符",
    pwdErrorInfo2: "不能包含空格",
    pwdErrorInfo3: "字母、数字和标点符号至少包含两种",
    idErrorInfo1: "请输入5到20个字符",
    idErrorInfo2: "只能包含字母，数字及下划线和减号",
    confirmPwdErrorInfo: "两次输入的密码不一致，请重新输入",
    phoneErrorInfo: "请输入正确的手机号码",
    emailErrorInfo: "请输入正确的邮箱地址",
    weak: "弱",
    medium: "中等",
    strong: "强",
    strength: "密码强度"
  }
}
