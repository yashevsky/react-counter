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
    // перенести стили в файл ксс
        <div>
            {counter < 0 ? (<h1>Значение меньше 0</h1>) : (<h1>{counter}</h1>)}
            <div>
                <Button className={styles.firstButton} color="green" onClick={multiply10}>*10</Button>
                <Button color="salmon" onClick={increment}>+</Button>
                <Button color="yellow" onClick={resetCounter}>0</Button>
                <Button color="red" onClick={decrement}>-</Button>
                <Button color="green" onClick={division10}>/10</Button>
            </div>
            <div>
                {secondCounter}
                <Button onClick={newCounterInc}>+1</Button>
            </div>
        </div>
    )
}
