import { FC } from 'react'
import SvgIconBase, { SvgIconProps } from './base'

const AddIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIconBase {...props}>
      <path
        d="M6 12H18"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 18V6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIconBase>
  )
}

export default AddIcon
