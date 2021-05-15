import React,{useState} from 'react'
import './styles/content.css'
import Data from './data'


export default function Content() {
    var [apiData,setApiData] = useState([])
    var [select,setSelect] = useState('')

    const retrieveData = (whichapi) =>{
        setSelect(whichapi)
        fetch(`https://ghibliapi.herokuapp.com/${whichapi}?limit=10`)
        .then(data =>data.json())
        .then(data=>setApiData(data))
        
        console.log(select)

    }
    return (
        <div>
            <div className="button-wrapper">
                <p className={select=='films'?"cblue":""} onClick={()=>retrieveData('films')}>Films</p>
                <p className={select==="people"?"cblue":""} onClick={()=>retrieveData('people')}>People</p>
            </div>

            <Data data={apiData}/>

            
        </div>
    )
}
