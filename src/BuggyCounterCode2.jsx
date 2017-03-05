import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
import cookie from './cookie.svg'

// This is the file with our buggy code showing up for live editing
// first just try clicking add cookie to see what happens
export default class BuggyCounterCode2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cookies: 1,
        }
        this.addCookie = this.addCookie.bind(this)
    }
    
    addCookie() {
      // then put a breakpoint here second
      // right click and select edit breakpoint
      // type "this === window", (check only when it's second cookie added)
        this.setState({
            cookies: this.state.cookies + 1
        })
    }
    
    renderCookies() {
        const { cookies } = this.state
        // put a breakpoint here, then when stopped click "step into"
        const cookieArray = Array(cookies).fill(0).map( i => (
        <li key="i">
          <img src={cookie} height="20" width="20" alt="cookie"/>
          Cookie # {i}
        </li>        
      ))
        return <ul>{cookieArray}</ul>
    }
    
    render() {
        const addCookie = this.addCookie
        return (
        <div>
          Click Me to add a cookie
          <button id="add" onClick={addCookie}>
            Add Cookie
          </button>
          {this.renderCookies()}
        </div>
      )
    }
}