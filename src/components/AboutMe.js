import React, { Component } from 'react';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = { expand: false };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState(prevState => ({
            expand: !prevState.expand
        }))
    }

    render() {
        return (
            <div className="AboutMe">
                
            </div>
        )
    }

    getInitialState() {
        return 
    }
}


export default AboutMe;