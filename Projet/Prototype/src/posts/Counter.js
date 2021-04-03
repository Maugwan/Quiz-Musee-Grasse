import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            test:0
        }
    }
    increment = () =>{
        let currentCount = this.state.count
        this.setState({
            count: currentCount + 1
        })
    };
    decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    };

    testNumber = () => {
        let answer = this.state.test
        this.setState({
            test: answer +1
        })
    }

    render() {
        return (
            <div>
                <div className='Selection five' onClick={this.increment}>
                <p>My counter: {this.state.count}</p>
                </div>
                <div className='Selection six' onClick={this.increment}>
                <p>My score: {this.state.count}</p>
                </div>
                <div className="Selection one" onClick={this.increment}></div>
                <div className="Selection two" onClick={this.increment}></div>
                <div className="Selection three" onClick={this.increment}></div>
                <div className="Selection four" onMouseEnter={this.increment}></div>
            </div>
        );
    } 
}

export default Counter;