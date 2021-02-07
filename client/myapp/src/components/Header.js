import React from 'react'

export default function Header(){ 
    //exports this component to be used in APP.js
    // Div className is a Card with bootstrap styling
    //bg- changes the header color
    //text light changes text color
    // H1 also uses bootstrap with an Img tag from Fontawesome to
    //bring in th clipboard icon. The span changes color of "MERN" to black

    return(
        <div className="card bg-info text-center text-light rounded-0"> 
                <h1 className="display-4">
                    <i className="fas fa-clipboard-list mr-3"></i>
                    <span className="text-dark mr-3">MERN</span>
                    ToDo List
                </h1>
        </div>
    )
}