import { Component } from "react";

export default class CCTable extends Component {

    constructor(props) {
        super(props);
        this.state={tWidth:"100%"};
    }

    minimize = () => {
        this.setState({tWidth:"50%"})

    }
    maximize = () => {
        this.setState({tWidth:"100%"})

    }
    render() {
        return (
            <div >
                <table style={{border:"1px solid black",borderCollapse:"collapse", width:this.state.tWidth}} onClick={this.minimize} onDoubleClick={this.maximize}>
                    <tr style={{border:"1px solid black"}}>
                        <td style={{border:"1px solid black"}}>1</td>
                        <td style={{border:"1px solid black"}}>2</td>
                        <td style={{border:"1px solid black"}}>3</td>
                    </tr>
                    <tr style={{border:"1px solid black"}}>
                        <td style={{border:"1px solid black"}}>4</td>
                        <td style={{border:"1px solid black"}}>5</td>
                        <td style={{border:"1px solid black"}}>6</td>
                    </tr>
                </table>
            </div>
        )
    }
}