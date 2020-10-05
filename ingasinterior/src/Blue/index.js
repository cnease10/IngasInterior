import { getByDisplayValue } from '@testing-library/react'
import React from 'react'

class Blue extends React.Component {
    render() 
    {
    let blue = []
    function getBlue() {
        blue = ["CCFFFF", "99FFFF", "66FFFF", "33FFFF", "00FFFF"]
    }
    getBlue();
        return(
            <React.Fragment>
                {blue.map(color => (
                    <section key={color} style={{backgroundColor: `#${color}`}}>{color}</section>
                ))}
            </React.Fragment>
        )
    }
}

export default Blue