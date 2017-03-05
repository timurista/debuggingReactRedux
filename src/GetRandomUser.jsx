import React, { Component } from 'react'
import axios from 'axios'

/* eslint-disable no-console */
export default class GetRandomUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.getUser = this.getUser.bind(this)
    }
    
    getUser() {
        let self = this
        axios.get('https://randomuser.me/api/')
        .then(function (response) {
            console.info(response)
            const user = response.data.results[0]
            self.setState({
                users: [ ...self.state.users, user]
            })
        })
        .catch(function (error) {
            console.error(error)
        })
        
    }
    
    
    renderUsers() {
        const { users } = this.state
        const style = {marginLeft: '20px'}
        const usersInfo = users.map( (user, i) => (
          <li 
            key={i} 
            style={
            {
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '20px'
            }}
          >
            <img src={user.picture.thumbnail} alt={user.username} />
            <span style={style}>{`${user.name.last}, ${user.name.first}`}</span>
            <span style={style}>{user.username}</span>
            <span style={style}>{user.email}</span>
          </li>        
        ))
        return <ul>{usersInfo}</ul>
    }
    
    render() {
        return (
        <div>
          <h4>Random User Getter</h4>
          <button onClick={this.getUser}>
            Get Random User
          </button>
          {this.renderUsers()}
        </div>
      )
    }
}