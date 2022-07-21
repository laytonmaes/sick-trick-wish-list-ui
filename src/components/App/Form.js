import React, {Component} from "react";

class Form extends Component {
    constructor() {
        super();
        this.state= {
            name: "",
            stance: "butter",
            obstacle:"",
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleStance = event => {
        this.setState(prevState => {
            return {...prevState, stance:event.target.value}
        })
    }
    handleObstacle = event => {
        this.setState(prevState => {
            return {...prevState, obstacle:event.target.value}
        })
    }

    render() {
        return (
            <form>
                 <input
                type="text"
                placeholder="name"
                name="name"
                value={this.state.name}
                onChange={event => this.handleChange(event)}
                />
                <select name="stance" value={this.state.stance} id="stanceSelect" onChange={event => this.handleStance}>
                    <option value="">--Please choose an option--</option>
                    <option value="regular">regular</option>
                    <option value="goofy">goofy</option>
                </select>
                <select name="obstacle" value={this.state.obstacle} id="obstacleSelect" onChange={event => this.handleObstacle}>
                    <option value="">--Please choose an option--</option>
                    <option value="flatground">flatground</option>
                    <option value="ledge">ledge</option>
                    <option value="rail">rail</option>
                    <option value="stairs">stairs</option>
                    <option value="pool">pool</option>
                </select>
                <button onclick={event => {

                    event.preventDefault()
                }}>submit</button>
            </form>
        )
    }
}

export default Form