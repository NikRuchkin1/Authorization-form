import React from 'react'
import '../scss/UserData.scss'
import mail from './icons/mail.png'
import phone from './icons/phone.png'

function UserData() {
    return (
        <div className='userDataContainer'>
            <div className='mail'>
                <img className='mailPhoto' src={mail} alt='@'/>
                <h2 className='mailText blackText'>Ivanova@mail.ru</h2>
            </div>
            <div className='lineDiviningData'></div>
            <div className='mail'>
                <img className='phone' src={phone} alt='phone number'/>
                <h2 className='mailText blackText'>Укажите номер телефона</h2>
            </div>
        </div>
    )
}

export default UserData
