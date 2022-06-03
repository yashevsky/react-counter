import type { FC } from 'react'
import React from 'react'
import classnames from 'classnames'

import styles from './style.module.css'

type ButtonProps = {
    children: React.ReactNode,
    onClick: () => void,
    color?: 'salmon' | 'yellow' | 'green' | 'red',
    className?: string | undefined
}

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    color,
    className,
}) => {
    const classNames = classnames(
        styles.root,
        className,
        { [styles.salmon]: color === 'salmon' },
        { [styles.red]: color === 'red' },
        { [styles.yellow]: color === 'yellow' },
        { [styles.green]: color === 'green' },
    )
    return (
        <button onClick={onClick} className={classNames}>{children}</button>
    )
}
