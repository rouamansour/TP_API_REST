import API from "./Axios/Api";
import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(){
    const [ListProduit,setListProd]=useState([]);
    useEffect(()=>{
        API.get("/produits").then((res)=>{ console.log(res.data)
                     setListProd(res.data)
        })

    },[])
    return (
      ListProduit.map((val,ind)=>{
          return (
        <div class="card" style={{marginLeft:100,display:'inline-block',width:410,height:550,marginTop:50,borderWidth: 3,borderColor: '#42A5F5'}}>
          <center>
          <img src={val.image} style={{width:290,marginTop:15,height:350}}  alt="..."/>
          <div class="card-body">
            <ul class="card-body" style={{listStyleType: 'none'}}>
              <li class="card-title"><p><b>Reference :</b> {val.reference}</p></li>
              <li class="card-text"><p><b>designation :</b> {val.designation}</p></li>
              <li class="card-text"><p><b>Prix :</b> {val.prix}</p></li>
            </ul>
          </div>
          </center>
        </div>
      )
      })
    )
}
export default Home;


