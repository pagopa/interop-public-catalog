import { Icon, List, ListItem } from 'design-react-kit'
import React from 'react'

type UseCasesFiltersProps = {
  categories: Array<{ name: string; icon: string }>
}

const UseCasesFilters: React.FC<UseCasesFiltersProps> = ({ categories }) => {
  return (
    <List className="border-start">
      {categories.map((category) => (
        <ListItem
          key={category.name}
          icon={<Icon icon={category.icon} className="ps-2" />}
          className="border-0"
          tag="a"
        >
          <span className="text"> {category.name} </span>
        </ListItem>
      ))}
    </List>
  )
}

export default UseCasesFilters
