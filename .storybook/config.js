import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { withOptions } from '@storybook/addon-options'
import { version } from '../lerna.json'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from '../packages/client/src/graphql/client'

const setup = () => {
  addDecorator(withInfo)
  addDecorator(withNotes)
  addDecorator(
    withOptions({
      name: `Papillon Ads v${version}`,
      url: 'https://github.com/papillonads/papillonads.nl',
      showAddonPanel: true,
      addonPanelInRight: true,
    }),
  )

  addDecorator(story => <div className="p-4">{story()}</div>)

  addDecorator(story => (
    <BrowserRouter>
      <ApolloProvider client={client}>{story()}</ApolloProvider>
    </BrowserRouter>
  ))

  const contexts = [require.context('../packages/client/src', true, /story*\.js$/)]

  const loadStories = () => {
    require('./welcomeStory')
    contexts.forEach(context => {
      context
        .keys()
        .filter(key => !key.includes('node_modules'))
        .forEach(context)
    })
  }

  configure(loadStories, module)
}

setup()

export default setup