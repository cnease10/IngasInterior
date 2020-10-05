import React from 'react'
import Yellow from '../Yellow'
import Blue from '../Blue'
import Gray from '../Gray'

class Colors extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
   
    render() {
        function showColors(event) {
            event.preventDefault();
            removeOtherColors();
            //console.log('love me')
            let color = event.target.nextElementSibling
            color.classList.toggle('active')
            
        }
       function removeOtherColors() {
            //console.log('hit')
            let colors = document.querySelectorAll('.hidden')
            for (let i =0; i < colors.length; i++) {
                colors[i].classList.remove('active')
            }
    
        }
        return(
            <React.Fragment>
                <h4 onClick={showColors}>Yellow</h4>
                <section className="hidden"> <Yellow /> </section>
                <h4 onClick={showColors}>Gray</h4>
                <section className="hidden"> <Gray /> </section>
                <h4 onClick={showColors}>Blue</h4>
                <section className="hidden"> <Blue /> </section>
            </React.Fragment>
        )
    }
}

export default Colors