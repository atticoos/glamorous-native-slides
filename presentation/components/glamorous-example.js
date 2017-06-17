import React from 'react'
import glamorous from 'glamorous'
import {CodePane} from 'spectacle'
import {LiveProvider, LiveEditor, LiveError} from 'react-live'
import {LiveContextTypes} from 'react-live/lib/components/Live/LiveProvider'
import glamorousExampleCode from '../../assets/glamorous-example'

const StyledLiveProvider = glamorous(LiveProvider)({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  maxWidth: '50rem',
  fontSize: '0.5em'
})

const StyledLiveEditor = glamorous(LiveEditor)({})

const HomepageLivePreview = (
  {className, tryIt, ...rest},
  {live: {element: LiveButton}},
) => {
  return (
    <glamorous.Div textAlign="center" marginBottom="30px">
      <LiveButton href="https://github.com/paypal/glamorous" primary>
        GitHub
      </LiveButton>
      <LiveButton href="http://kcd.im/glamorous-help">
        Try it
      </LiveButton>
    </glamorous.Div>
  )
}

HomepageLivePreview.contextTypes = LiveContextTypes

const StyledLivePreview = glamorous(HomepageLivePreview)({
  padding: '1rem',
})


function CodePreview({code, tryIt, scope = {glamorous}}) {
  return (
    <StyledLiveProvider code={(code).trim()} scope={scope}>
      <StyledLivePreview />
      <StyledLiveEditor />
    </StyledLiveProvider>
  )
}

export default () => (
  <CodePreview code={glamorousExampleCode} />
)
