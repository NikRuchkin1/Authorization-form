import React from 'react'
import CreateIcon from '@material-ui/icons/Create';

function EditBtn({setEditMode}) {
    const CloseEditMode = () => {
        setEditMode()
    }
    return (
                <div onClick={() => CloseEditMode()} className='userInfo'>
                    <div className='changeText whiteText'>
                        <h3>Закрыть</h3>
                    </div>
                    <div>
                        <CreateIcon fontSize='inherit' className='changeImage'/>
                    </div>
                </div>
    )
}

export default EditBtn
