import React, {useState} from 'react'
import {IUser} from '../../models/IUser';

function UserComponent(user: IUser) {
    const [isActive, setIsActive] = useState(user.isActive);
    console.log('user component render ' + user.userName + ' val: ' + isActive);
    const checkedEvent = (evt: any)=>{
        setIsActive(evt.target.checked)
    }
    const getBodyClass = (isActive: boolean)=>{
        return isActive? "col-3 border rounded-3 shadow padding-4 text-bg-success": "col-3 border rounded-3 shadow padding-4 text-bg-secondary"
    }
  return (
    <div className={getBodyClass(isActive)}>
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
                    onChange={checkedEvent} />
                </div>
            </div>
                    
  )
}

export default UserComponent