import type { Tabulation,TabulationTitle,FindItme} from '@/type'

const tableItem: Tabulation[] = [
    {
        prop:"name",
        label:"讲师名称",
        width:80
    },
    {
        prop:"teacher_introduce",
        label:"讲师介绍"
    },
    {
        prop:"createTime",
        label:"注册时间",
        width:150
    }
]
const tableTitle: TabulationTitle[] = [
    {
        title:"讲师列表",
    },
    {
        title:"添加讲师",
    }
]
const find:FindItme[][] =[
    [
        {
            title:"注册时间",
            type:"time",
        },
        {
            title:"手动搜索",
            type:"input",
        },
        {
            title:"",
            type:"button",
        }
    ]
]


export {
    tableItem,
    tableTitle,
    find
}