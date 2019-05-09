import React from 'react'
import Links from './Links'
import homePageData from '../../../../../../server/src/data/page/home'

const defaultRender = <Links data={homePageData.header.navigationBar.links} />

export { defaultRender }
