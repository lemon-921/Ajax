/*先以管理员身份在终端上
    1.npm init --yes
    2.npm i express
    然后在运行js服务
    node server.js



*/
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
    app.get('/server', (request, response)=>{ 
    //响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('HELLO AJAX ');
});
//可以接收任意类型
//post->all   all表示可以接受任意请求 自定义头需要all来接受请求类型 不然报错
//app.post('/server', (request, response)=>{
    app.all('/server', (request, response)=>{
    //响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    response.send('HELLO AJAX POST');
});

//JSON响应
    app.all('/json-server', (request, response)=>{
    //响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data={
        name:'zhang'
    }    
    //对对象进行字符转换
    let str=JSON.stringify(data)
    //设置响应体
   // response.send('HELLO AJAX JSON');
   response.send(str);
});

//IE缓存
app.get('/ie', (request, response)=>{ 
    //响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('HELLO IE 888');
});


//延时
app.get('/delay', (request, response)=>{ 
    //响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
         //设置响应
        response.send('超时响应');
    },3000);
   
});

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'星星'};
    response.send(JSON.stringify(data));
});

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷永远的神'};
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷永远的神'};
    response.send(JSON.stringify(data));
});

//jsonp服务
app.all('/jsonp-server',(request, response) => {
    //js代码
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷atguigu'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
    //这一段返回的形式就是函数的调用，客户端的结果参数${str}， function handle(data) ， 前端提前声明
    //这就是jsonp实现原理
});

//用户名检测是否存在
app.all('/check-username',(request, response) => {
  
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
    
});

//jQuery
app.all('/jquery-jsonp-server',(request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name:'尚硅谷',
        city: ['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});

// cors
app.all('/cors-server', (request, response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.setHeader("Access-Control-Allow-Method", '*');
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    response.send('hello CORS');
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});