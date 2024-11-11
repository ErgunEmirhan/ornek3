import React from 'react'
import UserProfile from '../component/molecules/UserProfile'
import { IUserProfile } from '../models/IUserProfile'

function UserPage() {
    const userProfile: IUserProfile = {
        photo: 'https://picsum.photos/250/250',
        telefon: '5554443322',
        userName: 'eergun',
        sifre: 'asdqwe123'
    }
  return (
    <div className="container">
        <div className="row mt-5 justify-content-center">
            <div className="col-5 border p-4">
                <UserProfile userProfile={userProfile} isAdmin={false} />
            </div>
        </div>
    </div>
  )
}

export default UserPage