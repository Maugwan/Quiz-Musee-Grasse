import { Component } from "react";

function Counter {

    const increment = () =>{
        let currentCount = this.state.count
        this.setState({
            count: currentCount + 1
        })
    };
    const decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    };

    const testNumber = () => {
        let answer = this.state.test
        this.setState({
            test: answer +1
        })
    }

 
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

export default Counter;