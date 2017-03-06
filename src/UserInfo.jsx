import React, { Component } from 'react'
import axios from 'axios'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import {load as loadInfo } from './load'

/* eslint-disable no-console */
class UserInfo extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     users: []
        // }
        this.loadUser = this.loadUser.bind(this)
    }
    
    loadUser() {
        const { load } = this.props
        // const self = this
        axios.get('https://randomuser.me/api/')
        .then(function (response) {
            console.info(response)
            const user = response.data.results[0]
            load({user: user})
        })
        .catch(function (error) {
            console.error(error)
        })        
    }
    
    
    renderUserForm() {
        const { user, handleSubmit } = this.props
        if (!user) return null
        
        const { name, username } = user
        const style = {marginLeft: '20px'}
        return (
          <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <div>
            <Field name="username" component="input" type="text" placeholder="First Name"/>
          </div>
            <div>
        <label>First Name</label>
        <div>
          <Field name="name.first" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="name.last" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="username" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
          </form>
        )
        // const usersInfo = users.map( (user, i) => (
        //   <li 
        //     key={i} 
        //     style={
        //     {
        //         display: 'flex', 
        //         justifyContent: 'space-between',
        //         marginBottom: '20px'
        //     }}
        //   >
        //     <img src={user.picture.thumbnail} alt={user.username} />
        //     <span style={style}>{`${user.name.last}, ${user.name.first}`}</span>
        //     <span style={style}>{user.username}</span>
        //     <span style={style}>{user.email}</span>
        //   </li>        
        // ))
        // return <ul>{usersInfo}</ul>
    }
    
    render() {
        return (
        <div>
          <h4>Random User Getter</h4>
          <button onClick={this.loadUser}>
            Get Random User Info
          </button>
          {this.renderUserForm()}
        </div>
      )
    }
}

let connectedUserInfo = reduxForm({ form: 'userInfo' })(UserInfo)

connectedUserInfo = connect(
  state => ({
      initialValues: state.user // pull initial values from account reducer
  }),
  { load: loadInfo }               // bind account loading action creator
)(connectedUserInfo)

export default connectedUserInfo