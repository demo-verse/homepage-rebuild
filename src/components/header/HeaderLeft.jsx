import { Design } from "../../components";

// import * as React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip'

function HeaderLeft({ servicesRef }) {
  return (
    <div className="left">
      <Design />
      <div className="left-content">
        <h2>
          Progressive decentralization of diplomacy, towards a World Peace
        </h2>
        <p>
          Let's start a World Peace, and search power somewhere new: in the
          wisdom and conscience of a great civilization;{" "}
          <strong>humanity.</strong>
        </p>

        <p>
          Here, we are introducing a new human right, and starting a progressive
          decentralization and peace-orientation in diplomacy; along with
          (soon,) a proactive electorship paradigm for the 21st century.
        </p>

        <p>
          This project is our restoration, one that is peaceful and movemental.
          Now is the new future, and <strong> we are the power</strong> It{"'"}s
          time to seperate power and violence.
        </p>
       

       


       

        {/* <div className="learn-more">
          <Button
            text1="Learn "
            text2="more"
            onClick={() => alert("You clicked button")}
          />
        </div> */}
        {/* <div
          className="scroll-down"
          onClick={() => servicesRef.current.scrollIntoView()}
        >
          <span> {">"} let's go</span>
        </div> */}
      </div>
    </div>
  );
}

export default HeaderLeft;
