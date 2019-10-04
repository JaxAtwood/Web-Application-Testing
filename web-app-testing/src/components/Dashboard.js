import React, { useState } from "react";
import { Dash, Cards, Grid, Counter, Hit } from "./Styles";
  
const Dashboard = () => {
    const [number, setNumber] = useState(0);
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    // const [foul, setFoul] = useState(0);

    function balls(ball) {
        if(ball === 3) {
            setStrike(0);
            setBall(0);
          } else {
            setBall(ball + 1);
          }
    }

    function strikes(strike) {
        if(strike === 2) {
            setStrike(0);
            setBall(0);
          } else {
            setStrike(strike + 1);
          }
    }

    function foul(strike) {
        if (strike<= 1) {
            setStrike(strike + 1);
          } else {
            setStrike(strike);
          }
    }

    function hit() {
        setStrike(0);
        setBall(0);
    }

  return (
    <div data-testid="divtag" className="fancy-div">
    <Dash className="testDiv">
        <h3>DASHBOARD JS COMPONENT</h3>
​
        <Grid>
            <Cards>
                <Counter className="counter">{ball}</Counter>
                <button className="testButton" onClick= {() => setBall(balls)}>BALL</button>
                <p>Ball Count: 0 after 4 balls</p>
            </Cards>
​
            <Cards>
                <Counter className="counter">{strike}</Counter>
                <button className="testButton" onClick= {() => setStrike(strikes)}>STRIKE</button>
                <p>Strike Count: 0 after 3 strikes</p>
            </Cards>
​
​
            <Cards>  
                <Hit className="counter">
                <button className="testButton" onClick= {() => setStrike(foul)}>FOUL</button>
                </Hit>
                <p>Foul Count: up to 2 fouls, also increases strike count?</p>
            </Cards>
​
            <Cards>
                <Hit className="counter">
                <button className="testButton" onClick= {() => hit()}>HIT</button>
                </Hit>
                <p>Hit Count: no params defined in the ReadMe...</p>
            </Cards>
        </Grid>
    </Dash>
    </div>
  );
};

export default Dashboard;