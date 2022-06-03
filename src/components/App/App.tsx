import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import styles from './styles.module.css'

export const App = () => {
    const [counter, setCounter] = useState(0)
    const [secondCounter, setSecondCounter] = useState(0)

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const resetCounter = () => setCounter(0)
    const multiply10 = () => setCounter(counter * 10)
    const division10 = () => setCounter(counter / 10)

    const newCounterInc = () => setSecondCounter(secondCounter + 1)
    const func = () => console.log('нажатие на window')

    useEffect(() => {
    // ComponentDidMount и ComponentDidUpdate и ComponentWillUpdate
        console.log('что-то из списка зависимостей изменилось')

        window.addEventListener('click', func)

        // ComponentWillUnmount
        return () => {
            window.removeEventListener('click', func)
            console.log('убрали листенер')
        }
    }, [counter])


  return (
      <div className={styles.root}>
          {counter < 0 ? (<h1>Значение меньше 0</h1>) : (<h1>{counter}</h1>)}
          <div>
              <Button color="red" onClick={multiply10}>C</Button>
              <Button color="yellow" onClick={multiply10}>+/-</Button>
              <Button color="yellow" onClick={multiply10}>%</Button>
              <Button color="green" onClick={multiply10}>/</Button>
          </div>
          <div>
              <Button onClick={division10}>7</Button>
              <Button onClick={division10}>8</Button>
              <Button onClick={division10}>9</Button>
              <Button color="green" onClick={division10}>X</Button>
          </div>
          <div>
          <Button onClick={multiply10}>4</Button>
          <Button onClick={multiply10}>5</Button>
          <Button onClick={multiply10}>6</Button>
          <Button color="green" onClick={multiply10}>-</Button>
          </div>
          <div>
          <Button onClick={multiply10}>1</Button>
          <Button onClick={multiply10}>2</Button>
          <Button onClick={multiply10}>3</Button>
          <Button color="green" onClick={multiply10}>+</Button>
          </div>
          <div>
          <Button onClick={multiply10}>0</Button>
          <Button color="yellow" onClick={multiply10}>.</Button>
          <Button color="green" onClick={multiply10}>=</Button>
          </div>
      </div>
  )
}

export default App


