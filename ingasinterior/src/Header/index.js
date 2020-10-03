import { render } from '@testing-library/react'
import React from 'react'

function Header() {

     return (
         <React.Fragment>
             <h1>Inga's Interior</h1>
         </React.Fragment>
     )
 
} 
export default Header

//functional components don't need render() only return