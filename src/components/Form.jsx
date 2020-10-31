import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../scss/Form.scss'
import TextField from '@material-ui/core/TextField';
import mail from './icons/mail.png'
import phoneImg from './icons/phone.png'
import userForm from './icons/userForm.png'
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/action/user';
import ConfirmWindow from './ConfirmWindow';


const validate = values => {
    const errors = {}
    const nameForm = [
      'name',
      'email',
      'phone',
    ]
    nameForm.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Заполните поле'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Не верно указан e-mail'
    }
    return errors
  }
function FormSubmit(props) {
  const submitBtn = React.useRef()
  const {handleSubmit} = props
  const [modalWindow, setModalWindow] = React.useState(false)
  function submitFunc() {
    submitBtn.current.addEventListener('submit', handleSubmit());
    setModalWindow(!modalWindow)
}

    const editModalWindow = () => {
        setModalWindow(!modalWindow)
    }
      const renderTextField = ({
        label,
        input,
        meta: { touched, invalid, error },
        ...custom
      }) => (
        <TextField
          id="outlined"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          label="Фамилия и имя"
          placeholder="Укажите вашу фамилию и имя"
          error={touched && invalid}
          helperText={touched && error}
          {...input}
          {...custom}
        />
      )

      const renderTextFieldEmail = ({
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
          label="E-mail"
          placeholder="ivanova@mail.ru"
          error={touched && invalid}
          helperText={touched && error}
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

    return (
        <div className='userDataContainer'>
                <form ref={submitBtn} noValidate autoComplete="off">
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
                    {modalWindow? <ConfirmWindow submitFunc={submitFunc}
                    closeModalWindow={editModalWindow}/> : null}
                </form>
                <div className='boxButtonComplate'>
                    <button
                        onClick={editModalWindow}
                        className='buttonComplate'>
                            Сохранить изменения
                    </button>
                </div>
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
    validate,
  })(FormSubmit)

export default Form
