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
} from '@nextui-org/react'
import { FC } from 'react'
import { accountCategoryOptions } from './constant'

interface Props {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const AccountsAddModal: FC<Props> = (props) => {
  const { isOpen, onOpenChange } = props

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
              <label>Add New Account</label>
            </ModalHeader>
            <ModalBody>
              <form className="flex flex-col gap-4">
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter name of the account"
                  isClearable
                  isRequired
                />
                <Select
                  items={accountCategoryOptions}
                  label="Category"
                  placeholder="Select a category"
                  isRequired
                >
                  {(account) => (
                    <SelectItem key={account.key}>{account.label}</SelectItem>
                  )}
                </Select>
                <Input
                  label="Balance"
                  placeholder="Enter balance"
                  type="number"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">₱</span>
                    </div>
                  }
                  isClearable
                  isRequired
                />
                <Input
                  label="Credit Limit"
                  placeholder="Enter credit limit"
                  type="number"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">₱</span>
                    </div>
                  }
                  min={0}
                  isClearable
                />
                <Input
                  label="On-Hold Amount"
                  placeholder="Enter on-hold amount"
                  type="number"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">₱</span>
                    </div>
                  }
                  min={0}
                  isClearable
                />
                <DatePicker
                  label="Statement Date"
                  description="Date when a statement is generated"
                />
                <Input
                  label="Days from Statement to Due Date"
                  placeholder="Enter number of days"
                  description="Number of days from statement date to due date"
                  type="number"
                  isClearable
                />
                <Input
                  label="Annual Fee"
                  placeholder="Enter annual fee"
                  type="number"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">₱</span>
                    </div>
                  }
                  min={0}
                  isClearable
                />
                <DatePicker label="Date Issued" />
                <Switch>Exclude in Stats</Switch>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Add Account
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AccountsAddModal
