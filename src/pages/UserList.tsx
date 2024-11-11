import React, {useState} from 'react'

function UserListComponents() {
    const [userList, setUserList] = useState([{   "userName": "rbumpas0",   "name": "Rani Bumpas",   "isActive": false }, {   "userName": "ewindridge1",   "name": "Esra Windridge",   "isActive": true }, {   "userName": "lverne2",   "name": "La verne Andress",   "isActive": false }, {   "userName": "gburnham3",   "name": "Gardy Burnham",   "isActive": true }, {   "userName": "tabrashkin4",   "name": "Talia Abrashkin",   "isActive": false }, {   "userName": "gchittock5",   "name": "Georgie Chittock",   "isActive": true }, {   "userName": "rgreenmon6",   "name": "Reube Greenmon",   "isActive": true }, {   "userName": "mcundey7",   "name": "Megan Cundey",   "isActive": true }, {   "userName": "dwilsone8",   "name": "Dyane Wilsone",   "isActive": true }, {   "userName": "snorwood9",   "name": "Scotty Norwood",   "isActive": false }, {   "userName": "jaspolea",   "name": "Jeniffer Aspole",   "isActive": false }, {   "userName": "mparissb",   "name": "Malissa Pariss",   "isActive": true }, {   "userName": "spynerc",   "name": "Sax Pyner",   "isActive": false }, {   "userName": "neynaudd",   "name": "Nicola Eynaud",   "isActive": false }, {   "userName": "cdichee",   "name": "Claudius Diche",   "isActive": true }]);


    const checkedEvent = (isActive: boolean, index: number)=>{
        let list = userList.map((data, Uindex)=>{
            if(Uindex == index) data.isActive = isActive;
            return data
        });
        setUserList(list);
    }
  return (
    <div className='container'>
        <div className='row'>
            <input type="text" className='form-control' />
        </div>
        <div className="row mt-3 justify-content-center">
            {
                userList.map((user, index)=>{
                    return(
                        <div key={index} className={user.isActive? "col-3 border rounded-3 shadow padding-4 text-bg-success": "col-3 border rounded-3 shadow padding-4 text-bg-secondary"}>
                <div className='mb-3'>
                    <label className='form-label'>
                        UserName..: {user.userName}
                    </label>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Name..: {user.name}</label>
                </div>
                <div className="mb-3 form-check form-switch">
                    <input type="checkbox" 
                    className="form-check-input" role='switch' defaultChecked={user.isActive} 
                    onChange={evt=>{
                        checkedEvent(evt.target.checked, index)
                    }} />
                </div>
            </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default UserListComponents