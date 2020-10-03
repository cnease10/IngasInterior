import { render } from '@testing-library/react'
import React from 'react'
import Nav from '../Nav'
import {Header} from 'semantic-ui-react'
function HeaderComp() {

     return (
         <React.Fragment>
            <Header>
            <h1>Inga's Interior</h1>
            < Nav />
            </Header>
             
             
         </React.Fragment>
     )
 
} 
export default HeaderComp

//functional components don't need render() only return