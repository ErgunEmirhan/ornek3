import React from 'react'
import Takim from '../component/molecules/Takim'
import Daire from '../component/atoms/Daire'
import Daireler from '../component/molecules/Daireler'
function Oyun() {
    const AStates = [
        true,
        true,
        false,
        false,
        true
    ]
    const BStates = [
        false,
        false,
        true,
        true,
        true
    ]
  return (
    <div className='container-fluid row border'>
        <div className="col-4 border">
            <Takim/>
        </div>
        <div className="col-4 border justify-content-center align-item-center">
            <div className='row border justify-content-center'>
                <Daireler clr={"primary"} states={AStates} />
            </div>
            <div className='row border justify-content-center'>
            <Daireler clr={"warning"} states={BStates} />
            </div>
        </div>
        <div className="col-4 border">
            <Takim/>
        </div>
    </div>
  )
}

export default Oyun