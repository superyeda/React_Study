import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
export default function Content() {
    const {state:{id,message}}=useLocation()
    return (
        <div>
            State传参
            <div>
                {id}
                <br />
                {message}
            </div>
        </div>
    )
}
