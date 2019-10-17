import React from 'react'
import cn from 'classnames'
import Select from 'react-select'
import cs from './SearchFieldsetAdvanced.scss'
import Input from '../../../atom/header/Input'
import { searchFieldsetAdvancedDefaultProps, searchFieldsetAdvancedPropTypes } from './SearchFieldsetAdvanced.props'

const SearchFieldsetAdvanced = ({ className, data }) => {
  /* eslint-disable */
  const [category, setCategory] = React.useState('')
  const [distance, setDistance] = React.useState('')
  /* eslint-enable */

  const { categories, distances } = data

  return (
    <div className={cn(className, cs.searchFieldsetAdvanced)}>
      <Select
        className={cs.group}
        options={categories}
        onChange={selectedOption => {
          setCategory(selectedOption.value)
        }}
        placeholder="Alle groepen..."
      />
      <Input className={cs.postcode} placeholder="Postcode" />
      <Select
        className={cs.distance}
        options={distances}
        onChange={selectedOption => {
          setDistance(selectedOption.value)
        }}
        placeholder="Alle afstanden..."
      />
    </div>
  )
}

SearchFieldsetAdvanced.defaultProps = searchFieldsetAdvancedDefaultProps

SearchFieldsetAdvanced.propTypes = searchFieldsetAdvancedPropTypes

export default SearchFieldsetAdvanced
