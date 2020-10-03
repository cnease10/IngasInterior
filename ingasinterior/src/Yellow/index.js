import React from 'react'
import { Advertisement, Tab } from 'semantic-ui-react'
class Yellow extends React.Component {
    render() 
   
    {
        let yellow = ""
        function getYellow() {
            yellow = ['FFFFCC', 'FFFF99', 'FFFF66', 'FFFF33', 'FFFF00'];
        }
        getYellow()
        
        return(
            <React.Fragment>
                <p>I'm yellow</p>
                {/* {yellow} */}
                {yellow.map(color => (
                    
                    <section key={color} style={{backgroundColor: `#${color}` }}>{color}</section>
                    
                ))}
                
                {/* {yellow.map(color => (<Advertisement unit='small rectangle' test='Small Rectangle'/>))}
                <Advertisement unit='small rectangle' test='Small Rectangle' /> */}
            </React.Fragment>
        )
    }
}

export default Yellow