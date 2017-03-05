import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
// import { Spectacle, Deck } from 'spectacle'
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
// import createTheme from 'spectacle/lib/themes/default'

import CodeSlide from 'spectacle-code-slide'
// import shiaLabeoufMagicGif from './shiaLabeoufMagic.gif'

// use preloader for images
// import preloader from 'spectacle/lib/utils/preloader'


// const code = function() { console.log('error')}

// const theme = createTheme({
//     primary: 'Montserrat',
// })

export function ul(items, delimiter='-') {
    const li = items
      .split(delimiter)
      .filter( v=> v.length)
      .map( item => (
        <Appear><ListItem>{item}</ListItem></Appear>
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
            
            <Slide>
              <Heading size={3}>Chrome Satements</Heading>
              <CodePane lang="jsx" source='console.assert(false, "this statement is false")' />
              <Text>This will only log to the console if the statement is false.</Text>
              {p('It can be slower so you will want to limit it use with the environment')}              
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
    //     return (
    //   <Spectacle>
    //     <Deck transition={[]} transitionDuration={0} progress="bar">
    //       <CodeSlide
    //         transition={[]}
    //         lang="js"
    //         code={code}
    //         ranges={[
    //           { loc: [0, 270], title: 'Walking through some code' },
    //           { loc: [0, 1], title: 'The Beginning' },
    //           { loc: [1, 2] },
    //           { loc: [1, 2], note: 'Heres a note!' },
    //           { loc: [2, 3] },
    //           { loc: [4, 7] },
    //           { loc: [8, 10] },
    //         ]}/>
    //     </Deck>
    //   </Spectacle>
    // )
    }
}