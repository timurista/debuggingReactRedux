import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
// import { Spectacle, Deck } from 'spectacle'
import {
  // Appear, 
  // BlockQuote, 
  // Cite, 
  // CodePane, 
  // Code, 
  // Deck, 
  // Fill, 
  // Fit,
  Heading, 
  Image, 
  // Layout, 
  ListItem, 
  List, 
  // Quote, 
  Slide, 
  Text,
  // ComponentPlayground
} from 'spectacle'

import ul from '../Presentation'
import traditional from './traditionalApp.png'
import react from './reactApp.png'

function s(children) {
    return (
    <Slide>
      {children}
    </Slide>
  )
}

export class ReactIntro extends Component { 
    render() {
        return (
      <Slide>
        <Heading size={3}>How React Works</Heading>
        <List>
          <ListItem>Think of React as the View layer only</ListItem>
          <ListItem>It virtualizes the DOM; saves time rebuilding</ListItem>
          <ListItem>Introduces state and props to manage DOM</ListItem>
        </List>
      </Slide>
    )
    }
}

export class HowDiffers extends Component { 
    render() {
        return (
      <Slide>
        <Heading size={3}>How React Differs</Heading>
        <Text>Traditional Frameworks like JQuery update
        the DOM on every change, which can sometimes 
        cause unresponsive behavior</Text>
        <Image src={traditional} alt="traditional app"/>
      </Slide>
    )
    }
}

export class ReactDiffers extends Component { 
    render() {
        return (
      <Slide>
        <Heading size={3}>How React Differs</Heading>
        <Text>React Abstracts the DOM ensuring that updates/events
        only happen when they actually need to modify the DOM</Text>
        <Image src={react} alt="react app" width="80%"/>
      </Slide>
    )
    }
}


export default {
    ReactIntro,
    HowDiffers,  
    ReactDiffers
}