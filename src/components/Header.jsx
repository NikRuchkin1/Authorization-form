import React from 'react';
import '../scss/Header.scss'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import maskGroup from '../components/icons/MaskGroup.png'


function Header() {
  return (
      <div className='user_header'>
        <div className='userHeaderBox'>
          <div className='svg1'>
            <NotificationsNoneIcon fontSize='large' className='svgNotification'/>
          </div>
          <div className='line'>
            <span className='line_dividing'/>
          </div>
          <div className='userImage'>
            <img src={maskGroup} alt='#'/>
          </div>
          <div className='userName'>
            Иванова А.
          </div>
        </div>
      </div>
  );
}

export default Header;
