import { FC } from 'react'

export enum ICON_SIZES {
  SMALL = 'SMALL',
  BASE = 'BASE',
  LARGE = 'LARGE',
}

export interface SvgIconProps {
  size?: ICON_SIZES | number
  width?: number
  height?: number
  className?: string
  children?: React.ReactNode
}

const sizes = {
  SMALL: 16,
  BASE: 24,
  LARGE: 30,
}

const SvgIconBase: FC<SvgIconProps> = (props) => {
  const { width, height, size = ICON_SIZES.BASE, children } = props

  let dimension = size

  if (typeof size !== 'number') {
    dimension = sizes[size]
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={dimension || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={dimension || width}
      {...props}
    >
      {children}
    </svg>
  )
}

export default SvgIconBase
