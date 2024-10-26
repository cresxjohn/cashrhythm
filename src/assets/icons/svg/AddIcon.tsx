import { FC } from 'react'
import SvgIconBase, { SvgIconProps } from './base'

const AddIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIconBase {...props}>
      <path
        d="M6 12H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIconBase>
  )
}

export default AddIcon
