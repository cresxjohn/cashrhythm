import { ACCOUNT_CATEGORIES } from '../constant'

const accountCategoryOptions = Object.values(ACCOUNT_CATEGORIES).map(
  (category) => ({
    key: category,
    label: category,
  })
)

export { accountCategoryOptions }
