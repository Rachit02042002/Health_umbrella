import React from "react";
import "./members_third_page.css";
import Lead from "./Lead Members.png";
import DM from "./Layers.png";
import RR from "./Businessman.png";
import WW from "./Users.png";
import webManage from "./Internet.png";
import Member from "./Checked User Male.png";
import { Link } from "react-router-dom";

// const MembersThirdPage = (props) => {
//   console.log(props.data.teamList);

//   // Ensure there are exactly 6 team members
//   while (props.data.teamList.length < 6) {
//     props.data.teamList.push("");
//   }

//   return (
    
//     <div className="main-div">
//     <h1 className="Team-heading">Our Team</h1>
//       <div className="flex-container">
//         {props.data.teamList.map((teamMember, index) => (
//           <div className="team-member" key={index}>
//             <img className="item" src={getImageByIndex(index)} alt={getAltTextByIndex(index)} /><p className="item">{teamMember}</p>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const getImageByIndex = (index) => {
//   const images = [Lead, DM, RR, WW, webManage, Member]; // Replace these with your image sources
//   return images[index] || ''; // Use the actual image source based on the index
// };

// const getAltTextByIndex = (index) => {
//   const altTexts = ['Lead', 'DM', 'RR', 'WW', 'Web Manager', 'Member']; // Replace with appropriate alt texts
//   return altTexts[index] || ''; // Use the actual alt text based on the index
// };

// export default MembersThirdPage;


const MembersThirdPage = (props) => {
    console.log(props.data.teamList);
  
    // Ensure there are exactly 6 team members
    while (props.data.teamList.length < 6) {
      props.data.teamList.push("Hi");
    }
  
    return (
      <div className="main-div">
        <h1 className="Team-heading">Our Team</h1>
        <div className="flex-container">
          {props.data.teamList.map((teamMember, index) => (
            <div className="team-member" key={index}>
              <img className="item" src={getImageByIndex(index)} alt={getAltTextByIndex(index)} />
              <Link to= "/{teamMember}"><p className="item">{teamMember}</p></Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const getImageByIndex = (index) => {
    const images = [Lead, DM, RR, WW, webManage, Member]; // Replace these with your image sources
    return images[index] || ''; // Use the actual image source based on the index
  };
  
  const getAltTextByIndex = (index) => {
    const altTexts = ['Lead', 'DM', 'RR', 'WW', 'Web Manager', 'Member']; // Replace with appropriate alt texts
    return altTexts[index] || ''; // Use the actual alt text based on the index
  };
  
  export default MembersThirdPage;