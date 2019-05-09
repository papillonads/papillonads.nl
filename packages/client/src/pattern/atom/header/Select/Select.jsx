import React from 'react'
import cn from 'classnames'
import uuidv1 from 'uuid/v1'
import { selectDefaultProps, selectPropTypes } from './Select.props'

const Select = ({ className, placeholder, items }) => {
  const selectClassList = cn(className)

  return (
    <React.Fragment>
      <select className={selectClassList}>
        <option key={uuidv1()} value={placeholder}>
          {placeholder}
        </option>
        {items.map(item => (
          <option key={uuidv1()} value={item.text}>
            {item.text}
          </option>
        ))}
      </select>
    </React.Fragment>
  )
}

Select.defaultProps = selectDefaultProps

Select.propTypes = selectPropTypes

export default Select
