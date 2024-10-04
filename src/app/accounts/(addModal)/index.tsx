import { Account } from '@/store/slices/client/interface'
import { parseDate } from '@internationalized/date'
import {
  Button,
  DatePicker,
  DateValue,
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
import { useFormik } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'
import { accountCategoryOptions } from './constant'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  balance: Yup.string().required('Balance is required'),
})

interface Props {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const AccountsAddModal: FC<Props> = (props) => {
  const { isOpen, onOpenChange } = props

  const onSubmit = (values: Account) => {
    console.log({ values })
  }

  const { errors, values, setFieldValue, handleSubmit } = useFormik<Account>({
    initialValues: {
      name: 'Hey',
      category: '',
      balance: 122,
      accountNumber: '',
      onHoldAmount: 0,
      creditLimit: 0,
      statementDate: parseDate('2024-02-01'),
      daysFromStatementToDueDate: 0,
      annualFee: 0,
      dateIssued: undefined,
      excludeInStats: false,
    },
    validationSchema,
    onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  })

  // console.log({ errors, values })

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      scrollBehavior="inside"
      backdrop="blur"
    >
      <form onSubmit={handleSubmit}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-4">
                <label>Add New Account</label>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Name"
                    placeholder="Enter name of the account"
                    value={values.name}
                    onValueChange={(value) => setFieldValue('name', value)}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                    autoFocus
                    isClearable
                    isRequired
                  />
                  <Select
                    items={accountCategoryOptions}
                    label="Category"
                    placeholder="Select a category"
                    value={values.category}
                    onSelectionChange={(value) =>
                      setFieldValue('category', value)
                    }
                    isInvalid={!!errors.category}
                    errorMessage={errors.category}
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
                    value={`${values.balance}`}
                    onValueChange={(value) => setFieldValue('balance', +value)}
                    isInvalid={!!errors.balance}
                    errorMessage={errors.balance}
                    isClearable
                    isRequired
                  />
                  <Input
                    label="Account Number"
                    placeholder="Enter account number of the account"
                    value={values.accountNumber}
                    onValueChange={(value) =>
                      setFieldValue('accountNumber', value)
                    }
                    isInvalid={!!errors.accountNumber}
                    errorMessage={errors.accountNumber}
                    isClearable
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
                    value={`${values.creditLimit}`}
                    onValueChange={(value) =>
                      setFieldValue('creditLimit', +value)
                    }
                    isInvalid={!!errors.creditLimit}
                    errorMessage={errors.creditLimit}
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
                    value={`${values.onHoldAmount}`}
                    onValueChange={(value) =>
                      setFieldValue('onHoldAmount', +value)
                    }
                    isInvalid={!!errors.onHoldAmount}
                    errorMessage={errors.onHoldAmount}
                    isClearable
                  />
                  <DatePicker
                    label="Statement Date"
                    description="Date when a statement is generated"
                    value={values.statementDate as DateValue}
                    onChange={(value) => setFieldValue('statementDate', value)}
                    isInvalid={!!errors.statementDate}
                    errorMessage={errors.statementDate}
                  />
                  <Input
                    label="Days from Statement to Due Date"
                    placeholder="Enter number of days"
                    description="Number of days from statement date to due date"
                    type="number"
                    value={`${values.daysFromStatementToDueDate}`}
                    onValueChange={(value) =>
                      setFieldValue('daysFromStatementToDueDate', +value)
                    }
                    isInvalid={!!errors.daysFromStatementToDueDate}
                    errorMessage={errors.daysFromStatementToDueDate}
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
                    value={`${values.annualFee}`}
                    onValueChange={(value) =>
                      setFieldValue('annualFee', +value)
                    }
                    isInvalid={!!errors.annualFee}
                    errorMessage={errors.annualFee}
                    isClearable
                  />
                  <DatePicker
                    label="Date Issued"
                    value={values.dateIssued as DateValue}
                    onChange={(value) => setFieldValue('dateIssued', value)}
                    isInvalid={!!errors.dateIssued}
                    errorMessage={errors.dateIssued}
                  />
                  <Switch
                    isSelected={values.excludeInStats}
                    onValueChange={(value) =>
                      setFieldValue('excludeInStats', value)
                    }
                  >
                    Exclude in Stats
                  </Switch>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="button" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Add Account
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </form>
    </Modal>
  )
}

export default AccountsAddModal
