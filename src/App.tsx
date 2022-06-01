import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {
    
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => setValue(value - 1)

    const resetCounter = () => setValue(0)

    const multiply10 = () => setValue(value * 10)

    const division10 = () => setValue(value / 10)

  return (
    <div style={{display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
      {value < 0 ? (<h1>Значение меньше 0</h1>) : (<h1>{value}</h1>)}
      <div>
        <button style={{background: 'green', fontSize: '20px'}} onClick={multiply10}>*10</button>
        <Button onClick={increment}>+</Button>
        <button style={{background: 'yellow', fontSize: '20px'}} onClick={resetCounter}>0</button>
        <button style={{background: 'red', fontSize:'20px'}} onClick={decrement}>-</button>
        <button style={{background: 'salmon', fontSize:'20px'}} onClick={division10}>/10</button>
      </div>
    </div>
  )
}

export default App


// доп функц, репо, добавить AsheR4444
