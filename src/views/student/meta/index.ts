import type { Tabulation,TabulationTitle,FindItme} from '@/type'

const tableItem: Tabulation[] = [
    {
        prop:"id",
        label:"用户ID"
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
        prop:"money",
        label:"支付金额"
    },
    {
        prop:"number",
        label:"订单数量"
    },
    {
        prop:"time",
        label:"注册时间"
    },
    {
        prop:"accountStatus",
        label:"账号状态"
    }
]
const tableTitle: TabulationTitle[] = [
    {
        title:"学员列表",
    },
    {
        title:"",
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