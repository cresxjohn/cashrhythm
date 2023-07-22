import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Button: FC<Props> = (props) => {
  const { children, className } = props

  return <button className={className}>{children}</button>
}

export default Button
