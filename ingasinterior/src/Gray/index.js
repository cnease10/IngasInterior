import React from 'react'

class Gray extends React.Component {
    render() {
        let gray = ""
        function getGray() {
            gray = ["E0E0E0", "C0C0C0", "A0A0A0", "808080", "606060"]
        }
        getGray()
        return(
            <React.Fragment>
                {gray.map(color => (
                    <section key={color} style={{backgroundColor: `#${color}`}}>{color}</section>
                ))}
            </React.Fragment>
        )
    }
}

export default Gray