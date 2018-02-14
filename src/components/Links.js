import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

// const urls = [
//     'https://github.com/BonnW',
//     'https://www.linkedin.com/in/patsakorn-wonghansa-75bb8914b/',
// ];

let defaultStyle = {
    width: 50,
    margin: 2,
};

class Links extends Component {
    render() {
        return (
            <div className="Nav">
                <SocialIcon url="https://github.com/BonnW" network="github" style={defaultStyle} />
                <SocialIcon url="https://www.linkedin.com/in/patsakorn-wonghansa-75bb8914b/" network="linkedin" style={defaultStyle} />
                <SocialIcon url="https://www.instagram.com/bonnw/?hl=en" network="instagram" style={defaultStyle} />
            </div>
        )
    }
}

export default Links;