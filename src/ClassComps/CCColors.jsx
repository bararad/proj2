import { Component } from "react";

export default class CCColors extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "white" };
    }

    Colorchange = (e) => {
        this.setState({ color: e.target.id })


    }



    render() {
        return (
            <div id="colordiv" style={{ height: 300, width: 300, backgroundColor: this.state.color,margin:50 }} >
                <br />
                <button style={{ margin: 10 }} id="black" onClick={this.Colorchange}>Black</button>
                <button style={{ margin: 10 }} id="blue" onClick={this.Colorchange}>Blue</button><br />
                <button style={{ margin: 10 }} id="brown" onClick={this.Colorchange}>Brown</button>
                <button style={{ margin: 10 }} id="orange" onClick={this.Colorchange}>Orange</button><br />
                <button style={{ margin: 10 }} id="red" onClick={this.Colorchange}>Red</button>
                <button style={{ margin: 10 }} id="pink" onClick={this.Colorchange}>Pink</button><br />
                <button style={{ margin: 10 }} id="purple" onClick={this.Colorchange}>Purple</button>
                <button style={{ margin: 10 }} id="yellow" onClick={this.Colorchange}>Yellow</button>
            </div>)
    }

}