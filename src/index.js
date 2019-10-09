import React from 'react'
import {render} from 'react-dom'
import Library from './Library'


 let bookList = [
     {
         'title': "Make way for Noddy",
         'author' : "Some Amazing Author",
         'pages' : 100
     },
     {
         'title' : "Thomas the Engine",
         'author' : "Another Amazing Author",
         'pages' : 101
     },
     {
         'title' : "Famous Five",
         'author' : "Enid Blyton",
         'pages' : 102
     },
     {
         'title': "Secret Seven",
         'author': "Enid Blyton",
         'pages': 103
     }
 ]


 
 render (
     <div>
     <Library books={bookList} />
     </div>,
     document.getElementById('root')
 )

// /*Forms with React */
// class FavoriteColorForm extends React.Component {
//     state = {
//         value: ''
//     }
//     newColor = e =>
//         this.setState({value:e.target.value})

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault()
//     }
//     render() {
//         return(
//             <form onSubmit={this.submit}>
//                 <label>
//                     <input 
//                         type="color"
//                         onChange={this.newColor}/>
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// render (
//     <FavoriteColorForm />,
//     document.getElementById('root')
// )





