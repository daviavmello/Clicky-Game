import React from 'react';
import './style.css';

let charactersCard = props => {
    return (
            <div className="col-lg-3" onClick={() => props.handleScore(props.id)}>
        <div className="card" id={props.id} alt={props.name} style={{ backgroundImage: `url(${props.image})` }}  >    
    </div>
     </div>
  )
}
    
export default charactersCard;