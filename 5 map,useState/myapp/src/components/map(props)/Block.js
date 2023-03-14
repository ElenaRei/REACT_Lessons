//Task 1
// function Block(props){
//     const {title}= props
//     return(
//         <div>
//             <h2>{title}</h2>
//         </div>
//     )
// }
// export default Block

//Task 2
function Block(props){

    const {title,text,id} = props
    
    return(
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Block
