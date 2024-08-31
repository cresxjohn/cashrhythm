import {
  Button,
  DatePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Switch,
  Tab,
  Tabs,
  Textarea,
} from '@nextui-org/react'
import { FC, Key, useState } from 'react'
import { accountOptions, frequencyOptions } from './constant'

interface Props {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const PlannerAddModal: FC<Props> = (props) => {
  const { isOpen, onOpenChange } = props
  const [type, setType] = useState('income')
  const [recurring, setRecurring] = useState(false)

  const isTransfer = type === 'transfer'

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      scrollBehavior="inside"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-4">
              <label>Add New Record</label>
              <Tabs
                selectedKey={type}
                onSelectionChange={(key) => setType(key as string)}
                aria-label="Record type"
                fullWidth
              >
                <Tab key="income" title="Income" />
                <Tab key="expense" title="Expense" />
                <Tab key="transfer" title="Transfer" />
              </Tabs>
            </ModalHeader>
            <ModalBody>
              <form className="flex flex-col gap-4">
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter name of the record"
                  isClearable
                  isRequired
                />
                <Input
                  label="Amount"
                  placeholder="Enter amount"
                  type="number"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">₱</span>
                    </div>
                  }
                  isClearable
                  isRequired
                />
                <Select
                  items={accountOptions}
                  label={`${isTransfer ? 'From ' : ''}Account`}
                  placeholder={`Select ${
                    isTransfer ? 'a source' : 'an'
                  } account`}
                  isRequired
                >
                  {(account) => (
                    <SelectItem key={account.key}>{account.label}</SelectItem>
                  )}
                </Select>
                {isTransfer && (
                  <Select
                    items={accountOptions}
                    label="To Account"
                    placeholder="Select a destination account"
                    isRequired
                  >
                    {(account) => (
                      <SelectItem key={account.key}>{account.label}</SelectItem>
                    )}
                  </Select>
                )}
                <Switch isSelected={recurring} onValueChange={setRecurring}>
                  Repeating
                </Switch>
                <DatePicker
                  label={`${recurring ? 'Start' : 'Due'} Date`}
                  isRequired
                />
                {recurring && (
                  <>
                    <Select
                      items={frequencyOptions}
                      label="Frequency"
                      placeholder="Select a frequency"
                      isRequired
                    >
                      {(account) => (
                        <SelectItem key={account.key}>
                          {account.label}
                        </SelectItem>
                      )}
                    </Select>
                    <Tabs aria-label="Recurring end type" fullWidth>
                      <Tab key="forever" title="Forever" />
                      <Tab key="end-date" title="Until end date">
                        <DatePicker label="End Date" isRequired />
                      </Tab>
                      <Tab key="no-of-events" title="Until number of events">
                        <Input
                          label="No of Events"
                          placeholder="Enter a number"
                          type="number"
                          isClearable
                          isRequired
                        />
                      </Tab>
                    </Tabs>
                  </>
                )}
                <Input
                  type="url"
                  label="Website"
                  placeholder="app.vendor.com"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://
                      </span>
                    </div>
                  }
                />
                <Input
                  label="Payee"
                  placeholder="Enter the name of the payee"
                />
                <Textarea label="Note" placeholder="Add a note" />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Add Record
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default PlannerAddModal
