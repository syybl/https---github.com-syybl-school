import type { FindItme,Tabulation,TabulationTitle } from '@/type'
import { ref } from "vue";

const find:FindItme[][] = [
    [
        {
            title:"上传时间",
            type:"time"
        },
        {
            title:"上架状态",
            type:"select"
        },
        {
            title:"上传人",
            type:"select"
        }
    ],[
        {
            title:"手动搜索",
            type:"input"
        },
        {
            title:"",
            type:"button"
        }
    ]
]
const TableTitle:TabulationTitle[] = [
    {
        title:"课程列表"
    },
    {
        title:"添加课程"
    }
] 
const TableItem:Tabulation[] =[
    {
        prop:"id",
        label:"课程编号",
        width:130
    },
    {
        prop:"name",
        label:"课程名称"
    },
    {
        prop:"image",
        label:"课程封面",
        type:"slot"
    },
    {
        prop:"state",
        label:"课程状态"
    },
    {
        prop:"money",
        label:"课程价格"
    },
    {
        prop:"sales",
        label:"课程销量"
    },
    {
        prop:"userId",
        label:"上传人"
    },
    {
        prop:"time",
        label:"上传时间",
        width:150
    }
] 

export {
    find,
    TableItem,
    TableTitle
}