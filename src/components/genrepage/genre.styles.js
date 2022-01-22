import styled from "styled-components";

export const Top=styled.div`
display: flex;
max-width:var(--maxwidth);
justify-content: space-between;
align-items:center;
background-color:#a7dbeb;
border: 2px groove 0x8BDBC9;
height: 100px;
h1{
    color:red;
}
`;
export const Bg=styled.div`
width:100%;
background: url(${({ image }) => image});
background-size: cover;
background-position: center;
position:relative;
padding: 40px 20px;

}
`;

export const Middle=styled.div`
display:flex;
z-index:4;
background-color: rgb(26, 25, 25,0.8);
font-size:16px;
margin:30px 30px 30px 30px;
height:500px;
border-radius:3px;
justify-content:center;
border:2px groove red;
overflow:auto;
 @media screen and (max-width: 500px) {
    font-size: 15px;
}
h2{
    line-height:1.4;
    z-index:5;
    color:white
}
.gc{
    background-color:rgb(247, 163, 169,0.4);
    width:300px;
    height:30px;
    color:rgb(36, 204, 255);
    border-radius:6px;
    position:absolute;
    align-self:flex-end;
    padding-left:70px;
    padding-top:5px;
}
`;

export const End=styled.div`
display:flex;
background-color:rgb(190, 219, 127,0.8);
flex-direction:column;
justify-content:space-between;
li{
    display:grid;
    font-size:20px;
    font-style:italic;
    background-color:rgb(204, 222, 166);
    color:rgb(132, 25, 181);
    margin-right:250px;
    border-radius:5px;
    border: 2px groove green;
    justify-items:center;
    text-decoration: none;
}
li:hover{
    background-color:rgb(45, 107, 63);
}
`;