import React, { Component } from 'react'
import './../style/Navbar.css'

class Navbar extends Component {
    constructor(props){
        super(props)
    }




    handleLinkedin = () => {
        window.open("http://www.linkedin.com/in/jesse-maretz")
    }
    handleGithub = () => {
        window.open("http://www.github.com/sheckjess")
    }

    handleResume = () => {
        window.open("https://drive.google.com/file/d/1RJSNlAqLiX0vkOnsKz5URLLsh4kF5cqT/view?usp=sharing")
    }




    render() { 
        return (
            <div>
                <button
                    variant="contained"
                    color="primary"
                    onClick={this.handleLinkedin}>
                    LinkedIn
                </button>
                <button
                    variant="contained"
                    color="primary"
                    onClick={this.handleGithub}>
                    GitHub
                </button>

                <button
                    variant="contained"
                    color="primary"
                    onClick={this.handleResume}>
                    Resume
                </button>

            </div>
        )
    }
}
 
export default Navbar;