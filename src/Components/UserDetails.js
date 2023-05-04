import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () =>{
    const { userid } /*params*/ = useParams()
    //const userid = params.userid
    return (
        <>
        <div>
            Details about users{userid}
         </div>
        </>
    )
}