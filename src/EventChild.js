import React, { Component } from 'react'

class EventComponentChild extends Component {
    constructor(props){
        super(props)
        
    }
    // méthode click sur le lien de l'enfant
    clickLink = (e) => {
        e.preventDefault()  // annuler le comportement par défaut
        console.log("clique sur le lien")
        //appel de ma méthode parent via les props
        this.props.clickChild()
        //appel de ma méthode parent avec param, via les props, on lui en donne un
        this.props.clickChildParam("hello")
    }

    render() {
        const {contenu} = this.props.message
        return(
            <div>
                <h2>Composant Enfant : {contenu}</h2>
                <a href="http://www.google.fr" onClick={this.clickLink}>Lien Enfant</a>
            </div>
        )
    }

}

export default EventComponentChild;

