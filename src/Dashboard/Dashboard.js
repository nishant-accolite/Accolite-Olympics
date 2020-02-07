import React from 'react';
import Navbar from '../Navbar/Navbar';
import Section from '../Section/Section';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tabMap : ["home", "news", "schedule", "scores", "contact"],
            curIdx : 0
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <Section />
            </div>
        );
    }

    scrolla(p) {
        this.state.curIdx = (this.state.curIdx + p) >=0 && (this.state.curIdx + p) <= 4 ? this.state.curIdx + p : this.state.curIdx;
        this.scrollTo(this.state.tabMap[this.state.curIdx]);
    }
    scrollTo(hash) {
        window.location.hash = "#" + hash;
    }
}

export default Dashboard;