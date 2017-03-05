import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
import {
  Appear, 
  // BlockQuote, 
  // Cite, 
  CodePane, 
  // Code, 
  Deck, 
  // Fill, 
  // Fit,
  Heading, 
  // Image, 
  // Layout, 
  ListItem, 
  List, 
  // Quote, 
  Slide, 
  Text,
  // ComponentPlayground
} from 'spectacle'

import BuggyCounterCode from './BuggyCounterCode'
import BuggyCodeString from './BuggyCounterCodeString'
import CounterCode from './CounterCode'
import JSProfileExample from './JSProfileExample'
import GetRandomUser from './GetRandomUser'

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
        <Appear key={item+i}><ListItem key={item+i}>{item}</ListItem></Appear>
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
              <Heading size={3}>Chrome Console</Heading>
              <Text>Ctrl+Shift+J (or Cmd+Opt+J on Mac) to open the DevTools and bring focus to the Console.</Text>
              <Text>console clear will clear the console</Text>                            
              <CodePane lang="js" source='console.clear();' />
              <button onClick={() => console.clear()}>Clear</button>
            </Slide>
            
            <Slide>
              <Heading size={3}>Assert</Heading>
              <CodePane lang="js" source='console.assert(false, "this statement is false")' />
              <Text>This can be useful when you want to only show an error on a certain condition</Text>
              {p('It can be slower so you will want to limit it use with the environment')}              
              <button onClick={() => console.assert(true, 'nothing is rendered')}>Assert True</button>
              <button onClick={() => console.assert(false, 'there\'s a problem in our code')}>Assert False</button>
            </Slide>
            
            <Slide>
              <Heading size={3}>Timer</Heading>
              <CodePane lang="js" source={`
                console.timer(label);
                console.timerEnd(label);
              `} />
              <Text>This can be useful when trying to measure comparative performances of functions</Text>            
              <button onClick={() => console.time('start', 'timer started')}>Start Timer</button>
              <button onClick={() => console.timeEnd('end', 'timer finished')}>End Timer</button>
            </Slide>
            
            <Slide>
              <Heading size={3}>Count</Heading>
              <CodePane lang="js" source={`
                console.count(label);
              `} />
              <Text>Useful when counting number of times a method is called, or maybe render itself.
               You can check if an application is rendering more times than you would like by counting it's operations.</Text> 
              <button onClick={() => console.count('state changed #')}>Count Me</button>
            </Slide>
            
            <Slide>
              <Heading size={3}>Trace</Heading>
              <CodePane lang="js" source={`
                console.count(label);
              `} />
              <Text>You can use tracing to print out the different contexts from which this function was called</Text> 
              <button onClick={() => console.trace('started tracing...')}>Count Me</button>
            </Slide>
            
            <Slide>
              <Heading size={3}>Timeline TimeStamps</Heading>
              <CodePane lang="js" source={`
                console.timeStamp(label);
              `} />
              <Text>Useful for the timeline profiler which we will cover in a bit</Text>              
              <button onClick={() => console.timeStamp('a function was called!')}>Timeline</button>
            </Slide>
            
            <Slide>
              <Heading size={3}>Chrome Timeline Pane</Heading>              
              <Text>In Chrome Dev Tools select the Timeline Pane</Text>              
              <Text>Here we can examine network calls, record activities, investigate call stacks and more!</Text>
              <a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool">Timeline Pane</a>
            </Slide>
            
            <Slide>
              <Heading size={3}>JS Profile</Heading>              
              <Text>In the timeline pane select the "JS Profile" tag. This will let us visualize complex interactions in our form</Text>              
              <JSProfileExample />
            </Slide>
            
            <Slide>
              <Heading size={3}>Timeline Network</Heading>              
              <Text>Click "Network" tag and you can see the network responses sent to and from your application</Text>              
              <GetRandomUser />
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