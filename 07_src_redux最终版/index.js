import React from 'react'  
import ReactDom from 'react-dom/client'
import APP from './APP'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

const root=ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <APP/>
            </Provider>   
        </BrowserRouter>
    </React.StrictMode>
)
// 监测redux中状态的改变，如果redux的状态发生改变，那么重新渲染App组件
// store.subscribe(()=>{
//     root.render(<APP/>)
// })