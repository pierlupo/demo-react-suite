import React, { Component } from 'react'
import EventComponentChild from './EventChild'

class EventComponant extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : { contenu : "message initial"}
        }
       
    }

    changeInput = (e) => {
        console.log(e.target.value)
        // let tmpMessage = {...this.state.message}
        // tmpMessage = {contenu : e.target.value}
        // console.log("state",this.state.message)
        // console.log("tmpMessage",tmpMessage)
        // this.setState({...tmpMessage})
        //copie de mon state
        const tmpState = {...this.state}
        //modif de la copie de mon state
        tmpState.message.contenu =e.target.value
        //set de mon state
        this.setState({...tmpState})
    }

    clickChild = () =>{
        console.log("je suis le parent, tu as cliqué sur le bouton enfant")
    }

    clickChildParam = (message) => {
        console.log(message);
    }

    render(){
        return (
            <>
            <input type="text" name ="nameInput" onChange={this.changeInput} placeholder='Taper du texte ici'></input>
            <h2>Composant parent : {this.state.message.contenu}</h2>
            <EventComponentChild message={this.state.message} clickChild={this.clickChild}clickChildParam={this.clickChildParam}></EventComponentChild>
            </>
        )
    }
}

export default EventComponant;