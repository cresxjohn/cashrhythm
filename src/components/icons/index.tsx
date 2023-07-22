import Image from 'next/image'
import { FC } from 'react'

export enum ICON_SIZES {
  SMALL = 'SMALL',
  BASE = 'BASE',
  LARGE = 'LARGE',
}

interface Props {
  type: string
  size?: ICON_SIZES | number
  className?: string
}

const sizes = {
  SMALL: 16,
  BASE: 24,
  LARGE: 30,
}

const Icon: FC<Props> = (props) => {
  const { type, size = ICON_SIZES.BASE } = props

  let dimension = size

  if (typeof size !== 'number') {
    dimension = sizes[size]
  }

  return (
    <Image
      src={`/icons/${type}.svg`}
      alt={type}
      width={dimension as number}
      height={dimension as number}
      priority
    />
  )
}

export default Icon
