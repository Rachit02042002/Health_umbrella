import React, { useState, useEffect } from "react";
import "./members.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

import MembersSecondPage from "./members_second_page/members_second_page";
import MembersThirdPage from "./members_third_page/members_third_page";
function Members() {
    const [membersData, setMembersData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getapidata = async () => {
        try {
          const datafetch = await axios.get(
            `${process.env.REACT_APP_BACKEND_IP}/members/`
          );
          
          console.log(datafetch);
          setMembersData(datafetch.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
  
      getapidata();
    }, []);
    
    return (
        // console.log(membersData);
        <>
          {!membersData || loading ? (
            <ClipLoader
              className="loadingicon"
              color="green"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
            <MembersSecondPage data={membersData} />
            <MembersThirdPage data={membersData} />
            </>
          )}
        </>
      );
    }
export default Members;