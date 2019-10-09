import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'

class Library extends React.Component{
    
     state = {
         open:true,
         freeBookmark:true,
         hiring:true,
         data:[],
         loading:false
     }

     componentDidMount() {
         console.log("The Component is now mounted!")
         this.setState({loading:true})
         fetch('https:hplussport.com/api/products/order/price/sort/asc/qty/1')
             .then(data => data.json())
             .then(data => this.setState({data , loading:false}))
     }
     componentDidUpdate() {
         console.log("The Component just updated!")
     }

     toggleOpenClosed = () => {
         this.setState(prevState => ({
             open: !prevState.open,
             freeBookmark: !prevState.open 
         }))
     }

     render(){
         const {books} = this.props
         return (
             <div>
                 {this.state.hiring ? <Hiring /> : <NotHiring />}
                 {this.state.loading
                     ? "loading...."
                     : <div>
                         {this.state.data.map(product => {
                             return(
                                 <div key={product.id}>
                                     <h3> Library product of the week!</h3>
                                     <img src={product.image} height={100} alt={product.name} />
                                 </div>
                             )
                         })}
                         </div>
                 }
                 <h1>This library is {this.state.open ? 'open' : 'closed'}</h1>
                 <button onClick={this.toggleOpenClosed}>Change</button>
                 {books.map(
                     (book, i) => <Book key={i}
                         title={book.title}
                         author={book.author}
                         pages={book.pages}
                         freeBookmark={this.state.freeBookmark} />
                 )}
             </div>
         )
     }
 }
   
Library.propTypes = {
    books: PropTypes.array
}
Book.propTypes = {
    title:PropTypes.string,
    author:PropTypes.string,
    pages:PropTypes.number,
    freeBookmark:PropTypes.bool
}

export default Library