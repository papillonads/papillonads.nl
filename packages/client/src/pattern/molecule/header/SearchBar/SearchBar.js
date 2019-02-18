import React from 'react'
import { shape, string } from 'prop-types'
import cn from 'classnames'
import styles from './SearchBar.scss'

const SearchBar = ({ className }) => {
  const searchBarClassList = cn(className, styles.searchBar)

  return <div className={searchBarClassList}>SearchBar</div>
}

SearchBar.defaultProps = {
  className: '',
}

SearchBar.propTypes = shape({
  className: string,
}).isRequired

export default SearchBar
