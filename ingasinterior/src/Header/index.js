import { render } from '@testing-library/react'
import React from 'react'
import Nav from '../Nav'
function Header() {

     return (
         <React.Fragment>
             <h1>Inga's Interior</h1>
             < Nav />
         </React.Fragment>
     )
 
} 
export default Header

//functional components don't need render() only return