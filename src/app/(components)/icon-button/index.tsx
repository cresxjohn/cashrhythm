import { FC } from 'react'
import Button from '../button'
import Icon from '../icon'

interface Props {
  type: string
  ['key']?: any
}

const IconButton: FC<Props> = (props) => {
  const { type, ...rest } = props

  return (
    <Button>
      <Icon type={type} {...rest} />
    </Button>
  )
}

export default IconButton
