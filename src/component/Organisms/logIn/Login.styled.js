import { styled } from '@mui/system';

const MainContainer = styled("p")({
  color: "red",
  margin:" 10px auto",
  textAlign: "center",
  fontFamily: "sans-serif",
 color:" #228B22",
  textAlign:" center",
  maxWidth:" 300px",
  position: "relative",
  
  "&::before":{
    content:`''`,
    display:" block",
    width:" 130px",
    height: "1px",
    background:"#656D79",
    left: "0",
    top: "50%",
    position: "absolute",

  },
  "&::after":{
    content:`''`,
    display:" block",
    width:" 130px",
    height: "1px",
    background:"#656D79",
    right: "0",
    top: "50%",
    position: "absolute",
  } 

  
});

const Formdiv = styled("div")({
  width:"80%",
  textAlign:"center",
  alignItems:"center",
  justifyContent:"center",
});

const Parentbox =styled("box")({
  display:"flex",
  justifyContent:"center",
  textAlign:"center",
  alignItems:"center",
 


})
const BoxImg = styled("img")({
  width:"40px",
  height:"40px"
})
const Imagediv = styled("div")({
  width:"50px",
  height:"50px",
  background:"#EBEBEB",
  margin:"20px",
  padding:"10px",
  boxShadow:" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
})

export { MainContainer ,Formdiv, Parentbox ,BoxImg,Imagediv};
