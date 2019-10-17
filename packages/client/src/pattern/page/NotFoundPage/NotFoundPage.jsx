import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import NotFoundTemplate from '../../template/NotFoundTemplate'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.props'

const NotFoundPage = ({ className, location }) => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return (
      <div className={className}>
        <NotFoundTemplate data={data.pages.pages.find(page => page.info.id === 'not-found')} location={location} />
      </div>
    )
  }

  return null
}

NotFoundPage.defaultProps = notFoundPageDefaultProps

NotFoundPage.propTypes = notFoundPagePropTypes

export default NotFoundPage
