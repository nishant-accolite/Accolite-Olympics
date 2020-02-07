import React from 'react';
import config from '../config';
import ScoreTable from '../ScoreTable/ScoreTable';

class Section extends React.Component {

    constructor(props){
        super(props);
        this.componentDidMount()
        this.state = {
            data : ""
        }
    }
    
    onLoad = (data, error) => {
        if (data) {
          const sheetData = data.data;
          this.setState({ sheetData });
        } else {
          this.setState({ error });
        }
      };

    render() {
        return (
            <div className="container">
                <section id="home">
                HOME --------  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis. Egestas sed sed risus pretium. Eu turpis egestas pretium aenean pharetra. Tempus urna et pharetra pharetra massa massa ultricies. Senectus et netus et malesuada fames ac turpis egestas maecenas. Maecenas pharetra convallis posuere morbi. Vulputate ut pharetra sit amet aliquam id diam. Leo integer malesuada nunc vel risus commodo viverra. Vehicula ipsum a arcu cursus vitae congue mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Massa massa ultricies mi quis. Dignissim sodales ut eu sem integer. Sed augue lacus viverra vitae congue eu.
                </section>
                <section id="news">
                NEWS -------- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis. Egestas sed sed risus pretium. Eu turpis egestas pretium aenean pharetra. Tempus urna et pharetra pharetra massa massa ultricies. Senectus et netus et malesuada fames ac turpis egestas maecenas. Maecenas pharetra convallis posuere morbi. Vulputate ut pharetra sit amet aliquam id diam. Leo integer malesuada nunc vel risus commodo viverra. Vehicula ipsum a arcu cursus vitae congue mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Massa massa ultricies mi quis. Dignissim sodales ut eu sem integer. Sed augue lacus viverra vitae congue eu.
                </section>
                <section id="schedule">
                SCHEDULE -------- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis. Egestas sed sed risus pretium. Eu turpis egestas pretium aenean pharetra. Tempus urna et pharetra pharetra massa massa ultricies. Senectus et netus et malesuada fames ac turpis egestas maecenas. Maecenas pharetra convallis posuere morbi. Vulputate ut pharetra sit amet aliquam id diam. Leo integer malesuada nunc vel risus commodo viverra. Vehicula ipsum a arcu cursus vitae congue mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Massa massa ultricies mi quis. Dignissim sodales ut eu sem integer. Sed augue lacus viverra vitae congue eu.
                </section>
                <section id="scores">
                    {/* <button onClick={() => this.getXLSXData()}>Update Scores</button> */}
                    <ScoreTable data={this.state.sheetData} />
                    {/* <div>{this.state.sheetData}</div> */}
                </section>
                <section id="contact">
                CONTACT US -------- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt vitae semper quis. Egestas sed sed risus pretium. Eu turpis egestas pretium aenean pharetra. Tempus urna et pharetra pharetra massa massa ultricies. Senectus et netus et malesuada fames ac turpis egestas maecenas. Maecenas pharetra convallis posuere morbi. Vulputate ut pharetra sit amet aliquam id diam. Leo integer malesuada nunc vel risus commodo viverra. Vehicula ipsum a arcu cursus vitae congue mauris. Pulvinar elementum integer enim neque volutpat ac tincidunt. Massa massa ultricies mi quis. Dignissim sodales ut eu sem integer. Sed augue lacus viverra vitae congue eu.
                </section>
            </div>
        );
    }

    componentDidMount() {
        window.gapi.load("client", this.initClient);
    }

    load(callback) {
        window.gapi.client.load("sheets", "v4", () => {
          window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.spreadsheetId,
              range: "Sheet1!B:D"
            })
            .then(
              response => {
                const data = response.result.values;
                callback({
                  data
                });
              },
              response => {
                callback(false, response.result.error);
              }
            );
        });
      }
    
    
    getXLSXData() {
        
    }

    initClient = () => {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
            .init({
                apiKey: config.apiKey,
                // Your API key will be automatically added to the Discovery Document URLs.
                discoveryDocs: config.discoveryDocs
            })
            .then(() => {
                // 3. Initialize and make the API request.
                  this.load(this.onLoad);
                // getXLSXData(this.onLoad)
            });
    };

}

export default Section;