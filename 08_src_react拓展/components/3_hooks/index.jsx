import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// export default class Demo3 extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

export default function Demo3() {
    /**
     * useState Hook
     * 参数：初始化状态值
     * count当前状态值，setState更新状态值函数
     */
    const [count, setCount] = React.useState(0)

    function add() {
        // setCount(count+1) //写法1
        setCount(count => count + 1) //写法2
    }

    /**
     * useEffect
     * 相当与两个生命周期钩子didMount updated 
     * 参数：第二个参数不传全都监测，传的话检测数组中的数据
     */
    React.useEffect(() => {
        let timer=setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return ()=>{
            // 收尾操作 相当于willUnmount
            clearInterval(timer)
        }
    }, [])

    function unmount(){
        console.log("卸载组件");
    }

    /**
     * useRef
     */
    const myRef=React.useRef()
    function show(){
        alert(myRef.current.value)
    }
    return (
        <div>
            <h2>hooks可以让函数式组件使用state及其他React特性</h2>
            <h2>求和:{count}</h2>
            <input type="text" ref={myRef} />
            <button onClick={add}>+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>show</button>
        </div>
    )
}