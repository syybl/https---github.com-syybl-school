import { downloadByUrl } from "@pureadmin/utils";
import axios from "axios";
import CryptoJS from "crypto-js";

function Ai_Interface() {
  const APPID = "3140b0ee";
  const API_SECRET = "M2FhMjMwYjI0NTkyNTk0MGZkMWYyZjEy";
  const API_KEY = "073757cd82cb13c2a245772b2d98c1cf";
  // const API_SECRET = "MjlmNzkzNmZkMDQ2OTc0ZDdmNGE2ZTZi"
  // const API_KEY =  "addd2272b6d8b7c8abdd79531420ca3b"

  const httpUrl = "wss://spark-api.xf-yun.com/v3.5/chat"
  const method = "GET";
  const inter = "spark-api.xf-yun.com";

  const date = new Date().toGMTString();
  const Moudel = "/v3.5/chat";

  // const date = "Fri, 05 May 2023 10:43:39 GMT"
  // const Moudel = "/v1.1/chat";

  var tmp = "host: " + inter + "\n";
  tmp += "date: " + date + "\n";
  tmp += "GET " + Moudel + " HTTP/1.1";
  const tmp_sha = CryptoJS.HmacSHA256(tmp, API_SECRET);
  const signature = CryptoJS.enc.Base64.stringify(tmp_sha);
  const authorization_origin = `api_key="${API_KEY}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = btoa(authorization_origin);
  console.log("authorization ", authorization);
  const url = `${httpUrl}?authorization=${authorization}&date=${date}&host=${inter}`;
  console.log("url ", url);

  const param = {
    "header": {
      app_id: "3140b0ee",
      uid: "12345",
    },
    "parameter": {
      chat: {
        domain: "generalv3.5",
        temperature: 0.5,
        max_tokens: 1024,
      },
    },
    "payload": {
      "message": {
        // # 如果想获取结合上下文的回答，需要开发者每次将历史问答信息一起传给服务端，如下示例
        // # 注意：text里面的所有content内容加一起的tokens需要控制在8192以内，开发者如有较长对话需求，需要适当裁剪历史信息
        text: [
          {
            role: "system",
            content: "你现在扮演李白，你豪情万丈，狂放不羁；接下来请用李白的口吻和用户对话。"
          }, //#设置对话背景或者模型角色
          { role: "user", content: "你是谁" }, //# 用户的历史问题
          { role: "assistant", content: "....." }, //# AI的历史回答结果
          // # ....... 省略的历史对话
          { role: "user", content: "你会做什么" }, // # 最新的一条问题，如无需上下文，可只传最新一条问题
        ],
      },
    },
  };

  const ttsWS = new WebSocket(url);
  ttsWS.onopen = (e) => {
    ttsWS.send(JSON.stringify(param));
  };
  ttsWS.onmessage = (e) => {
    console.log(JSON.parse(e.data));
  };
  ttsWS.onerror = (e) => {
    alert("WebSocket报错，请f12查看详情");
    console.error(`详情查看：${encodeURI(url.replace("wss:", "https:"))}`);
  };
  ttsWS.onclose = (e) => {
    console.log(e);
  };

  return url;
}

export default Ai_Interface;
