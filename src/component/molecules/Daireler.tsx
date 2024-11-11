import React from 'react'
import Daire from '../atoms/Daire'
interface dairelerSpecs{
    states: boolean[],
    clr: string,
}
function Daireler(specs: dairelerSpecs) {
  return (
    <div className='row'>
        {
            specs.states.map(data=>{
                return <Daire clr={specs.clr} bgStatus={data}/>
            })
        }
    </div>
  )
}

export default Daireler