import styled from "styled-components";

const Dash = styled.div `
    border: red solid 2px;
    display: flex;
    flex-direction: column;
    margin: 30px;
`
const Disp = styled.div `
    margin: 30px;
    border: solid blue 2px;
`
const Cards = styled.div `
    border: solid 2px green;
    width: 50%;
    margin: 0 auto;
    // padding-top: 10px;
    // padding-bottom: 10px;
    // display: flex;
    // justify-content: center;
    // align-content: center;
`
const Grid = styled.div `
    border: orange 2px dashed;
    margin: 30px;
`
const Counter = styled.div `
    border: solid 1px black;
    width: 15px;
    text-align: center;
    height: 20px;
    margin: 0 auto;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
`
const Hit = styled.div `
    // border: magenta 2px dotted;
    margin: 0 auto;
    padding: 10px;
    width: 10%;
`
export { Dash, Disp, Cards, Grid, Counter, Hit }