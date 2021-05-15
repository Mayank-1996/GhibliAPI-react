import React from 'react'
import './styles/data.css'

export default function Data(props) {
    return (
        <div className="data-container">
            {props.data.map(value =>{
                return(
                    <div>
                {value.name!=undefined?(
                    <div className="cell">
                    <h1>{value.name}</h1>
                    <p>Gender <strong>{value.gender}</strong></p>
                    <p>Age <strong>{value.age}</strong></p>
                    <p>Eye Color <strong>{value.eye_color}</strong></p>
                    <p>Hair Color <strong>{value.hair_color}</strong></p>
                    <p style={{border:"none"}}><a href={`https://ghibliapi.herokuapp.com/people/?id=${value.id}`} target="_blank" rel="noreferrer noopener">API Resource Link</a></p>
                    </div>
                    
                    
                ):<div className="cell">
                <h1>{value.title}</h1>
                <p>Prodced by <strong>{value.producer}</strong></p>
                <p>Directed by <strong>{value.director}</strong></p>
                <p>Reelease Date <strong>{value.release_date}</strong></p>
                <p>Rotten Tomato Score <strong  className={value.rt_score>80?"green":"red"}>{value.rt_score}</strong></p>
                <p>{value.description}</p>
                <p style={{border:"none"}}><a href={`https://ghibliapi.herokuapp.com/films/?id=${value.id}`} target="_blank" rel="noreferrer noopener">API Resource Link</a></p>

                </div> }
                </div>)})}
        </div>
    )
}
