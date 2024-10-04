import { FC } from 'react'
import SvgIconBase, { SvgIconProps } from './base'

const ExportIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIconBase {...props}>
      <path
        d="M13 11L21.2 2.80005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6.8V2H17.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIconBase>
  )
}

export default ExportIcon
