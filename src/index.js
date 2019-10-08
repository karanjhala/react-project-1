import React from 'react'
//import ReactDOM, {render} from 'react-dom'
import {render} from 'react-dom'

let bookList = [
    {
        'title': "Make way for Noddy",
        'author' : "Some Amazing Author",
        'pages' :"100"
    },
    {
        'title' : "Thomas the Engine",
        'author' : "Another Amazing Author",
        'pages' : "101"
    },
    {
        'title' : "Famous Five",
        'author' : "Enid Blyton",
        'pages' : "102"
    },
    {
        'title': "Secret Seven",
        'author': "Enid Blyton",
        'pages': "102"
    }
]

/* Composing Components
*/
const Book = ({title,author,pages}) => {
    return (
        <section> 
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages}</p>
        </section> 
    )
}
class Library extends React.Component{
    state = {open:false}

    

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open 
        }))
    }

    render(){
        const {books} = this.props
        return (
            <div>
                <h1>This library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => <Book key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages} />
                )}
            </div>
        )
    }
}
   

render (
    <div>
    <Library books={bookList} />
    </div>,
    document.getElementById('root')
)






/* var style = {
     backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
 }
*/
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

/* Create a React Component 
class Message extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 style={{color:this.props.color}}>Hello Everyone, How's it going? I am a component</h1>
                <h1> {this.props.msg} </h1>
                <p>I'll check back in {this.props.mins} minutes</p>
            </div>
        ) 
    }
}
*/
/*
Component name is supposed to have First letter in capital,
in order to differenciate it from other JSX elements.
    Make sure spacing is correct too

Properties can be used to insert dynamic data in react.
    They can be defined when rendering in ReactDOM.render
    They can be used when creating components

*/

// render( 
//     <Message msg="how are you?" color="blue" mins={10} />,
//     document.getElementById('root')
// )
/*Component Function
let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}
//Arrow function or method
const getPercent = decimal => {
	return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
	return getPercent(total/goal)
}


const SkiDayCounter = ({total, powder, backcountry, goal}) => {
	return (
		<section>
				<div>
					<p>Total Days: {total}</p>
				</div>
				<div>
					<p>Powder Days: {powder}</p>
				</div>
				<div>
					<p>Backcountry Days: {backcountry}</p>
				</div>
				<div>
					<p>Goal Progress: {calcGoalProgress(total, goal)}</p>
				</div>
		</section>
	)
}

render(
	<SkiDayCounter 
		total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal}/>, 
	document.getElementById('root')
)
*/

/*
Component using Class

class SkiDayCounter extends Component {

    //These are arrow functions or methods, which perform a single task
    
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calcGoalProgress = (total,goal) => {
        return this.getPercent(total/goal)
    }
    render() {

    // This line below adds this.props to all the variables in the array so you can skip typing this.props all the time
        const {total, powder, backcountry, goal} = this.props
        return (
            <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Powder Days: {powder}</p>
                </div>
                <div>
                    <p>backcountry Days: {backcountry}</p>
                </div>
                <div>
                    <p>Goal Progress: {this.calcGoalProgress(total,goal)}</p>
                </div>
                
            </section>
        )
    }
}
render (
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}/>,
        document.getElementById('root')
)
*/