import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../scss/Form.scss'
import TextField from '@material-ui/core/TextField';
import mail from './icons/mail.png'
import phone from './icons/phone.png'
import userForm from './icons/userForm.png'
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/action/user';

function Form(props) {
    const {name} = useSelector(({ user }) => user);
    const dispatch = useDispatch()
    const renderTextField = ({}) => (
        <TextField
          id="outlined-basic"
          defaultValue={name}
          label="Outlined"
          variant="outlined"
        />
      )

    // const openWindow = () => {
    //     props.openModalWindow()
    // }
    const onSubmit = (name) => {
        props.handleSubmit(name)
    }

    return (
        <div className='userDataContainer'>
                <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
                        <div className='formBox'>
                            <div className='componentForm'>
                                <img className='imageMail' src={userForm} alt=''/>
                                <Field value={name} name="inputName" component="input" type="text" />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={mail} alt=''/>
                                <TextField
                                  name="firstName"
                                  component={renderTextField}
                                  label="First Name" />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={phone} alt=''/>
                                <TextField
                                  name="firstName"
                                  component={renderTextField}
                                  label="First Name" />
                            </div>
                        </div>
                        <div className='boxButtonComplate'>
                    <button className='buttonComplate'>Сохранить изменения</button>
                </div>
                </form>
        </div>
    )
}

Form = reduxForm({
    form: 'formUserInfo',
  })(Form)

export default Form
