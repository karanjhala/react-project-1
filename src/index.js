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

/* This is rendering with JSX 
ReactDOM.render (
    <div style={style}> 
        <h1>Hello World!</h1>
        <p> You Made it to using JSX!!</p>
    </div>,
    document.getElementById('root')
)
*/
/* Create a React Component */
class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Everyone, How's it going? I am a component</h1>
            </div>
        ) 
    }
}
/*
Component name is supposed to have First letter in capital,
in order to differenciate it from other JSX elements.

Make sure spacing is correct too


*/

ReactDOM.render( 
    <Message />,
    document.getElementById('root')
)
