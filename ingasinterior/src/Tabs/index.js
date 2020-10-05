import React from 'react'

function Tabs() {
    let tabs = []
    function grabTabs() {
        tabs = ["tab1", "tab2", "tab3"]
    }
    grabTabs()
    
    let sections = []
    
    function grabContent() {   
        sections = [{content: "I'm tab 1 content"}, {content: "I'm tab 1 content"}, {content: "I'm tab 1 content"}]
        console.log("hi")
        sections.map(section => (
            <section>{section}</section>
        ))  
    }

    return(
        <React.Fragment>
            <nav>
                {tabs.map(tab => (
                    
                        <button onClick={grabContent} key={tab}>{tab}</button>
                        
                    
                    
                ))}
                
            </nav>   
        </React.Fragment>
        )
    
}

export default Tabs


//objects are not valid react children
// {tabs.map(tab => (
//     sections.map(section => (
//         <section>{section}</section>
//     ))
// ))}