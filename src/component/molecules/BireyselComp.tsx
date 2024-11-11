import React, {useState} from 'react'
import { IBireysel } from '../../models/IBireysel'

function BireyselComp(birey: IBireysel) {
    const [isActive, setIsActive] = useState(birey.isActive);
    const getBodyClass = (isActive: boolean) =>{
        return isActive? "col-3 border rounded-3 shadow padding-4 text-bg-success": "col-3 border rounded-3 shadow padding-4 text-bg-danger"
    }
    return (
        <div className={getBodyClass(isActive)}
        onClick={() => setIsActive(!isActive)} >
                    <div className='mb-5'>
                        <img src={birey.avatar} className='rounded-circle'
                        width="100px" height="100px"
                        />
                    </div>
                </div>
                        
      )
}

export default BireyselComp