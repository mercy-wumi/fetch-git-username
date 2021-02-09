import React from 'react'
import Form from './components/Form'
import CardList from './components/CardList'
import './App.css'

class App extends React.Component {

constructor(){
    super()
    this.state= {
        profile : []
    }
}
addNewProfile = (profileData) => {
    this.setState(prevState => ({
        profile: [...prevState.profile, profileData]
    }))
    console.log('App', profileData)
}
    render() {
        return(
            <div>
                <div className="titleHead">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profile} />
            </div>
        )
    }
}
export default App