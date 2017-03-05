
const buggyCodeString = `class BuggyCounterCode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cookies: 1,
        }
    }
    
    addCookie() {
        this.setState({
            cookies: this.state.cookies + 1
        })
    }
    
    renderCookies() {
        const { cookies } = this.state
        const cookieArray = Array(cookies).fill(0).map( i => (
        <li key="i"><img src={cookie} height="20" width="20"/>Cookie # {i}</li>        
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
}`

export default buggyCodeString