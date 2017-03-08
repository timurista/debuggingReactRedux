import React, { Component } from 'react'
import axios from 'axios'
import { reduxForm, Field, initalize } from 'redux-form'
import { connect } from 'react-redux'
import {load as loadInfo } from './load'
import _ from 'lodash'

/* eslint-disable no-console */
class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.loadUser = this.loadUser.bind(this)
    }
    
        
    loadUser() {
        const { initialize } = this.props
        // const { load } = this.props
        const loadme = loadInfo
        // const self = this
        axios.get('https://randomuser.me/api/')
        .then(function (response) {
            console.info(response)
            const user = response.data.results[0]
            initialize({user: user})
        })
        .catch(function (error) {
            console.error(error)
        })        
    }
    
    renderInput({ input, meta }) {
        console.log('USERINFO render input',input, meta)
        return (
        <input id={input.name}
          type="text" 
          onChange={input.onChange} 
          placeholder={input.placeholder} />
      )
    }
    
    render() {
        const { user, initial } = this.props
      // if (!user) return null
        console.assert(user, 'no user? ', this.props)
      // const username = user.username
      // const name = user.name 
        const style = {marginLeft: '20px'}        
        const onSubmit = () => this.props.handleSubmit( values => alert('submitted: '+JSON.stringify(values)))
        return (
          <form onSubmit={null}>
              <div>
                <h4>Random User Getter</h4>
                <button type="button" onClick={this.loadUser}>
                  Get Random User Info
                </button>
              </div>
              <div>
          <label>First Name</label>
          <div>
            <Field name="firstName" component={this.renderInput} type="text" placeholder="First Name"/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field name="lastName" component={this.renderInput} type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div>
          <label>Username</label>
          <div>
            <Field name="username" component={this.renderInput} type="text" placeholder="Last Name"/>
          </div>
        </div>
          </form>
      )
    }
}

let connectedUserInfo = reduxForm({ form: 'userInfo' })(UserInfo)

function mapStateToProps(state) {
    if (!state.userInfo) { return {} }
    return {
        user: state.userInfo.values.user || {} // pull initial values from account reducer
    }
}

// connectedUserInfo = 
export default connect(
  mapStateToProps
  // { load: loadInfo }               // bind account loading action creator
)(connectedUserInfo)