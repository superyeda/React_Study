import React from 'react'
import {NavLink,Outlet,useNavigate} from 'react-router-dom'
export default function Home() {
  const nav=useNavigate()
  return (
    <div>
        嵌套路由Home
        <br />
        <NavLink to="news/001/锄禾日当午">Params参数|</NavLink>
        <NavLink to="messages?id=002&message=汗滴禾下土">Search参数|</NavLink>
        <NavLink to="content" state={{
          id:"004",
          message:"粒粒皆辛苦"}}
          >State参数</NavLink>
        <button onClick={()=>{nav("/about",{
          replace:false,
          state:{
            id:"005",
            message:"李白"
          }
        })}}>编程式路由导航</button>
        {/* 指定路由呈现位置 */}
        <Outlet></Outlet>
    </div>
  )
}
