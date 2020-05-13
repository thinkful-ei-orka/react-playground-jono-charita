import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        count: 0
        }
    }
    

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    

    render() {
        let message = ''
        if (this.state.count >= 8) {
            message = 'Boom'
        }
        else if (this.state.count % 2 === 0) {
            message = 'tick'
        }
        else {
            message = 'tock'
        }
        
        return <div>
            <p>{message}</p>
        </div>
    }
}

export default Bomb;