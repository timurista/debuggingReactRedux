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
    
    renderInput({ input, meta, placeholder, values }) {
        console.log('USERINFO render input', values)
        // let value = "";
        // if (value)
        const value = _.pick(values, [`user.${input.name}`, `${input.name}`, ''])
        console.log(input.name, value)
        
        return (
          <input 
            id={input.name}
            type="text" 
            onChange={input.onChange} 
            placeholder={placeholder} 
          />
        )
    }
    
    render() {
        const { values } = this.props
      // if (!user) return null
        // console.assert(values, 'no values? ', this.props)
      // const username = user.username
      // const name = user.name 
        const style = {marginLeft: '20px'}        
        const onSubmit = () => this.props.handleSubmit( values => alert('submitted: '+JSON.stringify(values)))
        return (
          <form onSubmit={null}>
              <div>
                <h4>Random User Getter</h4>
                <button type="button" onClick={this.loadUser}>
                  Load User
                </button>
              </div>
              <div>
          <label>First Name</label>
          <div>
            <Field name="name.first" component={this.renderInput} values={values} type="text" placeholder="First Name" />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field name="name.last" component={this.renderInput} values={values} type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div>
          <label>Username</label>
          <div>
            <Field name="login.username" component={this.renderInput} values={values} type="text" placeholder="Username"/>
          </div>
        </div>
          </form>
      )
    }
}

let connectedUserInfo = reduxForm({ 
    form: 'userInfo',
    enableReinitialize : true
})(UserInfo)

function mapStateToProps(state) {
    if (!state.userInfo) { return {...state.values} }
    return {
        ...state.userInfo.values || {} // pull initial values from account reducer
    }
}

const connectedInfoTest = connect(
  mapStateToProps
  // { load: loadInfo }               // bind account loading action creator
)(connectedUserInfo)

console.group('connected user info')
console.log('CONNECTED USER INFO>', connectedInfoTest)
console.groupEnd()
// connectedUserInfo = 
export default connectedInfoTest