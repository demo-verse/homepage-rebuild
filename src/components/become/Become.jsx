import "./Become.css";
// import aNewRight from "../../images/our_right_to_make_peace_and_trust.png";
import { forwardRef } from "react";

const Become = forwardRef(({ design, circles, circlesOfPeaceButton }, ref) => {
  return (
    <div className="become-bg">
      {design}
      <div className="wrapper">
        <div className="become" id="become" ref={ref}>
          <div className="become-content">
            <div className="become-text-left">
              <div className="become-text-right">
                <div className="community-links"></div>

                <h2>
                  What is blockchain, how and why it is @ <br></br> the core of
                  a World Peace solution proposal?
                </h2>
                <div>
                  <p>
                    <strong>As Generation Peace, </strong>
                    the multi-generation of this era, the stage is ours now.
                    <br></br>
                    <br></br> All we need is to accumulate common sense, will
                    and intentions, and make them observable, via persisting
                    them transparently and resiliently.
                    <br></br>
                    <br></br>
                    <p>
                      Let{"'"}s get{" "}
                      <a
                        href="https://youtu.be/lBhZR4Vf6jg?t=475"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        a well explained intro{" "}
                      </a>{" "}
                      on what this blockchain and a distributed ledger for
                      consensus is all about, from Juan Benet, the creator of
                      IPFS and Filecoin.
                      <br></br> <br></br>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/lBhZR4Vf6jg?start=475"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </p>
                    We've so far focused using the context-aware capacity of
                    this decentralised ledger technology.
                    <br></br>
                    <br></br>
                    This project, demoVerse, since late January 2022, have been
                    developed in a design-thinking process, and we've discovered
                    new perspectives and imagined better; as we were building a
                    proof of concept, a peacemaker App on a blockchain test
                    network:{" "}
                    <a
                      href="https://expressionsofpeace.org"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Expressions of Peace.{" "}
                    </a>
                  </p>

                  <p>
                    @
                    <a
                      href="https://www.youtube.com/channel/UCqtm34_hfBCSnFr03KgqUSg"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Youtube channel,
                    </a>{" "}
                    you can see the demo videos, introducing the making of{" "}
                    <a
                      href="https://www.youtube.com/watch?v=SaqKac-3ncM"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Expressions{" "}
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.youtube.com/watch?v=Z_9rQ6zqh1Q"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Acknowledgements
                    </a>{" "}
                    of Peace in action.
                    <br></br>
                    <br></br>
                    As of the Flow of Peace V2, We are moving towards using the{" "}
                    <a
                      href="https://orbis.club"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Orbis Protocol
                    </a>{" "}
                    and (re)interpret basic social media actions eg. post, like
                    and comment, in our context, a decentralized diplomacy.
                    <br></br>
                    <br></br>
                    Beware that, all of these social web3 interactions will be
                    public on{" "}
                    <a
                      href="https://orbis.club"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Ceramic Network
                    </a>{" "}
                    that's what Orbis Protocol is using under the hood. Our
                    platform has nothing to do with your data, it is planned to
                    be made publicly observable, through Ceramic's cerscan as
                    well, where the records of the changes to our data stream
                    made discoverable.
                    <br></br>
                    <br></br>
                    <a
                      href="https://cerscan.com/mainnet/stream/kjzl6cwe1jw1477ua0tg3h4rn1fzesmkmnzp4dpv40j0zlz25of23d6qhv0pj8y"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Here,
                    </a>{" "}
                    for example, in the body part of the content section, you
                    would see how your post/expression would become public. It
                    will not be kept on a private server. It is open to
                    everyone, and people that made those expressions, can always
                    change and delete as well.
                    <br></br>
                    <br></br>
                    Also have a look and read the proof of concept {"'s "}
                    <a
                      href="https://github.com/demo-verse/expressions-of-peace/tree/main/contracts"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      smart contract code,
                    </a>{" "}
                    developed using simple data structs with the initial
                    attributes that, as people, we provide, sign with our wallet
                    and write on blockchain, through our expressions and
                    acknowledgements.
                    <br></br>
                    <br></br>
                    You might notice, on{" "}
                    <a
                      href="https://github.com/demo-verse/expressions-of-peace/blob/main/contracts/ExpressionOfPeaceV3.sol"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ExpressionofPeaceV3 contract,
                    </a>{" "}
                    depending on the information we provide, a combination of
                    behaviours made imaginable and actionable:{" "}
                    <i>publicity/anonymity, and citizenship/world residency</i>.
                  </p>

                  <p>
                    <strong>That{"'"}s why,</strong> blockchain, and in a
                    broader sense, web3, has been the first tool we're using for
                    this purpose: to experience and share rights, along with
                    resources.
                    <br></br> <br></br>
                    We humbly want to start something we call, Peace Economy and
                    its incentives without asking for permission. We got that
                    permission already, by the living and the future generations
                    and their generosity.
                  </p>

                  <h2>~ Let{"'"}s gooooO! ~</h2>
                  <br></br>

                  <div className="circlesOfPeaceButton">{circlesOfPeaceButton}</div>

                  <i>
                    This whole thing, is all about boosting and observable,
                    resilient evolution of a self-legitimising flow, of peace.
                  </i>

                  <p>
                    <strong>
                      For all that, calling everyone to live and leave a
                      priceless legacy; namingly, a World Peace through Equality
                      and Equity
                    </strong>
                    .
                  </p>
                  <br></br>
                  <p>
                    World deserves the best, and we want the best for the world.
                    <br></br> <br></br>
                    <strong>& bests, in peace</strong>
                  </p>
                </div>
              </div>
              {/* <img src={aNewRight} alt="mobile" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Become;
