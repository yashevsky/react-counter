import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Button } from '../Button'
import styles from './styles.module.css'

type Operator = '+' | '-' | '/' | 'X' | null

export const App = () => {
    const [preState, setPreState] = useState('')
    const [curState, setCurState] = useState('')
    const [input, setInput] = useState('0')
    const [operator, setOperator] = useState<Operator>(null)
    const [total, setTotal] = useState(false)

    const inputNum = (e: any) => {
        if (curState.includes('.') && e.target.innerText === '.') return

        if (total) {
            setPreState('')
        }
        // eslint-disable-next-line no-unused-expressions
        curState
            ? setCurState((pre) => pre + e.target.innerText)
            : setCurState(e.target.innerText)
        setTotal(false)
    }

    useEffect(() => {
        setInput(curState)
    }, [curState])

    useEffect(() => {
        setInput('0')
    }, [])

    const reset = () => {
        setPreState('')
        setCurState('')
        setInput('0')
    }

    const equals = (e: React.MouseEvent | undefined) => {
        if (e?.target?.innerText === '=') setTotal(true)
        let calc
        switch (operator) {
        case '/':
            calc = String(parseFloat(preState) / parseFloat(curState))
            break
        case '+':
            calc = String(parseFloat(preState) + parseFloat(curState))
            break
        case '-':
            calc = String(parseFloat(preState) - parseFloat(curState))
            break
        case 'X':
            calc = String(parseFloat(preState) * parseFloat(curState))
            break
        default:
            return
        }
        setInput('')
        setPreState(calc)
        setCurState('')
    }
    const minusPlus = () => {
        if (curState.charAt(0) === '-') {
            setCurState(curState.substring(1))
        } else {
            setCurState(`-${curState}`)
        }
    }

    const percent = () => {}

    const operatorType = (e : React.MouseEvent | undefined) => {
        setTotal(false)
        const target = e?.target as HTMLElement
        setOperator(target?.innerText as Operator)
        if (curState === '') return
        if (preState !== '') {
            equals(e)
        }setPreState(curState)
        setCurState('')
    }

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <div className={styles.calcInput}>
                    {input === '0'
                        ? (
                            <NumberFormat
                                value={input}
                                displayType="text"
                                thousandSeparator
                            />
                        )
                        : (
                            <NumberFormat
                                value={preState}
                                displayType="text"
                            />
                        )}
                </div>
                <div>
                    <Button color="red" onClick={reset}>AC</Button>
                    <Button color="yellow" onClick={minusPlus}>+/-</Button>
                    <Button color="yellow" onClick={percent}>%</Button>
                    <Button color="green" onClick={(e) => operatorType(e)}>/</Button>
                </div>
                <div>
                    <Button onClick={inputNum}>7</Button>
                    <Button onClick={inputNum}>8</Button>
                    <Button onClick={inputNum}>9</Button>
                    <Button color="green" onClick={(e) => operatorType(e)}>X</Button>
                </div>
                <div>
                    <Button onClick={inputNum}>4</Button>
                    <Button onClick={inputNum}>5</Button>
                    <Button onClick={inputNum}>6</Button>
                    <Button color="green" onClick={(e) => operatorType(e)}>-</Button>
                </div>
                <div>
                    <Button onClick={inputNum}>1</Button>
                    <Button onClick={inputNum}>2</Button>
                    <Button onClick={inputNum}>3</Button>
                    <Button color="green" onClick={(e) => operatorType(e)}>+</Button>
                </div>
                <div>
                    <Button onClick={inputNum}>0</Button>
                    <Button color="yellow" onClick={inputNum}>.</Button>
                    <Button color="green" onClick={(e) => equals(e)}>=</Button>
                </div>
            </div>
        </div>
    )
}
export default App
