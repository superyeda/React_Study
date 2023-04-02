import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Content from '../pages/Content'
import {Navigate} from 'react-router-dom'
// 路由表的使用
const routes=[
    {
      path:"/home",
      element:<Home/>,
      children:[
        {
            path:"news/:id/:message",
            element:<News/>
        },
        {
            path:"messages",
            element:<Messages/>

        },
        {
          path:"content",
          element:<Content/>
        }
      ]
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/",
      element:<Navigate to="/home"/>
    }
  ]
export default routes