import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import { useState } from 'react';
import { Context } from '../../context/Context';

function Sidebar() {

  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div id='sidebar'>
      <div id='top' >
        <img onClick={() => setExtended(prev => !prev)} id='menu' src={assets.menu_icon} alt="" />
        <div onClick={() => {newChat()}} id='new-chat'>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended
          ? <div id='recent'>
            <p id='recent-title'>Recent</p>
            {prevPrompt.map((item, index)=>{
              return (
                <div onClick={()=>loadPrompt(item)}  id='recent-entry'>
                 <img src={assets.message_icon} alt="" />
                 <p >{item.slice(0,18)} ...</p>
                </div>
              )
            })}
            
          </div>
          : null
        }

      </div>

      <div id='bottom'>
        <div id='bottom-item ' className='recent-entry'>
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null }
        </div>

        <div id='bottom-item ' className='recent-entry'>
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null }
        </div>

        <div id='bottom-item ' className='recent-entry'>
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>

      </div>

    </div>
  )
}

export default Sidebar