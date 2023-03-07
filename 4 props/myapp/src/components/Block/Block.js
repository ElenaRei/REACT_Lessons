import './Block.css'
// задача аргумента props - сколлекционировать все передаваемый
// пропы в 1 объект, формируя пары ключ-значение

// Задание 2 
// Передайте в компонент block 4 проп (size), который будет регулировать размеры div-карточки
// Если указать размер:
// 'l', тогда размер должен быть W/H  100/80 px
// 'm', тогда размер должен быть W/H  150/100 px
// 'xl', тогда размер должен быть W/H  220/150 px

// Задание 3 (ДЗ)
// Передайте в компонент block 5 проп (isRead), который принимает булевый тип
// Если компонент block получит true - тогда необходимо помимо h2 и p, сформировать еще один p 
// с текстовым сво-вом 'Read'
// Если компонент block получит false - нужно оставить только h2 и p
function Block(props) {
const {title,text,size, color}= props
    return(
      <div className={`block_item ${size}`} style={{backgroundColor: color}}>
      <h2>{title}</h2>
      <p>{text}</p>
      
      </div>
  )
}
export default Block
  //2. Variant 
       // return (
      // <div className = 'block_item'>
      //   <h2>{props.title}</h2>
      //   <p>{props.text}</p>
      //   <p>{props.color}</p>
      //       </div>
  // Задание 1
// Передайте в компонент block 3 проп (color), который будет регулировать цвет 
// карточки (background-color)

     
 