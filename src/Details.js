import React from 'react';
import {Link} from 'react-router-dom';

export default function Details() {
    return(
      <div>
          <Link to='/'>Back to Home Page</Link>
        <h1>Hello, Welcome to the movie details Page</h1>
      </div>
    );
  }