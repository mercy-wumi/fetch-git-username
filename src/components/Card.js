import React from 'react'

class Card extends React.Component {

    render() {
        const profile = this.props
        return(
            <div>
                <div className="profile">
                    <img src={profile.avatar_url} alt="profile" className="pix"/>
                    <div className="info">
                        <div className="name">{profile.name}</div>
                        <div className="company">{profile.company}</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Card