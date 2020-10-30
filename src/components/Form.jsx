import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../scss/Form.scss'
import TextField from '@material-ui/core/TextField';
import mail from './icons/mail.png'
import phoneImg from './icons/phone.png'
import userForm from './icons/userForm.png'
import { useSelector, useDispatch, connect } from 'react-redux';
import { setUserInfo } from '../redux/action/user';
import { load as loadAccount } from '../redux/action/user'
import ConfirmWindow from './ConfirmWindow';

function FormSubmit(props) {
    const {handleSubmit} = props
  const [modalWindow, setModalWindow] = React.useState(false)
    const openModalWindow = () => {
        setModalWindow(!modalWindow)
      }
      const closeModalWindow = () => {
        setModalWindow(!modalWindow)
      }
      const renderTextField = ({
        input,
      }) => (
        <TextField
          id="outlined"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          label="Фамилия и имя"
          placeholder="Укажите вашу фамилию и имя"
          {...input}
        />
      )

      const renderTextFieldEmail = ({
        input,
        ...custom
      }) => (
        <TextField
          id="outlined-basic"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          label="E-mail"
          placeholder="ivanova@mail.ru"
          {...input}
          {...custom}
        />
      )

      const renderTextFieldPhone = ({
        label,
        input,
        meta: { touched, invalid, error },
        ...custom
      }) => (
        <TextField
          id="outlined-basic"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          label="Номер телефона"
          placeholder="Укажите номер телефона"
          error={touched && invalid}
          helperText={touched && error}
          {...input}
          {...custom}
        />
      )

    const openWindow = () => {
        props.openModalWindow()
    }

    return (
        <div className='userDataContainer'>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <div className='formBox'>
                            <div className='componentForm'>
                                <img className='imageMail' src={userForm} alt=''/>
                                <Field
                                  type="input"
                                  name="name"
                                  component={renderTextField} />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={mail} alt=''/>
                                <Field
                                  name="email"
                                  component={renderTextFieldEmail} />
                            </div>
                            <div className='line_divining3'></div>
                            <div className='componentForm'>
                                <img className='imageMail' src={phoneImg} alt=''/>
                                <Field
                                  name="phone"
                                  component={renderTextFieldPhone} />
                            </div>
                        </div>
                        <div className='boxButtonComplate'>
                    <button
                    onClick={handleSubmit}
                    className='buttonComplate'>
                        Сохранить изменения
                    </button>
                    {modalWindow? <ConfirmWindow closeModalWindow={closeModalWindow}/> : null}
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
