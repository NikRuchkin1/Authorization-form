import React from 'react';
import '../scss/Header.scss'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { makeStyles } from '@material-ui/core';
import maskGroup from '../components/icons/MaskGroup.png'

const useStyles = makeStyles(() => ({
  icon: {
    color: '#fff',
    marginRight: 26,
  },
}));

function Header() {
  const style = useStyles()
  return (
      <div className='user_header'>
        <div className='userHeaderBox'>
          <div className='svg'>
            <NotificationsNoneIcon fontSize='large' className={style.icon}/>
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
