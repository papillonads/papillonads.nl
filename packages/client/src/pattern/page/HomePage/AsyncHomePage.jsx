import React from 'react'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

const LazyHomePage = React.lazy(() => import('./HomePage'))

export const AsyncHomePage = () => (
  <React.Suspense fallback={null}>
    <LazyHomePage />
  </React.Suspense>
)

AsyncHomePage.defaultProps = homePageDefaultProps

AsyncHomePage.propTypes = homePagePropTypes
