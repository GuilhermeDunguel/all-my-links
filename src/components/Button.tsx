import React, { ReactNode } from 'react'

import styles from './styles/Button.module.scss'

interface buttonProps {
  link: string
  icon: ReactNode
  title: string
  color: 'orange' | 'violet' | 'blue'
}

export function Button({ link, icon, title, color }: buttonProps) {
  return (
    <a href={link}>
      <button className={`${styles.wrapper} ${styles[color]}`}>
        {icon}
        {title}
      </button>
    </a>
  )
}
