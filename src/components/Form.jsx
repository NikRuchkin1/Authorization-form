import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../scss/Form.scss'
import TextField from '@material-ui/core/TextField';
import mail from './icons/mail.png'
import phone from './icons/phone.png'
import userForm from './icons/userForm.png'
import { useSelector, useDispatch, connect } from 'react-redux';
import { setUserInfo } from '../redux/action/user';
import { load as loadAccount } from '../redux/action/user'

function FormSubmit(props) {
    console.log(props)
    const {handleSubmit} = props
    const {name} = useSelector(({ user }) => user);
    const renderTextField = ({}) => (
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          defaultValue={name}
          type="text"
          placeholder="first name"
        />
      )
    const openWindow = () => {
        props.openModalWindow()
    }

    return (
        <div className='userDataContainer'>
                <form noValidate autoComplete="off">
                        <div className='formBox'>
                            <div className='componentForm'>
                                <img className='imageMail' src={userForm} alt=''/>
                                <Field
                                  name="name"
                                  component='input'
                                  label="First Name" />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={mail} alt=''/>
                                <Field
                                  name="email"
                                  component='input'
                                  label="First Name" />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={phone} alt=''/>
                                <Field
                                  name="phone"
                                  component='input'
                                  label="First Name" />
                            </div>
                        </div>
                        <div className='boxButtonComplate'>
                    <button onClick={handleSubmit} className='buttonComplate'>Сохранить изменения</button>
                </div>
                </form>
        </div>
    )
}

function Form() {
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(setUserInfo(data))
    }
    return (
        <div>
            <FormUser onSubmit={onSubmit}/>
        </div>
    )
}



let FormUser = reduxForm({
    form: 'formUserInfo',
  })(FormSubmit)

export default Form
