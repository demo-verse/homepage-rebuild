// import rightBackground from '../../images/image2.jpg';
// import humanImage from '../../images/image1.png';
// import { headerRightCountries } from './HeaderData';
// import { Circles } from '../../components';

function HeaderRight() {
  return (
    <div className="right">
      <div className="wrapper">
        <div className="intro-song">
			{/* wax tailor - phonovisions symphonic orchestra */}
          {/* <iframe
            width="94%"
            height="420"
            src="https://www.youtube.com/embed/3Wysn_hJ7IQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
 <img
              src="https://i.imgur.com/mp0bo76.png"
              width={"90%"}
              alt="logo"
            ></img>

			
{/* <br></br>
          <br></br>
      
          <iframe
            title="readAloud text2speech"
            width="80%"
            height="70"
            scrolling="yes"
            allow="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1372123906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
    <hr style={{ width: "80%" }}></hr>
          <i>
            You can also listen to this whole page
          </i>
          <hr style={{ width: "80%" }}></hr>
          <br></br> */}
		
		  <p>
       
	   
	  </p>
		{/* here comes the sun - the beatles */}
          {/* <iframe
            src="https://www.youtube.com/embed/KQetemT1sWc"
            width="94%"
            height="540"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
		{/* come together - the beatles */}
{/* 
<iframe
                width="100%"
                height="540"
                src="https://www.youtube.com/embed/45cYwDMibGo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe> */}

        </div>
      </div>
      {/* <div className="our-right-poster">

<img src="https://i.imgur.com/bBzSBpk.png"/>

</div> */}

      {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					id="path1"
					d="M50.2,-74.9C64.7,-68.8,75.8,-54.2,82.4,-38.1C88.9,-22,91,-4.3,82.3,7.3C73.6,19,54.2,24.6,43,37.1C31.9,49.7,29,69.2,19,78.6C8.9,87.9,-8.2,87.1,-22.2,80.6C-36.1,74.2,-46.9,62.1,-50.9,48.9C-54.9,35.7,-52.2,21.4,-56.6,6.6C-61,-8.1,-72.7,-23.3,-69.4,-32.1C-66,-40.9,-47.7,-43.3,-33.6,-49.5C-19.6,-55.8,-9.8,-65.9,4,-72.2C17.9,-78.5,35.7,-80.9,50.2,-74.9Z"
				/>
				<defs>
					<clipPath id="rightImg">
						<path
							id="path2"
							d="M50.2,-74.9C64.7,-68.8,75.8,-54.2,82.4,-38.1C88.9,-22,91,-4.3,82.3,7.3C73.6,19,54.2,24.6,43,37.1C31.9,49.7,29,69.2,19,78.6C8.9,87.9,-8.2,87.1,-22.2,80.6C-36.1,74.2,-46.9,62.1,-50.9,48.9C-54.9,35.7,-52.2,21.4,-56.6,6.6C-61,-8.1,-72.7,-23.3,-69.4,-32.1C-66,-40.9,-47.7,-43.3,-33.6,-49.5C-19.6,-55.8,-9.8,-65.9,4,-72.2C17.9,-78.5,35.7,-80.9,50.2,-74.9Z"
						/>
					</clipPath>
				</defs>
				<image
					href={rightBackground}
					alt="right-image"
					clipPath="url(#rightImg)"
				/>
				<path
					id="path3"
					d="M50.2,-74.9C64.7,-68.8,75.8,-54.2,82.4,-38.1C88.9,-22,91,-4.3,82.3,7.3C73.6,19,54.2,24.6,43,37.1C31.9,49.7,29,69.2,19,78.6C8.9,87.9,-8.2,87.1,-22.2,80.6C-36.1,74.2,-46.9,62.1,-50.9,48.9C-54.9,35.7,-52.2,21.4,-56.6,6.6C-61,-8.1,-72.7,-23.3,-69.4,-32.1C-66,-40.9,-47.7,-43.3,-33.6,-49.5C-19.6,-55.8,-9.8,-65.9,4,-72.2C17.9,-78.5,35.7,-80.9,50.2,-74.9Z"
				/>
			</svg>
			<div className="right-content">
				<Circles />
				<div className="human">
					<div style={{ backgroundImage: `url(${humanImage})` }}></div>
					<img src={humanImage} alt="human" />
				</div>
				<div className="flags">
					{headerRightCountries?.slice(0, 6).map((country, index) => (
						<div
							key={index}
							className="flag-box"
							style={{ transform: `rotate(${index * 60}deg)` }}
						>
							<div
								className="flag"
								style={{
									transform: `scale(${
										index % 2 !== 0 ? '0.9' : '1'
									}) translate(-50%, 0) rotate(${index * -60}deg)`,
								}}
							>
								<img src={country.image} alt="flag" />
							</div>
						</div>
					))}
				</div>
			</div> */}
    </div>
  );
}

export default HeaderRight;
