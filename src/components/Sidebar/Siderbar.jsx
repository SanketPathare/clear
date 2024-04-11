import "./Siderbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const SiderBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat }= useContext(Context);
  const loadPrompt  = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt)

  }
  return (
    <div className="sidebar">
      <div className="top">
        <img
          width={20}
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="img"
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img width={15} src={assets.plus_icon} alt="img" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div key={index} onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img width={20} src={assets.message_icon} alt="img" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img width={20} src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img width={20} src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img width={20} src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SiderBar;
