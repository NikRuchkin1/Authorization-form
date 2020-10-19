import React from 'react'
import '../scss/Home.scss'
import CreateIcon from '@material-ui/icons/Create';
import maskGroup from '../components/icons/MaskGroup.png'
import { makeStyles } from '@material-ui/core';


function CardUser() {
    return (
        <div className='cardUserBox'>
                <div className='userInfo'>
                    <div>
                        <img className='userGeneralPhoto' src={maskGroup} alt='user photo'/>
                    </div>
                    <div className='whiteText'>
                        <h1 className='userInfoText' >Иванова Анна Михайловна</h1>
                    </div>
                </div>
                <div className='userInfo'>
                    <div className='changeText whiteText'>
                        <h3>Редактировать</h3>
                    </div>
                    <div>
                        <CreateIcon fontSize='inherit' className='changeImage'/>
                    </div>
                </div>
        </div>
    )
}

export default CardUser
