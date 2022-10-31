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
          decentralization and peace-orientation in diplomacy; along with (soon)
          demand-aware and potentially oriented, proactive electorship paradigm,
          for the 21st century.
        </p>

        <p>
        
          It{"'"}s time to separate power and violence so well,{" "}
          <strong>with our Art of Peace.</strong>
          <br></br>
          <br></br>
          <hr style={{ width: "50%" }}></hr>
          <i>
            You can also just listen to this whole page, <br></br> recorded with
            text2speech @ 29th October, 2022.
          </i>
          <hr style={{ width: "50%" }}></hr>
          <br></br>
          <iframe
            title="readAloud text2speech"
            width="80%"
            height="80"
            scrolling="yes"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1372123906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
