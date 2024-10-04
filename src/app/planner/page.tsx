'use client'

import HomeLayout from '@/layout/HomeLayout'
import { useDisclosure } from '@nextui-org/react'
import PlannerAddModal from './(components)/(addModal)'
import PlannerTable from './(components)/(table)/table'
const Planner = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <HomeLayout>
      <main className="flex min-h-screen flex-col py-10 px-4 gap-6">
        <p className="text-3xl font-semibold mb-2">Planner</p>
        <PlannerTable onAddNew={onOpen} />
        <PlannerAddModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </main>
    </HomeLayout>
  )
}

export default Planner
