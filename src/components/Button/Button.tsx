import React, { FC } from 'react'

import styles from './style.module.css'

type ButtonType = {
    children: React.ReactNode,
    onClick: () => void
}

const Button: FC<ButtonType> = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={styles.root}>{children}</button>
  )
}

export default Button
