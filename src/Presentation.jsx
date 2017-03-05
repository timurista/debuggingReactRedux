import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
import {
  Appear, 
  // BlockQuote, 
  // Cite, 
  CodePane, 
  Code, 
  Deck, 
  // Fill, 
  // Fit,
  Heading, 
  // Image, 
  // Layout, 
  ListItem, 
  List, 
  Quote, 
  Slide, 
  Text,
  ComponentPlayground
} from 'spectacle'

import BuggyCounterCode from './BuggyCounterCode'
import BuggyCodeString from './BuggyCounterCodeString'
import CounterCode from './CounterCode'
import { ReactIntro, HowDiffers, ReactDiffers } from './slides/ReactSlides'

// import CodeSlide from 'spectacle-code-slide'
// import shiaLabeoufMagicGif from './shiaLabeoufMagic.gif'

// use preloader for images
// import preloader from 'spectacle/lib/utils/preloader'

// const theme = createTheme({
//     primary: 'Montserrat',
// })

export function ul(items, delimiter='-') {
    const li = items
      .split(delimiter)
      .filter( v=> v.length)
      .map( (item,i) => (
        <Appear><ListItem key={item+i}>{item}</ListItem></Appear>
      ))
    return <List>{li}</List>
}

export function p(text) {
    return <Appear><Text>{text}</Text></Appear>
}


export default class Presentation extends Component {
    render() {
        return (
          <Deck 
            transition={['slide']} 
            transitionDuration={500} 
            progress="bar"
          >
            <Slide>
              <Heading size={1} fit caps>Speedy Debugging</Heading>
              <Text>Speedy Debugging, or how to improve your workflow with chrome tools</Text>
            </Slide>
            <Slide>
              <Heading size={3}>How To Imrpove Debugging</Heading>
              {ul(`-Console Statements
                   -Sources Pane
                   -React Tools
                   -Redux Tools` )}              
            </Slide>
            <ReactIntro />
            <HowDiffers />
            <ReactDiffers />
            <Slide>
              <Heading size={3}>React State and Props</Heading>
              <Text>React handles this by using components which have state and props</Text>
              <Text>State is the data available to the current component, and can be manipulaetd within</Text>
              <Text>Props are data fed into the component from somewhere else.</Text>
            </Slide>
            <Slide>
              <Heading size={3}>Lesser Used Console Satements</Heading>
              <CodePane lang="js" source='console.assert(false, "this statement is false")' />
              <Text>This can be useful when you want to only show an error on a certain condition</Text>
              {p('It can be slower so you will want to limit it use with the environment')}              
              <button id="button" onClick={() => console.assert(true, 'nothing is rendered')}>Assert True</button>
              <button id="button" onClick={() => console.assert(false, 'there\'s a problem in our code')}>Assert False</button>
            </Slide>
            
            <Slide>
              <Heading size={2}>Buggy Cookie</Heading>
              <BuggyCounterCode />
            </Slide>
            <Slide>
            <CodePane
              lang="jsx"
              source={BuggyCodeString}              
            />
å            </Slide>
            <Slide>
              <Heading size={2}>Correct Cookie Code</Heading>
              <CounterCode />
            </Slide>
          </Deck>
        )
    }
}