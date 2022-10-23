import { Design } from "../../components";

function HeaderLeft({ servicesRef }) {
  return (
    <div className="left">
      <Design />
      <div className="left-content">
        <h2>It{"'"}s time to seperate power and violence.</h2>
        <p>
          Let's start a World Peace, and search power somewhere else: in the
          wisdom and conscience of a great civilization;{" "}
          <strong>humanity, a unity of Generation Peace.</strong>
        </p>

        <p>
          Here, we are decentralising diplomacy, and augment that with a new
          human right, and soon, a proactive electorship that potentially bring
          future, to closer.{" "}
        </p>
        <p>
          <strong>Now is the new future.</strong>
        </p>
        <p>
          We believe in humanity, and we sincerely want humanity to believe in
          itself too.{" "}
        </p>
        <p>
          The power, <strong>is you.</strong>
        </p>

        <div className="learn-more">
          <a
            href="https://docs.google.com/document/d/1sWWbXOJSf5UdsJr79uQChGEDaFI9cdI-5KSFCARqwoE/"
            target={"_blank"}
            rel="noreferrer"
          >
            Read the short paper
          </a>
        </div>

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
