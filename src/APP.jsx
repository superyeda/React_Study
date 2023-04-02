import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './routes';
export default function APP() {
  const element=useRoutes(routes)
  function computedClassName(){
    console.log("计算样式属性");
  }
  return (
    <div>
      <NavLink className={computedClassName} to="/home">HOME</NavLink>
      <NavLink to="/about">About</NavLink>
      <br />
        {/**
         * router v6版本
         * 1. 移除了<Switch>引入<Routes>
         * 2. Route组件配合Routes组件使用，Route必须使用Routes包裹
         * 3. <Route caseSensitive>属性指定匹配时是否指定大小写
         * 4. 
         */}
        {element}
    </div>
  )
}
