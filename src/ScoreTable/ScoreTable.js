import React from 'react';

export default class ScoreTable extends React.Component {
    
    createTable () {
        if(this.props.data){
            let tableData = this.props.data.slice(1).map( (row,i) => {
            return <tr key={i}>{ row.map( (data, j) => {
                return <td key={j}>{data}</td>
            } ) }</tr>
            });
            let tableHeader = this.props.data.slice(0,1)[0].map( (row,i) => {
            return <th key={i}>{row}</th>;
            });
            return (
            <table>
                <thead>{tableHeader}</thead>
                <tbody>{tableData}</tbody>
            </table>
            );
        }
    }
    
    render () {
        return (
        <div>{this.createTable()}</div>
        )
    }
}