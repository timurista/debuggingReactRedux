import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
import {
  Appear, 
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
} from 'spectacle'

import BuggyCounterCode from './BuggyCounterCode'
import BuggyCounterCode2 from './BuggyCounterCode2'
import CounterCode from './CounterCode'
import JSProfileExample from './JSProfileExample'
import GetRandomUser from './GetRandomUser'
import UserInfo from './UserInfo'
import BuggyForm from './BuggyForm'

import { ReactIntro, HowDiffers, ReactDiffers } from './slides/ReactSlides'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from 'redux-form'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
              <Heading size={3}>Groups and Styling</Heading>
              <CodePane lang="js" source={`
        console.group('Group Begin');
        console.log('%cThis will be formatted with border and blue text', 'color: blue; border: 1px solid black;');
        console.log('%cThis will be formatted with border and red text', 'color: red; border: 2px solid black;');
        console.groupEnd();
        
        console.groupCollapsed('Group Collapsed');              
        console.log('%cThis will be formatted with green text', 'color: green; ');
        console.log('%cThis will be formatted with blue border and bigger font', 'color: #86CC00; background-color: blue; font-size: 20px; padding: 3px;');
        console.groupEnd();
              `} />
              <Text>Useful when styling and organizing output from the console.</Text> 
              <button onClick={() => {
                  console.group('Group Begin')
                  console.log('%cThis will be formatted with border and blue text', 'color: blue; border: 1px solid black;')
                  console.log('%cThis will be formatted with border and red text', 'color: red; border: 2px solid black;')
                  console.groupEnd()
                  
                  console.groupCollapsed('Group Collapsed')              
                  console.log('%cThis will be formatted with green text', 'color: green; ')
                  console.log('%cThis will be formatted with blue border and bigger font', 'color: #86CC00; background-color: blue; font-size: 20px; padding: 3px;')
                  console.groupEnd()
              }
            }>Test Group and Styles</button>
            </Slide>
            
            
            <Slide>
              <Heading size={3}>Trace</Heading>
              <CodePane lang="js" source={`
                console.trace('started tracing...');
              `} />
              <Text>You can use tracing to print out the different contexts from which this function was called</Text> 
              <button onClick={() => console.trace('started tracing...')}>Trace Me</button>
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
              <Text>Click "Network" tab and you can see the network responses sent to and from your application</Text>              
              <GetRandomUser />
            </Slide>
            
            <Slide>
              <Heading size={3}>Chrome Sources</Heading>              
              <Text>Click Sources pane and type command + p (Mac) or control + p (Windows)</Text>              
              <Text>We are going to explore conditional breakpointing and other cool features of the debugger</Text>
            </Slide>

            
            <Slide>
              <Heading size={3}>Buggy Cookie Code</Heading>
              <Text>Press Command P and type "BuggyCounterCode"</Text>
              <BuggyCounterCode />
            </Slide>
              
            <Slide>
              <Heading size={3}>What's the problem with this?</Heading>
              <Text>In javascript, the context of this can switch depending on where the function or object is called from</Text>              
              <Text>Unlike java or traditional OOP, functions are objects and inherit the global context when instantiated</Text>
              <Text>When you click on "addCookie" that function is a living object in the window space, and it's reference is the global window object. This is a "feature" of Jsx code.</Text>
            </Slide>
            
            <Slide>
              <Text>One way to fis our problem is to bind the context of this to the class it is called in, within the constructor.</Text>
              <Text>Binding is a feature of javascript that allows you to assign context and even values, freezing a function ie enforcing encapsulation</Text>
              <CodePane
                lang="jsx"
                source={`
                  constructor(props) {
                    ...
                    this.addCookie = this.addCookie.bind(this);
                    this.addCookie = this.addCookie.bind(this, 3); //would force the value of the argument to be 3 always
                  }
                `}              
              />
            </Slide>
              
            <Slide>
              <Heading size={3}>Buggy Cookie Code 2</Heading>
              <Text>Press Command P and type "BuggyCounterCode2." Did we fix it?</Text>              
              <BuggyCounterCode2 />
            </Slide>
            
            <Slide>
              <Heading size={3}>Items and keys in React</Heading>
              <Text>React uses a key value to distinguish rendering its list items</Text>              
              <Text>It needs that key in referencing it from the virtual DOM. To help it, we need to set the key explicitly to something different each time (index number)</Text>
              <Text>Our code uses the string of i, but it was a typo - it should be in brackets </Text>
            </Slide>

            <Slide>
              <Heading size={3}>Correct Cookie Code</Heading>
              <CounterCode />
            </Slide>
            
            <Slide>
              <Heading size={3}>React Tools</Heading>
              <Text>If you haven't already, add React and Redux Developer Tools to Chrome Extensions</Text>              
              <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">
              Found here</a>
              <Text>React tools can help us manipulate and test our code in real time</Text>
            </Slide>
            
            <Slide>
              <Heading size={3}>Cookie Code Through React Tools</Heading>
              <Text>Click on the cookie code button then open React pane in Chrome dev.</Text>
                <Text>This will open onto the object</Text>
              <Text>You can change things like props and state from this tab, then watch and see how it behaves...</Text>
              <CounterCode />
            </Slide>
            
            <Slide>
              <Heading size={3}>Redux Store</Heading>
              <Text>React is one-way dataflow, so if you want to modify a component's internal state you need to send it props.</Text>
              <Text>But this get's tricky if you want to modify the state of another component that is not a direct parent.</Text>
              <Text>Enter Redux Store: a database to connect any component to the flow of virtual dom updates.</Text>
            </Slide>
            
            <Slide>
              <Heading size={3}>Redux Store</Heading>
              <img src="https://image.slidesharecdn.com/reactreduxintroduction-151124165017-lva1-app6891/95/react-redux-introduction-33-638.jpg?cb=1448383914" alt="redux store" />
            </Slide>
            
            <Slide>
              <Heading size={3}>Redux Tools</Heading>
              <Text>Let's look at the store by going to the Redux Pane. now it's empty</Text>
            </Slide>
            
            <Slide>
              <Heading size={3}>Redux Tools on a Simple Form</Heading>
              <Text>The form below will load user information using redux and redux-form. It's failing though, why?</Text>
              <Provider store={store}>
                <UserInfo />
              </Provider>
            </Slide>
            
            <Slide>
              <Heading size={3}>Another Buggy Form</Heading>
              <Text>The form below will load user information using redux and redux-form. It's failing though, why?</Text>
              <Provider store={store}>
                <BuggyForm />
              </Provider>
            </Slide>
            
            <Slide>
              <Heading size={3}>Summary</Heading>
              <Text>You can use chrome dev tools to do efficient console tests</Text>
              <Text>You can use chrome sources and debugger to watch a file and inspect route cause</Text>
              <Text>You can use other third party libraries to verify redux store properties and component properties</Text>
              <Text>Questions?</Text>
            </Slide>
            
          </Deck>
        )
    }
}