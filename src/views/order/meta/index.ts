import type { Tabulation,TabulationTitle,FindItme} from '@/type' 

const title:TabulationTitle[] =[
    {
        title:"订单列表",
    },
    {
        title:"订单管理",
    }
]
const find:FindItme[][] =[
    [
        {
            title:"订单编号",
            type:"time"
        },
        {
            title:"订单状态",
            type:"select"
        }
    ],
    [
        {
            title:"手动搜索",
            type:"input"
        },
        {
            title:"",
            type:'button'
        }
    ]
]

const tableItem:Tabulation[] =[
    {
        prop:"orderId",
        label:"订单编号",
    },
    {
        prop:"userName",
        label:"用户名称",
    },
    {
        prop:"phone",
        label:"手机号",
    },
    {
        prop:"orderName",
        label:"商品名称",
    },
    {
        prop:"money",
        label:"订单金额",
    },
    {
        prop:"state",
        label:"订单状态",
    },
    {
        prop:"time",
        label:"下单时间",
    }
]

export {
    tableItem,find,title
}