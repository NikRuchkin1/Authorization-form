import React from 'react'
import CreateIcon from '@material-ui/icons/Create';

function EditBtn(props) {
    const setEdit = () => {
        props.setEditMode()
    }
    return (
                <div onClick={()=> setEdit()} className='userInfo'>
                    <div className='changeText whiteText'>
                        <h3>Редактировать</h3>
                    </div>
                    <div>
                        <CreateIcon fontSize='inherit' className='changeImage'/>
                    </div>
                </div>
    )
}

export default EditBtn
