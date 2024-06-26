import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const { prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput } = useContext(Context)
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSent();
        }
    };
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello, Dev.</span></p>
                        <p>How can i help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Outline an organized & logical sales pitch for a new product</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Explain what the keto diet is in simple terms</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Give me a beginner's guide to an activity</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>What’s the reaction to and impact of autonomous vehicles</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </> :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter promty here' onChange={(e) => setInput(e.target.value)} value={input} onKeyPress={handleKeyPress} />
                        <div className="">
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" onClick={() => onSent()} />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main