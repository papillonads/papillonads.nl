import React from 'react'
import { string, node } from 'prop-types'
import cn from 'classnames'
import styles from './Badge.scss'

const Badge = ({ className, children }) => {
  const badgeClassList = cn(className, styles.badge)

  return <div className={badgeClassList}>{children}</div>
}

Badge.defaultProps = {
  className: '',
}

Badge.propTypes = {
  className: string,
  children: node.isRequired,
}.isRequired

export default Badge