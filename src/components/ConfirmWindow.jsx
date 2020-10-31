import React from 'react'
import '../scss/ConfirmWindow.scss'
import cross from './icons/cross.png'

function ConfirmWindow({closeModalWindow, submitFunc}) {
    const closedModalWindow = () => {
        closeModalWindow()
    }
    const testFunc = () => {
        submitFunc("a")
    }
    return (
        <div id="openModal" className="modal">
            <div className='boxModalWindow'>
                <div className='rowInModalWindow crossBtn'>
                    <img onClick={closedModalWindow} src={cross} alt='cross'/>
                </div>
                <div className='rowInModalWindow'>
                    <h1 className='SaveChangeBtn' >Сохранить изменения?</h1>
                </div>
                <div className='rowInModalWindow'>
                    <button onClick={testFunc} className='SaveBtn'>Сохранить</button>
                </div>
                <div className='rowInModalWindow'>
                    <button className='noSaveBtn' onClick={closedModalWindow}>Не сохранять</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmWindow
