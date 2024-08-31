'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import { FC, Key } from 'react'

const tabs = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    key: 'planner',
    title: 'Planner',
    path: '/planner',
  },
  {
    key: 'stats',
    title: 'Stats',
    path: '/stats',
  },
  {
    key: 'records',
    title: 'Records',
    path: '/records',
  },
  {
    key: 'accounts',
    title: 'Accounts',
    path: '/accounts',
  },
  {
    key: 'tools',
    title: 'Tools',
    path: '/tools',
  },
  {
    key: 'settings',
    title: 'Settings',
    path: '/settings',
  },
]

const MainTabs: FC = () => {
  const router = useRouter()
  const currentPath = usePathname()
  const selectedKey = tabs.find(({ path }) => path === currentPath)?.key

  const handleOnSelectionChange = (newKey: Key) => {
    const newPath = tabs.find(({ key }) => key === newKey)?.path
    if (newPath) router.push(newPath)
  }

  return (
    <div>
      <Tabs
        selectedKey={selectedKey}
        onSelectionChange={handleOnSelectionChange}
        variant="underlined"
      >
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title} />
        ))}
      </Tabs>
    </div>
  )
}

export default MainTabs
