import React from 'react'
import { IUserProfile } from '../../models/IUserProfile'
interface IUserProfileProps{
    userProfile: IUserProfile,
    isAdmin: boolean
}
function UserProfile(props: IUserProfileProps) {
  return (
    <>
                 <div className="row m-3">
                    <img src={props.userProfile.photo} style={{width:'200px', display: 'inline-block', borderRadius: '100%'}} alt="picsum resmi" />
                </div>
                <div className="row m-3">
                    <input type="text" className='form-control' placeholder='kullanıcı adı' value={props.userProfile.userName} />
                </div>
                <div className="row m-3">
                    <input type="password" className='form-control' placeholder='şifre' value={props.userProfile.sifre} />
                </div>
                <div className="row m-3">
                    <input type="tel" className='form-control' placeholder='telefon' value={props.userProfile.telefon} />
                </div>
                <div className="row d-grid m-3">
                    <button className='btn btn-success'>Bilgilerimi Güncelle</button>
                </div>
    </>
  )
}

export default UserProfile