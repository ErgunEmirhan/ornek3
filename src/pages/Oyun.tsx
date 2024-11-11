import React from 'react'
import Takim from '../component/molecules/Takim'
function Oyun() {
  return (
    <div className='container-fluid row border'>
        <div className="col-4 border">
            <Takim/>
        </div>
        <div className="col-4 border">
            <div className='row border mt-5'>

            </div>
            <div className='row border '>

            </div>
        </div>
        <div className="col-4 border">
            <Takim/>
        </div>
    </div>
  )
}

export default Oyun