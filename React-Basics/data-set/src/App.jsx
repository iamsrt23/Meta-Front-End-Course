import React from 'react'
import Child from './Child'
import Hooks from './Hooks'
import Form from './Form'
import UserefHook from './UserefHook'
import State from './State'
import Propdrilling from './Propdrilling'

const App = () => {
  const date = new Date()
  return (
    <div>
      <Child  message={date.toLocaleTimeString()}/>
      <Hooks />
      <Form />
      <UserefHook />
      <State />
      <Propdrilling msg={"I passed through the Header and the Wrapper and I reached the Button component"} />

    </div>
  )
}

export default App