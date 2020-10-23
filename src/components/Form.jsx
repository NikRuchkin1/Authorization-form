import React from 'react'
import '../scss/Form.scss'
import TextField from '@material-ui/core/TextField';
import mail from './icons/mail.png'
import phone from './icons/phone.png'
import userForm from './icons/userForm.png'

function Form({openModalWindow}) {
    const openWindow = () => {
        openModalWindow()
    }
    return (
        <div className='userDataContainer'>
                <form noValidate autoComplete="off">
                        <div className='formBox'>
                            <div className='componentForm'>
                                <img className='imageMail' src={userForm} alt=''/>
                                <TextField id="outlined-basic" defaultValue="Hello World" label="Outlined" variant="outlined" />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={mail} alt=''/>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={phone} alt=''/>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            </div>
                        </div>
                </form>
                <div className='boxButtonComplate'>
                    <button className='buttonComplate' onClick={openWindow}>Сохранить изменения</button>
                </div>
        </div>
    )
}

export default Form
