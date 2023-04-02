import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Messages() {
  const [search,setSearch]=useSearchParams()
  return (
    <div>
      search参数
      <div>
        {search.get("id")}
        <br />
        {search.get("message")}
      </div>
      <button onClick={()=>setSearch("id=003&message=谁知盘中餐")}>修改search参数</button>
    </div>
  )
}
