import React from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'

const NoMatch = ({ className, location }) => {
  const noMatchClassList = cn(className)

  return (
    <div className={noMatchClassList}>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

NoMatch.defaultProps = {
  className: '',
}

NoMatch.propTypes = {
  className: string,
  location: object.isRequired,
}

export default NoMatch
