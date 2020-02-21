import React from 'react';
import config from '../config';

export default class SquadPage extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount()
        this.state = {
            currentSquad: []
        }
        this.squads = {};
    }

    onLoad = (data, team, error) => {
        if (data) {
            // const sheetData = data.data;
            // this.setState({ sheetData });
            this.squads[team] = data;
            if(team === 'bangalorebolts')
                this.setCurrentSquad(team);
        } else {
            // this.setState({ error });
        }
    };

    load(callback) {
        window.gapi.client.load("sheets", "v4", () => {
          window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.squadSheetId,
              range: "'Hyderabad Hunters'!A5:P"
            })
            .then(
              response => {
                var data = [];
                for(var i=1; i < response.result.values.length; ++i)  {
                    if (response.result.values[i].length == 0)
                        continue;
                    var player = {};
                    player.name = response.result.values[i][1];
                    player.games = '';
                    for(var j=8; j<=14; ++j) {
                        if(response.result.values[i][j] === 'Y' || response.result.values[i][j] === 'Yes' || response.result.values[i][j] === 'y'){
                            player.games += (response.result.values[0][j] + ', ');
                        }
                    }
                    if(player.games.length > 2)
                        player.games = player.games.substring(0, player.games.length - 2);
                    else
                        player.games = '-';
                    data.push(player);
                }
                callback(data,'hyderabad');
              },
              response => {
                callback(false, response.result.error);
              }
            );
            window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.squadSheetId,
              range: "'Delhi Smashers'!A5:P"
            })
            .then(
              response => {
                var data = [];
                for(var i=1; i < response.result.values.length; ++i)  {
                    if (response.result.values[i].length == 0)
                        continue;
                    var player = {};
                    player.name = response.result.values[i][1];
                    player.games = '';
                    for(var j=8; j<=14; ++j) {
                        if(response.result.values[i][j] === 'Y' || response.result.values[i][j] === 'Yes' || response.result.values[i][j] === 'y'){
                            player.games += (response.result.values[0][j] + ', ');
                        }
                    }
                    if(player.games.length > 2)
                        player.games = player.games.substring(0, player.games.length - 2);
                    else
                        player.games = '-';
                    data.push(player);
                }
                callback(data,'delhi');
              },
              response => {
                callback(false, response.result.error);
              }
            );
            window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.squadSheetId,
              range: "'Chennai Spartans'!A5:P"
            })
            .then(
              response => {
                var data = [];
                for(var i=1; i < response.result.values.length; ++i)  {
                    if (response.result.values[i].length == 0)
                        continue;
                    var player = {};
                    player.name = response.result.values[i][1];
                    player.games = '';
                    for(var j=8; j<=14; ++j) {
                        if(response.result.values[i][j] === 'Y' || response.result.values[i][j] === 'Yes' || response.result.values[i][j] === 'y'){
                            player.games += (response.result.values[0][j] + ', ');
                        }
                    }
                    if(player.games.length > 2)
                        player.games = player.games.substring(0, player.games.length - 2);
                    else
                        player.games = '-';
                    data.push(player);
                }
                callback(data,'chennai');
              },
              response => {
                callback(false, response.result.error);
              }
            );
            window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.squadSheetId,
              range: "'Mumbai City'!A5:P"
            })
            .then(
              response => {
                var data = [];
                for(var i=1; i < response.result.values.length; ++i)  {
                    if (response.result.values[i].length == 0)
                        continue;
                    var player = {};
                    player.name = response.result.values[i][1];
                    player.games = '';
                    for(var j=8; j<=14; ++j) {
                        if(response.result.values[i][j] === 'Y' || response.result.values[i][j] === 'Yes' || response.result.values[i][j] === 'y'){
                            player.games += (response.result.values[0][j] + ', ');
                        }
                    }
                    if(player.games.length > 2)
                        player.games = player.games.substring(0, player.games.length - 2);
                    else
                        player.games = '-';
                    data.push(player);
                }
                callback(data,'mumbai');
              },
              response => {
                callback(false, response.result.error);
              }
            );
            window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.squadSheetId,
              range: "'Bengaluru Bolts'!A5:N"
            })
            .then(
              response => {
                var data = [];
                for(var i=1; i < response.result.values.length; ++i)  {
                    if (response.result.values[i].length == 0)
                        continue;
                    var player = {};
                    player.name = response.result.values[i][1];
                    player.games = '';
                    for(var j=6; j<=12; ++j) {
                        if(response.result.values[i][j] === 'Y' || response.result.values[i][j] === 'Yes' || response.result.values[i][j] === 'y'){
                            player.games += (response.result.values[0][j] + ', ');
                        }
                    }
                    if(player.games.length > 2)
                        player.games = player.games.substring(0, player.games.length - 2);
                    else
                        player.games = '-';
                    if(player.name != undefined && player.name.length > 0)
                        data.push(player);
                }
                callback(data,'bangalorebolts');
              },
              response => {
                callback(false, response.result.error);
              }
            );
            window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.squadSheetId,
              range: "'Bengaluru Thunder'!A5:N"
            })
            .then(
              response => {
                var data = [];
                for(var i=1; i < response.result.values.length; ++i)  {
                    if (response.result.values[i].length == 0)
                        continue;
                    var player = {};
                    player.name = response.result.values[i][1];
                    player.games = '';
                    for(var j=6; j<=12; ++j) {
                        if(response.result.values[i][j] === 'Y' || response.result.values[i][j] === 'Yes' || response.result.values[i][j] === 'y'){
                            player.games += (response.result.values[0][j] + ', ');
                        }
                    }
                    if(player.games.length > 2)
                        player.games = player.games.substring(0, player.games.length - 2);
                    else
                        player.games = '-';
                    if(player.name != undefined && player.name.length > 0)
                        data.push(player);
                }
                callback(data,'bangalorethunder');
              },
              response => {
                callback(false, response.result.error);
              }
            );
        });
      }

    componentDidMount() {
        window.gapi.load("client", this.initClient);
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

    setCurrentSquad(team) {
        // this.state.currentSquad = this.squads[team];
        this.setState({ 'currentSquad': this.squads[team], 'team' : team });
    }

    render() {

        return (
            <div>
                <img src={'/' + this.state.team + '.png'} className="currentTeamLogo" alt="logo"></img>
                <div id="squadBar">
                    <a className= {this.state.team === 'bangalorebolts' ? 'activeTeamName' : "teamName"} onClick={() => this.setCurrentSquad('bangalorebolts')}>Bangalore Bolt</a>
                    <a className= {this.state.team === 'bangalorethunder' ? 'activeTeamName' : "teamName"} onClick={() => this.setCurrentSquad('bangalorethunder')}>Bangalore Thunder</a>
                    <a className= {this.state.team === 'hyderabad' ? 'activeTeamName' : "teamName"} onClick={() => this.setCurrentSquad('hyderabad')}>Hyderabad</a>
                    <a className= {this.state.team === 'delhi' ? 'activeTeamName' : "teamName"} onClick={() => this.setCurrentSquad('delhi')}>Delhi</a>
                    <a className= {this.state.team === 'chennai' ? 'activeTeamName' : "teamName"} onClick={() => this.setCurrentSquad('chennai')}>Chennai</a>
                    <a className= {this.state.team === 'mumbai' ? 'activeTeamName' : "teamName"} onClick={() => this.setCurrentSquad('mumbai')}>Mumbai</a>
                </div>
                <div className="squad">
                    { this.state.currentSquad && this.state.currentSquad.length > 0 ? this.state.currentSquad.map(sq => {
                        return (
                            <div className="squadBox" key={sq.name + sq.games}>
                                <div className="names">{sq.name} </div>
                                <div className="games"> {sq.games} </div>
                            </div>
                        )
                    }):<h1>Loading squads...</h1>
                    }
                </div>
            </div>
        )
    }
}