// Задание.
// a) Cоздать кнопку, которая обнулит состояние count (значение 0)- line 25
// б) Создать еще две кнопки, которые будут увеличивать и уменьшать значение count. - line 29
//    Значение должно подтягиваться с модального окна.

// Задание 4.
// Для последних двух кнопок реализовать фнукции, которые будут осуществлять проверку. 
// Если итоговый результат модального окна будет выисляться как NaN - setCount вызываться не должен

import { useState } from "react"

function App(){

    let [count, setCount]= useState(0)

    const addHandle = () =>{
        let answer= +prompt()
        if (!isNaN(answer)){
        setCount(count + answer)
        }
    }

    const rmHandle = () =>{
        let answer= +prompt()
        if (!isNaN(answer)){
        setCount(count -answer)
        }
    }
// Illi v odnu function
    // const handle = (sign)=>{
    //     let answer= +prompt()
    //     if (!isNaN(answer)){
            
    //         if(sign=='+'){setCount(count + answer)
    //         }else if(sign=='-'){
    //             setCount(count -answer)
    //         }
    // }

    return(
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={()=>setCount(++count)}>Increment</button>
                <button onClick={()=>setCount(--count)}>Decrement</button>
            </div>

            <div>
                <button onClick={()=>setCount(count+100)}>+100</button>
                <button onClick={()=>setCount(count -100)}>-100</button> 
            </div>    
      
            {/* <div>

                <button onClick={()=>setCount(count + +prompt())}>Increase n</button>   
                <button onClick={()=>setCount(count - +prompt())}>Decrease n</button> 
            </div> */}

            <div>
                <button onClick={()=>setCount(0)}>set 0</button>

                <button onClick={addHandle}>Increase n</button>   
                <button onClick={rmHandle}>Decrease n</button> 
            </div>
        
        </div>
    )
}
export default App