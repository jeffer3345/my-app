const App = () => {
    return(
<div>
    <h1> holaaaa mundo </h1>
</div>

    )
}
export default App;
const estilo2 = {
    boxshadow: '0 5px 3px rgba (0,0,0,0.5)'
  }
  
  const estilo = ({bg='#222'})=> ({
    backgroundColor: bg,
    color:'#fff', 
    padding:'10px 15px',
    margin:'10px 15px',
  })
  
  const Li=({children}) => {
    return (
  <li  className="clase-li">{children} </li>
    )
  }
  const App= ()=>{
   const estado='feliz'
    return(
  <ul  className="clase-css">
    <Li estado="feliz"> Holaaaa mundo</Li>
  </ul>
  
    )
  }
  
  
  export default App;
  

