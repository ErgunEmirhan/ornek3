import React, {useState} from 'react'

function Odev() {
    let [sayi1, setSayi1] = useState(0);
    let [sayi2, setSayi2] = useState(0);
    let [sonuc, setSonuc] = useState(0);
    const topla = ()=>{
        setSonuc(+sayi1 + +sayi2);
    }
  return (
    <div className='container'>
        <div className='mb-3'>
            <input
            type='number'
            value={sayi1}
            className='form-control'
            onChange={evt=>
                {setSayi1(evt.target.value as any)}
                // veya parseInt(evt.target.value ile sayıya çevirebiliriz)
            }
            
            />
        </div>
        <div className='mb-3'>
            <input type='number'
            onChange={evt=>
                {setSayi2(evt.target.value as any)}}
                className='form-control'
                />
        </div>
        <button onClick={topla} className='btn btn-primary'>Topla</button>
        <div>
           <label> Sonuç: {sonuc}</label> 
        </div>
    </div>
  )
}

export default Odev