import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class BuggyForm extends Component {
    renderInputField(name, label) {
        return (
        <div>
          <label>{label}</label>
          <div>
            <Field name={name} component="input" type="text" placeholder={label}/>
          </div>
        </div>
      )
    }
    submit(values) {
        if (!values.city) { 
            // throw new Error('INTERNAL FAULT')
            alert('Submit Failed: You must enter a valid city')
            return null
        }
        return sleep(1000) // simulate server latency
        .then(() => {            
            alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
            
        })
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
          <form onSubmit={handleSubmit(this.submit)}>
            <h2>Search by</h2>
            <p>
              Notice that if you enter a valid city, the submission will fail.
              Why is this?
            </p>
            {this.renderInputField('zip', 'Zip')}
            {this.renderInputField('cityName', 'City')}
            {this.renderInputField('state', 'State')}
            <div>
              <button type="submit" disabled={pristine || submitting}>Submit</button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
          </form>
        )
    }
}

export default reduxForm({
    form: 'buggyForm'  // a unique identifier for this form
})(BuggyForm)