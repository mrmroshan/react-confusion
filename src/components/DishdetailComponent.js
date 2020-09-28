import React, { Component } from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
    }


    renderDish(dish){

        return(
            <>
            <div className="col-12 col-md-5 m-1">
                <Card>   
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card> 
            </div> 
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(dish)}
            </div>   
            </>
        );
    }

    renderComments(dish){

        const comments = dish.comments.map((comment) => {            
            return (
            <li>{comment.comment},<p>--{comment.author},{comment.date}</p></li>                
            )
        }) 

        if(dish.comments != null){
            return ( 
                <>
                <h4>Comments</h4>
                <ul>
                    {comments}
                </ul>
                </>
            )
            
        }else{
            return <div></div>
        }       

    }


    render(){   

        if(this.props.dish != null){
            var dish = this.props.dish;
            return(
                <div className="row">                 
                    {this.renderDish(dish)}   
                </div>                               
            )
        }else{
            return (
                <div></div>
            )
        }        
    }
    


}

export default Dishdetail;