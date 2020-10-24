import React from 'react'
import '../scss/Home.scss'
import maskGroup from '../components/icons/MaskGroup.png'
import EditBtn from './buttonComponents/EditBtn';
import CloseEditMode from './buttonComponents/CloseEditMode';


function CardUser({edit, setEditMode, name}) {
    const setEdit = () => {
        setEditMode()
    }
    return (
        <div className='cardUserBox'>
                <div className='userInfo'>
                    <div>
                        <img className='userGeneralPhoto' src={maskGroup} alt='user photo'/>
                    </div>
                    <div className='whiteText'>
                        <h1 className='userInfoText' >{name}</h1>
                    </div>
                </div>
                {edit? <EditBtn setEditMode={setEdit}/>:<CloseEditMode setEditMode={setEdit}/>}
        </div>
    )
}

export default CardUser
