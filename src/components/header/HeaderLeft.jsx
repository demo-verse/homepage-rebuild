import { Button, Design } from "../../components";

function HeaderLeft({ servicesRef }) {
  return (
    <div className="left">
      <Design />
      <div className="left-content">
        <h2>
          It's time to seperate power and violence.
        </h2>
        <p>
          Let's start a World Peace, and better search power somewhere else: in the conscience
          and wisdom of a great civilization: <strong>Humanity.</strong>
        </p>

        {/* <p>
          Trust that, experiencing an observable, undeniable and
          unstoppable, legitimate power on standing equal on peace and trust making <strong>is possible</strong>.{" "}
        </p> */}
    
        <p>
         We believe in humanity, and need humanity to believe in itself.{" "}
         <strong>  World deserves the best & bests, in Peace. </strong>
        </p>

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
          <span> {">"} check it out</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;
