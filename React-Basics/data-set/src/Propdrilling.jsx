import React from 'react'

const Propdrilling = (props) => {
  return (
    <div>
      <Header msg={props.msg}/>
    </div>
  )
}

const Header = (props)=>{
  return(
    <div style={{border:'10px solid whitesmoke'}}>
      <h1>Header Here</h1>
      <Wrapper msg={props.msg} />
    </div>
  )
}

function Wrapper(props){
  return(
    <div style={{border:'10px solid lightgray'}}>
      <h2>Wrapper Here</h2>
      <Button msg={props.msg} />
     </div>
  )
}

function Button(props){
  return(
    <div style={{border:'20px solid orange'}}>
      <h3>This is the Button Component</h3>
      <button onClick={()=>alert(props.msg)}>Click Me!</button>
    </div>
  )
}



export default Propdrilling