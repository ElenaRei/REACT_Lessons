// function App(){
//     let count=0
//     const handle= ()=> {
//         count++
// !!!!! no ne budett obnovlenija!!!!!!!!!
//     }
//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={handle}>Click!</button>
//         </div>
//     )
// }

// export default App

import { useState } from "react"


function App(){

    // const [state, setState] = useState()

    // state - это состояние, которые может передавать абсолютно любые данные( array, boolean, string)
    // setState - это функция, которая перезаписывает state и заставляет компонент обновиться

    // Правило нейминга
    // post        setPost
    // product     setProduct

 // const [state, setState] = useState()
    let [count, setCount] = useState(0)
    //can use any name

    // функция handle вызывает сетСтейт setCount, который перезаписывает значение стейта count и обновляет компонент
    const handle = () => {
        // setCount(5)
       setCount(++count)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handle}>Клик!</button>
        </div>
    )
}

export default App


