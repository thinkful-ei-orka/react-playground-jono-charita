import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    
    static defaultProps = {
        bulletInChamber: 8
    }
    

    handleTriggerButton = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            let number = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: number,
                spinningTheChamber: false
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    } 

    render() {
        let message = '';
        if (this.state.spinningTheChamber === true) {
            message = 'spinning the chamber and pulling the trigger! ...'
        }
        else if (this.state.chamber === this.props.bulletInChamber) {
            message = 'BANG!!!!'
        }
        else {
            message = 'you are safe!'
        }
        console.log(this.props.bulletInChamber)
        console.log(this.state.chamber)
        return <div>
            <p>{message}</p>
            <button onClick={this.handleTriggerButton}>Pull the trigger</button>
        </div>
    }
}

export default RouletteGun;