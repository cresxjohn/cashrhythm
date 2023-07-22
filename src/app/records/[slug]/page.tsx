'use client'

import { useParams } from 'next/navigation'

const Expenses = () => {
  const params = useParams()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Record Details {params.slug}
    </main>
  )
}

export default Expenses
