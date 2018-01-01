import React, { Component } from 'react';
import '../css/style.css';

class Player extends Component {

    state = {
        isInEditMode: false,
        hover: false  
    }

    toggleEditMode = () => {
        this.setState({ isInEditMode: !this.state.isInEditMode });
    }

    handleNameEdit = (event, player) => {
        player.name = event.target.value;
        this.props.editPlayer(player);
    }

    removePlayer = player => {
        this.props.deletePlayer(player);
    }

    render() {
        return (
            <div className="">
        
            { this.state.hover === true ?
                <div className="">
                    <button 
                        className="btn btn-warning btn-xs edit" 
                        onClick={ () => { this.toggleEditMode() } }>Update
                    </button>

                    <button 
                        className="btn btn-danger btn-xs suppr" 
                        onClick= { () => { this.removePlayer(this.props.data) } }>Delete
                    </button>  
                </div> : null } 
      
            { this.state.isInEditMode === true ? 
                    <input 
                        className="input" 
                        type="text" 
                        value={ this.props.data.name } 
                        onChange={ event => this.handleNameEdit(event, this.props.data) }
                    /> :

                    <ul className="list-group">
                        <li className="list-group-item">{ this.props.data.name }
                            <div className="buttons">
                                <button 
                                    className="btn btn-warning btn-xs edit" 
                                    onClick={ () => { this.toggleEditMode() } }>Edit
                                </button>

                                <button 
                                    className="btn btn-danger btn-xs delete" 
                                    onClick= { () => { this.removePlayer(this.props.data) } }>Delete
                                </button> 
                            </div>
                        </li>
                    </ul>
            }  

            </div>
        )
    }
}

export default Player;
