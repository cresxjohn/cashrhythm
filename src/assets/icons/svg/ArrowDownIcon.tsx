import { FC } from 'react'
import SvgIconBase, { SvgIconProps } from './base'

const ArrowDownIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIconBase {...props}>
      <path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIconBase>
  )
}

export default ArrowDownIcon