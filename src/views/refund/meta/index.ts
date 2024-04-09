import type { Tabulation,TabulationTitle,FindItme} from '@/type'

const tableItem: Tabulation[] = [
    {
        prop:"id",
        label:"订单编号"
    },
    {
        prop:"username",
        label:"用户名称"
    },
    {
        prop:"phone",
        label:"手机号"
    },
    {
        prop:"courseName",
        label:"课程名称"
    },
    {
        prop:"money",
        label:"订单金额"
    },
    {
        prop:"state",
        label:"订单状态"
    },
    {
        prop:"time",
        label:"提交时间"
    }
]
const tableTitle: TabulationTitle[] = [
    {
        title:"退款订单列表",
    },
    {
        title:"",
    }
]
const find:FindItme[][] =[
    [
        {
            title:"提交时间",
            type:"time",
        },
        {
            title:"处理状态",
            type:"select",
        }

    ],
    [
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