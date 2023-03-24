// 配置代理
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{
            target:"http://localhost:5000",//请求转发给谁
            changeOrigin:true,      //控制服务器收到的相应头中的Host字段
            pathRewrite:{"^/api1":""}//重写请求路径
        }),
        createProxyMiddleware('/api2',{
            target:"http://localhost:5001",//请求转发给谁
            changeOrigin:true,      //控制服务器收到的相应头中的Host字段
            pathRewrite:{"^/api2":""}//重写请求路径
        })
    )
}