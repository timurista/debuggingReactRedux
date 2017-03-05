import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React, { Component } from 'react'
import cookie from './cookie.svg'

export default class CounterCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cookies: 1,
        }
        this.addCookie = this.addCookie.bind(this)
    }
    
    addCookie() {        
        this.setState({
            cookies: this.state.cookies + 1
        })
        console.info('cookie added!', this.state.cookies)
    }
    
    renderCookies() {
        const { cookies } = this.state
        const cookieArray = Array(cookies).fill(0).map( (value, i) => (
          <li key={i}><img src={cookie} height="20" width="20"/>Cookie # {i}</li>        
        ))
        return <ul>{cookieArray}</ul>
    }
    
    render() {
        return (
        <div>
          Click Me to add a cookie
          <button id="add" onClick={this.addCookie}>
            Add Cookie
          </button>
          {this.renderCookies()}
        </div>
      )
    }
}