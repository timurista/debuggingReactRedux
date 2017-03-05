import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
import cookie from './cookie.svg'
import { autobind } from 'core-decorators'

export default class JSProfileExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 1,
            ticks: 0,
        }
        this.click = this.click.bind(this)
        this.tick = this.tick.bind(this)
    }
    
    click() {
        console.timeStamp('clicked the clicker!')        
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    
    tick() {
        console.timeStamp('ticked the ticker!')        
        this.setState({
            ticks: this.state.ticks + this.state.clicks
        })
        this.click()
    }
    
    
    renderClicksAndTicks() {
        const { clicks, ticks } = this.state
        // const cookieArray = Array(cookies).fill(0).map( (value, i) => (
        //   <li key={i}>{ticks} +</li>        
        // ))
        return <div>clicks: {clicks}, ticks: {ticks}</div>
    }
    
    render() {
        const {clicks} = this.state
        return (
        <div>
          <button onClick={this.click}>
            First Click me
          </button>
          <button onClick={this.tick}>
            Now Click me
          </button>
          {this.renderClicksAndTicks()}
        </div>
      )
    }
}