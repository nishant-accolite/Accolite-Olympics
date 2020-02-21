import React from 'react';
import config from '../config';
import ScoreTable from '../ScoreTable/ScoreTable';
import MyGallery from './MyGallery';
import SquadPage from './SquadPage';

class Section extends React.Component {

    constructor(props){
        super(props);
        // this.componentDidMount()
        this.state = {
            data : ""
        }
    }
    
    // onLoad = (data, error) => {
    //     if (data) {
    //       const sheetData = data.data;
    //       this.setState({ sheetData });
    //     } else {
    //       this.setState({ error });
    //     }
    //   };

    render() {
        return (
            <div className="container">
                <section id="home">
                  <div>
                  <div className="heading">Accolite Olympics started with a thought of Connecting People!</div>
                  
                  <div className="content">It was a unique initiative started in the year 2018 with an objective of  employee engagement beyond work. Sports is a powerful medium that can bring corporate employees together as a close-knit team.	</div>

                  <div className="heading">Accolite Olympics Trophy is a rolling trophy!</div> 
 
                  <div className="content">The prestigious overall champions trophy was won by Hyderabad & Bengaluru in 2018 & 2019 respectively. Last year all players were asked to write down why they would want to win the trophy and attach the write up as pride rolls to the trophy to remind our athletes that
                  we are strength and face of Accolite Family which always stands together.	 
                  </div>

                  <div className="heading">
                    Accolite Olympics used to be known as Inter-Location sports meet  
                  </div>
                  
                  <div className="content">
                    The 1st edition of this event was named as Inter-location Sports. It was renamed as Accolite       
                    Olympics from the 2nd edition.  After a lot of efforts, a new and eye catching  logo for Accolite Olympics 2020 was finalized this year.     		
                    <br/>
                    In the first edition of the event in 2018, Delhi Smashers, Bengaluru Blokechains (was renamed as Bengaluru Bolts in 2019) and Hyderabad Strikers competed for the coveted trophy. In 2019, Mumbai City & Chennai Spartans entered the arena, along with other three teams, to make the event more exciting and challenging. With the addition of Bengaluru Thunder, the number of teams in 2020 has gone up to five making the event more scintillating and competitive. 	
                    <br/>
                    It was a hard-fought battle for Cricket, Futsal, Carrom, Table Tennis, Badminton and Online Gaming (PUBG) in 2019. In the 2nd edition, Women Cricket was introduced and Delhi Smashers won it. In 2020, again three new games namely Throwball, Volleyball and Athletics - Track & Throw have been introduced. Considering the safety of the players as many of them got injured last year, Futsal has been dropped from the event.There is also an element of surprise in “Fun Games”.	  
                  </div>  
                  </div>
                </section>
                <section id="squads">
                  <SquadPage />
                </section>
                <section id="schedule">
                  To Be Announced
                </section>
                <section id="scores">
                    {/* <button onClick={() => this.getXLSXData()}>Update Scores</button> */}
                    <ScoreTable data={this.state.sheetData} />
                    {/* <div>{this.state.sheetData}</div> */}
                </section>
                <section id="gallery">
                  <MyGallery></MyGallery>
                </section>
                <section id="contact">
                  <div className="companyContact">
                    <div className="heading">Accolite India Software Pvt Ltd</div>
                    <br/> &nbsp; Address: 2nd Floor, Umiya Business Bay, Tower 1, Cessna Business Park, Marathahalli-Sarjapur Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103
                    <br/> <br/> &nbsp; Phone: 080 4091 0233
                  </div>
                  <div className="horizontalBreaker">
                    &nbsp;
                  </div>
                  <div className="induvidualContact">
                    <div className="heading">Antony Godwin</div>
                    &nbsp; antony.godwin@accoliteindia.com
                    <br/>&nbsp; 8056605905
                    <br/><br/><div className="heading">Manasa K</div>
                    &nbsp; manasa.k@accoliteindia.com
                    <br/>&nbsp; 8056605905
                    <br/><br/><div className="heading">Naveen Kumar Kandasamy</div>
                    &nbsp; naveenkumar.kandasamy@accoliteindia.com
                    <br/>&nbsp; 8056605905
                  </div>
                </section>
            </div>
        );
    }

    // componentDidMount() {
    //     window.gapi.load("client", this.initClient);
    // }

    // load(callback) {
    //     window.gapi.client.load("sheets", "v4", () => {
    //       window.gapi.client.sheets.spreadsheets.values
    //         .get({
    //           spreadsheetId: config.spreadsheetId,
    //           range: "Sheet1!B:D"
    //         })
    //         .then(
    //           response => {
    //             const data = response.result.values;
    //             callback({
    //               data
    //             });
    //           },
    //           response => {
    //             callback(false, response.result.error);
    //           }
    //         );
    //     });
    //   }

    // initClient = () => {
    //     // 2. Initialize the JavaScript client library.
    //     window.gapi.client
    //         .init({
    //             apiKey: config.apiKey,
    //             // Your API key will be automatically added to the Discovery Document URLs.
    //             discoveryDocs: config.discoveryDocs
    //         })
    //         .then(() => {
    //             // 3. Initialize and make the API request.
    //               this.load(this.onLoad);
    //             // getXLSXData(this.onLoad)
    //         });
    // };

}

export default Section;