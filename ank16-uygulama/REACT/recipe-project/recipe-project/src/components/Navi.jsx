import React from 'react'
import '../assets/style/navi.scss'


const Navi = ({navHead}) => {
    return (
      <nav>
        <div className="brand">
            <h3>{navHead}</h3>
        </div>
        <ul className="liste">
          <li>Home</li>
          <li>Add Recipe</li>
          <li>About</li>          
        </ul>
      </nav>
    )
  }
  
  

export default Navi 