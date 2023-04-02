import React from 'react'  
import ReactDom from 'react-dom/client'
import APP from './APP'
import {BrowserRouter} from 'react-router-dom'

const root=ReactDom.createRoot(document.getElementById("root"))
root.render(
    // <React.StrictMode>
        <BrowserRouter>
                <APP/> 
        </BrowserRouter>
    // </React.StrictMode>
)