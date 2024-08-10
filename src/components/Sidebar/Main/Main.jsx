import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'

function Main() {

       const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
       <div id="main">
              <div className='text-xl' id="nav">
                     <p>Cognito-<span id='ai'>AI</span></p>
                     <img src={assets.user_icon} alt="" />
              </div>

              <div id="main-container">

                     {!showResult
                     ? <>
                          <div id="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today ?</p>
                     </div>
                     <div id="cards">
                            <div onClick={() => onSent("Mahabharat me Abhimanyu kon tha Or vo Mayavi Chakraview se Bahar kyu Nahi aa Paya")}  id="card">
                                   <p>Mahabharat me Abhimanyu kon tha Or vo Mayavi Chakraview se Bahar kyu Nahi aa Paya</p>
                                   <img src={assets.compass_icon} alt="" />
                            </div>

                            <div onClick={() => onSent("What is React js, Give me brief Explanation")} id="card">
                                   <p>What is React js, Give me brief Explanation</p>
                                   <img src={assets.bulb_icon} alt="" />
                            </div>

                            <div onClick={() => onSent("How Many Medals won in Olympics 2020(Medals for India")} id="card">
                                   <p>How Many Medals won in Olympics 2020</p>
                                   <img src={assets.message_icon} alt="" />
                            </div>

                            <div onClick={() => onSent("What is Multitheading in Java, Give me Short Information")} id="card">
                                   <p>What is Multitheading in Java, Give me Short Information</p>
                                   <img src={assets.code_icon} alt="" />
                            </div>
                     </div>

                     </>
                     :
                     <div id='result'>
                           <div id ='result-title'> 
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                           </div>
                           <div id="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                            ? <div id='loader'>
                                   <hr />
                                   <hr />
                                   <hr />

                            </div>
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                            
                           </div>
                     </div>
                     }



                     

                     <div id="main-bottom">
                            <div id="search-box">
                                   <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt'/>
                                   <div id='raju'>
                                          {/* <img src={assets.gallery_icon} alt="" />
                                          <img src={assets.mic_icon} alt="" /> */}
                                          {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" />: null }
                                   </div>
                            </div>
                            <p id="bottom-info" className='mt-2 mb-4 text-center'>
                                   created by chandanmali 💖💖
                            </p>
                     </div>
              </div>
       </div>


    
  )
}

export default Main