/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import NotFoundTemplate from './NotFoundTemplate'

const props = {
  page: {
    id: 'not-found',
    name: 'some-name',
  },
  location: {
    pathname: 'some-path-name',
  },
}

const defaultRender = <NotFoundTemplate {...props} />

export { defaultRender }
/* eslint-enable react/jsx-props-no-spreading */
