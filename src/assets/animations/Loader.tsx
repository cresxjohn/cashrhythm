import { cn } from '@nextui-org/react'
import { FC } from 'react'

interface Props {
  size?: number
}

const Loader: FC<Props> = ({ size = 24 }) => {
  // TODO: change source of show to redux store
  const show = true

  return (
    <iframe
      className={cn('mt-2', { hidden: !show })}
      width={size}
      height={size}
      style={{ transform: 'scale(4)', transformOrigin: 'center' }}
      src="https://lottie.host/embed/dab2feac-b863-4b7b-ac68-0480a87fdde8/upjjCWFS0v.json"
    />
  )
}

export default Loader
