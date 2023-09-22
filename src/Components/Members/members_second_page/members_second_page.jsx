import React, { useState } from "react";
import "./members_second_page.css";
import discussion from "./colleagues_discussing_team_project.png"
function MembersSecondPage(props){
    const[showMore,setShowMore]=useState(false);
    return <div className="test">
        <div className="test-1">
            <h1 className="heading">Meet Our Team</h1>
            <p className="text">{props.data.text}</p>
            {showMore?props.data.text: `${props.data.text.substring(0,175)}`}
            <button className="btn" onClick={()=>setShowMore(!showMore)}>
                {showMore ? "show less":"show more"}
            </button>
            
        </div>
        <img src={discussion} alt = "discussion image"/>
    </div>
}
export default MembersSecondPage;





