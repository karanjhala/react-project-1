import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}
/* Without JSX
    const title= React.createElement(
//     'ul',
//     {id: 'title', className: 'header', style:style},
//     React.createElement('li',
//     {},
//     'item on our list'
//     )
    )


ReactDOM.render(
    title,
    document.getElementById('root')
)
*/

/* This is rendering with JSX */
ReactDOM.render (
    <div style={style}> 
        <h1>Hello World!</h1>
        <p> You Made it to using JSX!!</p>
    </div>,
    document.getElementById('root')
)