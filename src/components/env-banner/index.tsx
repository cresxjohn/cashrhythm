const EnvironmentBanner = () => {
  const isProd = process.env.NEXT_ENV === 'production'

  if (isProd) return

  return (
    <div className="w-full bg-gray-200 text-foreground/80 text-center font-medium text-sm py-1 uppercase">
      {process.env.NEXT_ENV}
    </div>
  )
}

export default EnvironmentBanner
