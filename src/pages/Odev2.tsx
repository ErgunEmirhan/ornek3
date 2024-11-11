import React, {useState} from 'react';
import swal from 'sweetalert';

function Odev2() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);
    const [pass, setPass] = useState('');
    const [repass, setRePass] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [isInfo, setIsInfo] = useState(false);

    const checkIsInfo = () =>{
        setIsInfo(
            !(username === '') &&
            !(age === 0) &&
            passwordMatch &&
            !(pass === '')
        );
    }
  return (
    <div className='container'>
        <div>
            <input type="text" className="form-control" 
            placeholder='username'
            onChange={evt=> setUsername(evt.target.value)}
            />
        </div>
        <div>
        <input type="text" className="form-control"
        placeholder='password' 
        onChange={evt=>{
            setPass(evt.target.value)
        }
        }
        />
        </div>
        <div>
           {
            passwordMatch
            ?
            null
            :
            <label
            className='text-danger'>
                Şifreler uyuşmuyor
            </label>
           }
        <input type="text" className="form-control"
        placeholder='repassword'
        onChange={evt=>{
            setRePass(evt.target.value);
        }}
        onKeyUp={evt=>{
            setPasswordMatch(pass === repass);
        }}
        />
        </div>
        <div>
        <input placeholder='select age'
        type="number"
        onChange={evt=> setAge(parseInt(evt.target.value))}
        />
        </div>
        <div>
            <button
            onClick={checkIsInfo}>
                register
            </button>
        </div>
        {
            isInfo
            ?
            <div>
                username: {username} <br />
                password: {pass} <br />
                age: {age}
            </div>
            :
            null
        }

    </div>
  )
}

export default Odev2