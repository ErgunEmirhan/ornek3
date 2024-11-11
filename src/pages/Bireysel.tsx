import React from 'react'
import BireyselComp from '../component/molecules/BireyselComp';

function Bireysel() {
    let bireyselArray = [{"id":1,"avatar":"https://robohash.org/quidemdoloremquos.png?size=50x50&set=set1","isActive":false},
        {"id":2,"avatar":"https://robohash.org/abaperiamlaudantium.png?size=50x50&set=set1","isActive":true},
        {"id":3,"avatar":"https://robohash.org/essefaciliseius.png?size=50x50&set=set1","isActive":false},
        {"id":4,"avatar":"https://robohash.org/solutadoloresveritatis.png?size=50x50&set=set1","isActive":false},
        {"id":5,"avatar":"https://robohash.org/suscipitporroqui.png?size=50x50&set=set1","isActive":true},
        {"id":6,"avatar":"https://robohash.org/etcorruptinon.png?size=50x50&set=set1","isActive":true},
        {"id":7,"avatar":"https://robohash.org/quiquicumque.png?size=50x50&set=set1","isActive":false},
        {"id":8,"avatar":"https://robohash.org/numquamexplicabodolorem.png?size=50x50&set=set1","isActive":true},
        {"id":9,"avatar":"https://robohash.org/expeditafacilisdelectus.png?size=50x50&set=set1","isActive":true},
        {"id":10,"avatar":"https://robohash.org/quidemomnisquia.png?size=50x50&set=set1","isActive":true},
        {"id":11,"avatar":"https://robohash.org/rationesapienteveniam.png?size=50x50&set=set1","isActive":true},
        {"id":12,"avatar":"https://robohash.org/noneosreiciendis.png?size=50x50&set=set1","isActive":false},
        {"id":13,"avatar":"https://robohash.org/doloremiustooptio.png?size=50x50&set=set1","isActive":false},
        {"id":14,"avatar":"https://robohash.org/estautitaque.png?size=50x50&set=set1","isActive":true},
        {"id":15,"avatar":"https://robohash.org/vitaeautid.png?size=50x50&set=set1","isActive":false},
        {"id":16,"avatar":"https://robohash.org/idnihillaudantium.png?size=50x50&set=set1","isActive":true},
        {"id":17,"avatar":"https://robohash.org/animitemporaquaerat.png?size=50x50&set=set1","isActive":false},
        {"id":18,"avatar":"https://robohash.org/autfugaet.png?size=50x50&set=set1","isActive":true},
        {"id":19,"avatar":"https://robohash.org/etpraesentiumet.png?size=50x50&set=set1","isActive":true},
        {"id":20,"avatar":"https://robohash.org/laudantiumeanam.png?size=50x50&set=set1","isActive":false},
        {"id":21,"avatar":"https://robohash.org/namvelitad.png?size=50x50&set=set1","isActive":false},
        {"id":22,"avatar":"https://robohash.org/nonconsequaturofficiis.png?size=50x50&set=set1","isActive":true},
        {"id":23,"avatar":"https://robohash.org/voluptatefugitdicta.png?size=50x50&set=set1","isActive":false},
        {"id":24,"avatar":"https://robohash.org/fugiatquisunt.png?size=50x50&set=set1","isActive":true},
        {"id":25,"avatar":"https://robohash.org/expeditamodidicta.png?size=50x50&set=set1","isActive":true},
        {"id":26,"avatar":"https://robohash.org/quodomnisperferendis.png?size=50x50&set=set1","isActive":false},
        {"id":27,"avatar":"https://robohash.org/nisiquaesaepe.png?size=50x50&set=set1","isActive":true},
        {"id":28,"avatar":"https://robohash.org/estutautem.png?size=50x50&set=set1","isActive":true},
        {"id":29,"avatar":"https://robohash.org/aliquidmaioreseveniet.png?size=50x50&set=set1","isActive":true},
        {"id":30,"avatar":"https://robohash.org/perferendiseumcupiditate.png?size=50x50&set=set1","isActive":false},
        {"id":31,"avatar":"https://robohash.org/molestiassapienteconsequatur.png?size=50x50&set=set1","isActive":false},
        {"id":32,"avatar":"https://robohash.org/dictarerumcorrupti.png?size=50x50&set=set1","isActive":true},
        {"id":33,"avatar":"https://robohash.org/veniametoccaecati.png?size=50x50&set=set1","isActive":true},
        {"id":34,"avatar":"https://robohash.org/doloremdolorequia.png?size=50x50&set=set1","isActive":true},
        {"id":35,"avatar":"https://robohash.org/vitaererumminus.png?size=50x50&set=set1","isActive":false},
        {"id":36,"avatar":"https://robohash.org/estmolestiasdignissimos.png?size=50x50&set=set1","isActive":false},
        {"id":37,"avatar":"https://robohash.org/eumnihileum.png?size=50x50&set=set1","isActive":false},
        {"id":38,"avatar":"https://robohash.org/deseruntutveniam.png?size=50x50&set=set1","isActive":false},
        {"id":39,"avatar":"https://robohash.org/consequuntursedullam.png?size=50x50&set=set1","isActive":false},
        {"id":40,"avatar":"https://robohash.org/utetpariatur.png?size=50x50&set=set1","isActive":true},
        {"id":41,"avatar":"https://robohash.org/voluptaspossimuset.png?size=50x50&set=set1","isActive":true},
        {"id":42,"avatar":"https://robohash.org/estnonfugit.png?size=50x50&set=set1","isActive":true},
        {"id":43,"avatar":"https://robohash.org/eosrepudiandaeenim.png?size=50x50&set=set1","isActive":false},
        {"id":44,"avatar":"https://robohash.org/undeidodit.png?size=50x50&set=set1","isActive":false},
        {"id":45,"avatar":"https://robohash.org/corporisaperiamvoluptate.png?size=50x50&set=set1","isActive":false},
        {"id":46,"avatar":"https://robohash.org/autperferendisaccusantium.png?size=50x50&set=set1","isActive":true},
        {"id":47,"avatar":"https://robohash.org/nonconsequaturquia.png?size=50x50&set=set1","isActive":false},
        {"id":48,"avatar":"https://robohash.org/corporisanimirepellendus.png?size=50x50&set=set1","isActive":true},
        {"id":49,"avatar":"https://robohash.org/sedofficiavoluptatum.png?size=50x50&set=set1","isActive":false},
        {"id":50,"avatar":"https://robohash.org/enimporroquia.png?size=50x50&set=set1","isActive":false}]
        return (
            <div className='container'>
                <div className='row mt-5 mb-3'>
                    <input type="text" className='form-control' />
                </div>
                <div className="row mt-3 justify-content-center">
                    {
                        bireyselArray.map((user, index)=>{
                            return( 
                            <BireyselComp key={index} idNo={user.id} avatar={user.avatar} isActive={user.isActive}/>
                                )
                        })
                    }
                    
                </div>
            </div>
        )
}

export default Bireysel