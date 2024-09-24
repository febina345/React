import {Component} from 'react'

// function Header(props){
//     return(<h1>Hello Here is {props.data} </h1>)
// }

class Header extends Component {
    render(){
        return(<h1>Hello I am {this.props.data}</h1>)
    }
}

export default Header