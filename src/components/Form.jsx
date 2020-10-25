import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../scss/Form.scss'
import TextField from '@material-ui/core/TextField';
import mail from './icons/mail.png'
import phone from './icons/phone.png'
import userForm from './icons/userForm.png'

function Form({openModalWindow}) {

    const validate = values => {
        const errors = {}
        const requiredFields = [
          'firstName',
          'lastName',
          'email',
        ]
        requiredFields.forEach(field => {
          if (!values[field]) {
            errors[field] = 'Required'
          }
        })
        if (
          values.email &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }



    const renderTextField = ({}) => (
        <TextField
          id="outlined-basic"
          defaultValue="Hello World"
          label="Outlined"
          variant="outlined"
        />
      )

    const openWindow = () => {
        openModalWindow()
    }
    React.useEffect(()=> {
        console.log('refresh')
    },[])
    return (
        <div className='userDataContainer'>
                <form noValidate autoComplete="off">
                        <div className='formBox'>
                            <div className='componentForm'>
                                <img className='imageMail' src={userForm} alt=''/>
                                <TextField
                                  name="firstName"
                                  component={renderTextField}
                                  label="First Name" />
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
                </form>
                <div className='boxButtonComplate'>
                    <button className='buttonComplate' onClick={openWindow}>Сохранить изменения</button>
                </div>
        </div>
    )
}

Form = reduxForm({
    form: 'FormValidate',
  })(Form)

export default Form
