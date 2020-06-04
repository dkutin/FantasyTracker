import React, {Component} from "react";

class Stats extends Component {
    render() {

        if (this.props.data) {
            var count = 0;
            var playerStats = this.props.data.map(function (data) {
                if (count === 2) {
                    return ();
                }
                count++;
                return (<span className="stat-entry">
                    <strong>Week {data.week} </strong> <br/> Pts: {data.pts} | Ast: {data.ast} | Reb: {data.reb} | Blk: {data.blk} | Stl: {data.stl} | TO: {data.trn}
                    <br/><br/>
                </span>);
            });
            console.log(this.props.data);

        }

        return (
            <div className="player-stats">
                {playerStats}
            </div>);
    }
}

export default Stats;

