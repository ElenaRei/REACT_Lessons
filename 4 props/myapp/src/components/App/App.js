
import Block from "../Block/Block"

// 1) Передать параметр как атрибут внутри компонента
// 2) Получить на стороне вызываемого компонента

function App(){

    return(
        <div>
           <Block title={'Title 1'} text={'Text 1'} color = {'red'} size={'l'}/>
           <Block title={'Title 2'} text={'Text 2'} color = {'blue'} size={'m'}/>
           <Block title={'Title 3'} text={'Text 3'} color = {'green'} size={'xl'}/>
        </div>
    )
}

export default App