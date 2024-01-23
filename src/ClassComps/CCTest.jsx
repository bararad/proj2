import { Component } from "react";

export default class CCTest extends Component {
    constructor(props) {
        super(props);
        this.lastname;
        this.firstname;
        this.grade;
        this.state = { firstp: "" };
        this.state = { secondp: "" };
        this.state = { thirdp: "" };
        this.state = { fourthp: "" };
        this.state={rescolor:"green"};

    }
    f1 = (e) => {
        if (e.target.id == "first") {
            this.setState({ firstp: "enter first name" });

        }
        if (e.target.id == "last") {
            this.setState({ secondp: "enter last name" });
        }
        if(e.target.id == "grade")
        {
            this.setState({ thirdp: "enter grade" });
        }
    }
    f2 = (e) => {
        this.setState({ firstp: "" });
        this.setState({ secondp: "" });
        this.setState({ thirdp: "" });
       
        if(e.target.id == "grade" ){
            if(Number(e.target.value)>555)
            this.setState({fourthp:"You've been accepted to school!"})
            else
            {this.setState({fourthp:"Sorry, try again next year"});
            this.setState({rescolor:"red"})}
        }
    }




    render() {

        return (
            <div style={{ border: "solid black 2.5px", padding: 20 ,margin:20}}>
                <p style={{ color: "red" }}>{this.state.firstp}</p>
                firstname: <input type="text" id="first" onFocus={this.f1} onBlur={this.f2} /> <br /><br />
                <p style={{ color: "red" }}>{this.state.secondp}</p>
                lastname: <input id="last" type="text" onFocus={this.f1} onBlur={this.f2} /><br /><br />
                <p style={{ color: "red" }}>{this.state.thirdp}</p>
                Psyco grade: <input id="grade" type="text" onFocus={this.f1} onBlur={this.f2} />
                <p style={{color:this.state.rescolor}}>{this.state.fourthp} </p>
            </div>
        )
    }

}