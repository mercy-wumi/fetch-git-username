import React from 'react'

const axios = require('axios');
class Form extends React.Component {
        constructor(){
            super()
            this.state={
                userName: ''
            }
        }
    handleSubmit= async (event) => {
        event.preventDefault()
        const resp= await
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data);
        this.setState({userName:''})
    }
    handleChange= (event) =>{
        this.setState({
            userName: event.target.value
        })
    }
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="userName"
            onChange={this.handleChange}
            value={this.state.userName}
            placeholder="GitHub username" 
            />
        <button>Add card</button>
    	</form>
    );
  }
}

export default Form
