import React from 'react'
import Yellow from '../Yellow'

class Colors extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    showColors(event) {
        event.preventDefault();
        console.log('love me')
        let color = event.target.nextElementSibling
        color.classList.toggle('active')
        
    }
    removeOtherColors() {
        
    }
    render() {
        return(
            <React.Fragment>
                <h4 onClick={this.showColors}>Yellow</h4>
                <section className="hidden"><Yellow /></section>
                <h4 onClick={this.showColors}>Gray</h4>
                <section></section>
                <h4 onClick={this.showColors}>Black</h4>
                <section></section>
            </React.Fragment>
        )
    }
}

export default Colors