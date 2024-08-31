const EnvironmentBanner = () => {
  const isProd = process.env.NEXT_ENV === 'production'

  if (isProd) return

  return (
    <div className="fixed bottom-0 right-0 bg-color-warning/10 text-color-warning/80 text-center font-medium text-xs py-1 px-2 m-2 rounded-md uppercase">
      {process.env.NEXT_ENV}
    </div>
  )
}

export default EnvironmentBanner
