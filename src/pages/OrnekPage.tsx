import React, {useState} from 'react'

function OrnekPage() {
const [yazilim, setYazilim] = useState(false);
const [donanim, setDonanim] = useState(false);
const [sef, setSef] = useState(false);
const [network, setNetwork] = useState(false);
const [architect, setArchitect] = useState(false);
const [mudur, setMudur] = useState(false);
console.log('ornekPageRender')
const render = () =>{
    
}

  return (
    <div className='container'>
        <div className="row mt-4">
            <div>
                <input type="checkbox" className="form-check-input me-2" onChange={evt=>{
                    setYazilim(evt.target.checked);
                }}/>
                <label>Yazılım</label>
            </div>
            <div>
                <input type="checkbox" className="form-check-input me-2" 
                onChange={evt=>{
                    setYazilim(evt.target.checked);
                }}/>
                <label>Donanım</label>
            </div>
            <div>
                <input type="checkbox" className="form-check-input me-2" 
                onChange={evt=>{
                    setYazilim(evt.target.checked);
                }}/>
                <label>Şef</label>
            </div>
            <div>
                <input type="checkbox" className="form-check-input me-2"
                onChange={evt=>{
                    setYazilim(evt.target.checked);
                }} />
                <label>Network</label>
            </div>
            <div>
                <input type="checkbox" className="form-check-input me-2" 
                onChange={evt=>{
                    setYazilim(evt.target.checked);
                }}/>
                <label>Architect</label>
            </div>
            <div>
                <input type="checkbox" className="form-check-input me-2" 
                onChange={evt=>{
                    setYazilim(evt.target.checked);
                }}/>
                <label>Müdür</label>
            </div>
            <div className='mb-2'>
                <button className='btn btn-danger' onClick={render}>Denetle</button>
            </div>
            <div className="mb-2 mt-2 row">
                
                <div className="col"><i className='fa-brands fa-java fa-2xl'></i></div>
                <div className="col"><i className='fa-solid fa-microchip fa-2xl'></i></div>
                <div className="col"><i className='fa-solid fa-network-wired fa-2xl'></i></div>
                <div className="col"><i className='fa-solid fa-pen-ruler fa-2xl'></i></div>
                <div className="col"><i className='fa-solid fa-clipboard-user fa-2xl'></i></div>
                <div className="col"><i className='fa-solid fa-user fa-2xl'></i></div>
                
                
                
                
                
            </div>
        </div>
    </div>
  )
}

export default OrnekPage