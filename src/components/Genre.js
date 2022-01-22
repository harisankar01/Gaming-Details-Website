import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Genre from './genrepage/index'
import API from '../API';
const Genrepage = () => {
  let name=useParams();
   const [genred, setgenred] = useState({});
   const [games, setgames] = useState([]);
   useEffect(()=>{
 const genredetail= fetching(name).then((vars)=>{
   setgenred(vars);
     })},[]);
     const id=genred.id;
     useEffect(async()=>{
        await API.genregames().then((values)=>{
          for (let i = 0; i < 20; i++) {
             if(values.results[i].id==parseInt(id)){
              setgames(values.results[i].games);
             }
          }
        })
     },[id])
  return (
      <Genre ge={name} detail={genred}
      games={games}
      ></Genre>
  )
};

const fetching=async(name)=>{
  let genredetail;
 try{
  genredetail= await API.fetchgenre(name.gname);
  }catch(error){console.log(error);}
  return await genredetail;
}

export default Genrepage;