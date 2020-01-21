var templateGridModel = {
    controlName: "BirtWorkBook",
    controlId: "BirtWorkBook_0",
    children: [
        {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: 'sheet0',//配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
            pageIndex: 0,
            style: "padding:10px;",
            children: [
                {
                    controlName: "BirtGridSheet",
                    controlId: "BirtFormSheet_01",
                }, {
                    controlName: "BirtGridSheet",
                    controlId: "BirtFormSheet_02",
                },
            ]
        },
        {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            name: 'sheet1',//配置页,children为其算法分页，如插入分页符或A4纸数据过长换页
            pageIndex: 2,
            style: "padding:10px;",
            children: [
                {
                    controlName: "BirtGridSheet",
                    controlId: "BirtFormSheet_11",
                }
            ]
        }
    ]
}

var templateFormModel = {
    controlName: "BirtWorkBook",
    controlId: "BirtWorkBook_0",
    children: [
        {
            controlName: "BirtSheet",
            controlId: "BirtSheet_0",
            pageIndex: 0,
            style: "padding:10px;",
            children: [
                {
                    controlName: "BirtFormSheet",
                    controlId: "BirtFormSheet_0",
                    children: [
                        {
                            controlName: '子控件1',
                            controlId: 'sub_contronId_1'
                        }
                    ]
                }
            ]
        }
    ]
}
