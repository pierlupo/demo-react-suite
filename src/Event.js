import React, { Component } from 'react'
import EventComponentChild from './EventChild'
import "./Component.css"

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

    //méthode à passer à mon enfant
    clickChild = () =>{
        console.log("je suis le parent, tu as cliqué sur le bouton enfant")
    }
    //méthode à passer avec paramètre
    clickChildParam = (message) => {
        console.log(message);
        const tmpState = {...this.state}
        //modif de la copie de mon state
        tmpState.message.contenu = message
        //set de mon state
        this.setState({...tmpState})
    }

    render(){
        return (
            <>
            <button type="submit" className="btn"></button>
            <input type="text" name ="nameInput" onChange={this.changeInput} placeholder='Taper du texte ici'></input>
            <h2>Composant Parent : {this.state.message.contenu}</h2>
            <EventComponentChild message={this.state.message} clickChild={this.clickChild} clickChildParam={this.clickChildParam}></EventComponentChild>
            </>
        )
    }
}

export default EventComponant;