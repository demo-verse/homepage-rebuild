import { Design } from "../../components";

// import * as React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';

function HeaderLeft({ servicesRef }) {
  return (
    <div className="left">
      <Design />
      <div className="left-content">
        <h2>It{"'"}s time to seperate power and violence.</h2>
        <p>
          Let's start a World Peace, and search power somewhere else: in the
          wisdom and conscience of a great civilization;{" "}
          <strong>humanity.</strong>
        </p>

        <p>
          Here, we are introducing a new human right, and starting a progressive
          decentralization and peace-orientation in diplomacy; along with a
          proactive electorship paradigms for the 21st century.
        </p>

        <p>
          Trust that, when experienced together, they are effectively bring
          future, to closer.
        </p>

        <p>
          We believe in humanity, and we sincerely want humanity to believe in
          itself too. <br></br><br></br> A World Peace is already on the horizon in some decades, in its natural pace. 
          <br></br>
          However, we want to catalyze that. This is the sole purpose of our efforts. 
          <br></br> <br></br> <strong>Now is the new future. And</strong> the power is,<strong> you.</strong>
        </p>
        <p></p>

        {/* <div className="learn-more">
          <a
            href="https://docs.google.com/document/d/1sWWbXOJSf5UdsJr79uQChGEDaFI9cdI-5KSFCARqwoE/"
            target={"_blank"}
            rel="noreferrer"
          >
            Read the short paper
          </a>
        </div> */}

        {/* 
				<p>
					Let's live and leave a priceless legacy; namingly, <strong>a World Peace through Equality and Equity</strong> .
				</p> */}

        {/* <div className="learn-more">
          <Button
            text1="Learn "
            text2="more"
            onClick={() => alert("You clicked button")}
          />
        </div> */}
        <div
          className="scroll-down"
          onClick={() => servicesRef.current.scrollIntoView()}
        >
          <span> {">"} let's go</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;
