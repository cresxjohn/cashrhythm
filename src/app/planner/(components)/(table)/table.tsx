'use client'

import AddIcon from '@/assets/icons/svg/AddIcon'
import ArrowDownIcon from '@/assets/icons/svg/ArrowDownIcon'
import MoreIcon from '@/assets/icons/svg/MoreIcon'
import SearchNormalIcon from '@/assets/icons/svg/SearchNormalIcon'
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Pagination,
  Selection,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'
import { ChangeEvent, FC, Key, useCallback, useMemo, useState } from 'react'
import { columns, records, typeOptions } from './constant'
import { ICON_SIZES } from '@/assets/icons/svg/base'
import ExportIcon from '@/assets/icons/svg/ExportIcon'

interface Props {
  onAddNew: () => void
}

const typeColorMap: Record<string, ChipProps['color']> = {
  income: 'success',
  expense: 'warning',
  transfer: 'default',
}

const INITIAL_VISIBLE_COLUMNS = [
  'name',
  'amount',
  'account',
  'type',
  'nextDue',
  'daysToGo',
  'link',
  'actions',
]

type PlannerRecord = (typeof records)[0]

const PlannerTable: FC<Props> = (props) => {
  const { onAddNew } = props

  const [filterValue, setFilterValue] = useState('')
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  )
  const [typeFilter, setTypeFilter] = useState<Selection>('all')
  const [rowsPerPage, setRowsPerPage] = useState(100)
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'age',
    direction: 'ascending',
  })

  const [page, setPage] = useState(1)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns])

  const filteredItems = useMemo(() => {
    let filteredRecords = [...records]

    if (hasSearchFilter) {
      filteredRecords = filteredRecords.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    if (
      typeFilter !== 'all' &&
      Array.from(typeFilter).length !== typeOptions.length
    ) {
      filteredRecords = filteredRecords.filter((user) =>
        Array.from(typeFilter).includes(user.type)
      )
    }

    return filteredRecords
  }, [records, filterValue, typeFilter])

  const pages = Math.ceil(filteredItems.length / rowsPerPage)

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const sortedItems = useMemo(() => {
    return [...items].sort((a: PlannerRecord, b: PlannerRecord) => {
      const first = a[sortDescriptor.column as keyof PlannerRecord] as number
      const second = b[sortDescriptor.column as keyof PlannerRecord] as number
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  const renderCell = useCallback((record: PlannerRecord, columnKey: Key) => {
    const cellValue = record[columnKey as keyof PlannerRecord]

    switch (columnKey) {
      case 'type':
        return (
          <Chip
            className="capitalize"
            color={typeColorMap[record.type]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        )
      case 'account':
        return (
          <>
            <p>
              {cellValue}{' '}
              <span className="text-color-primary">
                {record.destinationAccount ? '->' : ''}
              </span>
            </p>
            {record.destinationAccount && <p>{record.destinationAccount}</p>}
          </>
        )
        break
      case 'daysToGo':
        if (typeof cellValue !== 'number') return
        return (
          <>
            {cellValue < 0 && (
              <p className="text-color-danger">
                {Math.abs(cellValue)} day{Math.abs(cellValue) > 1 ? 's' : ''}{' '}
                lapsed
              </p>
            )}
            {cellValue === 0 && <p className="text-color-warning">Today</p>}
            {cellValue === 1 && <p className="text-color-warning">Tomorrow</p>}
            {cellValue > 1 && <p>{cellValue} days to go</p>}
          </>
        )
        break
      case 'link':
        if (!cellValue && typeof cellValue !== 'string') return
        return (
          <Link isExternal href={cellValue as string}>
            <ExportIcon size={ICON_SIZES.SMALL} />
          </Link>
        )

        break
      case 'actions':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <MoreIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="flat">
                <DropdownItem className="text-color-success" color="success">
                  Make a transaction
                </DropdownItem>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem className="text-color-danger" color="danger">
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1)
    }
  }, [page, pages])

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page])

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value))
      setPage(1)
    },
    []
  )

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value)
      setPage(1)
    } else {
      setFilterValue('')
    }
  }, [])

  const onClear = useCallback(() => {
    setFilterValue('')
    setPage(1)
  }, [])

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchNormalIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ArrowDownIcon size={ICON_SIZES.SMALL} />}
                  variant="flat"
                >
                  Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={typeFilter}
                selectionMode="multiple"
                onSelectionChange={setTypeFilter}
                variant="flat"
              >
                {typeOptions.map((type) => (
                  <DropdownItem key={type.uid} className="capitalize">
                    {type.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ArrowDownIcon size={ICON_SIZES.SMALL} />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
                variant="flat"
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" endContent={<AddIcon />} onClick={onAddNew}>
              Add New
            </Button>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {records.length} records
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="15">50</option>
              <option value="15">100</option>
            </select>
          </label>
        </div> */}
      </div>
    )
  }, [
    filterValue,
    typeFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    records.length,
    hasSearchFilter,
  ])

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        {/* <span className="w-[30%] text-small text-default-400">
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span> */}
        {/* <Pagination
          //   isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div> */}
      </div>
    )
  }, [selectedKeys, items.length, page, pages, hasSearchFilter])

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: 'max-h-[382px]',
      }}
      selectedKeys={selectedKeys}
      // selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
      shadow="none"
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No records found'} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default PlannerTable
