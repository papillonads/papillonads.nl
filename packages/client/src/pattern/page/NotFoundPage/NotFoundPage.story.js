import { storiesOf } from '@storybook/react'
import { notFoundPageDefault } from './NotFoundPage.render'
import { getInfo } from '../../../../../../.storybook/utility'

const notFoundPageDefaultInfo = getInfo('NotFoundPage default')

storiesOf('Patttern/Page/NotFoundPage', module).add(
  notFoundPageDefaultInfo.text,
  () => notFoundPageDefault,
  notFoundPageDefaultInfo.parameters,
)
