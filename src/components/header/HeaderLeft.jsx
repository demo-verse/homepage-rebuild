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
          It{"'"}s time to separate power and violence so well,{" "}
          <strong>with our Art of Peace.</strong>{" "}Now is the new future, and <strong> we are the power. </strong><br></br>
          <br></br>
          
          <iframe
          title=" Text2speech for aworldpeace.org @ November 2nd, 2022 "
            width="100%"
            height="80"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1374738547&color=%232a4d57&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
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
