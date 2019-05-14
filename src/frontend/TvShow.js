import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow(props) {
    return (

        <Link to={"/" + props.id} className='item'><img src={require(`../frontend/img/${props.id}.jpg`)} alt={`${props.title}`} />
            <div className='overlay'>
                <h2>{props.title}</h2>
            </div>
        </Link>

    );

}