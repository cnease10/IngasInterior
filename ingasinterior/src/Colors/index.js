import React from 'react'
import Yellow from '../Yellow'

class Colors extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                <h4>Yellow</h4>
                <Yellow />
                <h4>Gray</h4>
                <section></section>
                <h4>Black</h4>
                <section></section>
            </React.Fragment>
        )
    }
}

export default Colors