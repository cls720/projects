export default {
    //数据集配置  部门
    id: "dsResources",
    //主键
    primary: ["resId"],
    //操作权限
    operations: ['oinsert', 'odelete', 'oquery', 'omodify'],
    //字段顺序,自动填充的顺充
    sortFields: ["resId", "name", "parentId", "type", "resUrl"],
    fields: {
        resId: {
            name: 'resId', //字段ID
            desc: '菜单唯一GUID',//字段描述
            dbtype: 'dbString',//数据类型           
        },
        name: {
            name: 'name',
            desc: '菜单名称',
            dbtype: 'dbString',
        },
        parentId: {
            name: 'parentId',
            desc: '菜单父GUID',
            dbtype: 'dbString',
        },
        type: {
            name: 'type',
            desc: '菜单唯一GUID',
            dbtype: 'dbString',
        },
        resUrl: {
            name: 'resUrl',
            desc: '菜单唯一GUID',
            dbtype: 'dbString',
        },
    },
}