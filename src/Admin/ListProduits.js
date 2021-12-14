import API from "../Axios/Api";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
//import { Route,Routes, Link ,BrowserRouter as Router} from 'react-router-dom' ;
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';



function ListProduits(){
    const [listProd,setListProd]=useState([]);
    useEffect(()=>{
        API.get("/produits").then((res)=>{ 
            setListProd(res.data)
    })
    });
    const deleteProd=(id)=>{
        API.delete('/Produits/'+ id)
        .then ((res)=> {
            console.log("successfully deleted")
        }).catch((error)=>{
            console.log(error)
        })
    }

    const columns = [
        {
          label: "Reference",
          name: "reference"
        },
        {
          label: "Designation",
          name: "designation"
        },
        {
            label: "Picture",
            name: "image",
            options:{
                customBodyRender:(image)=>(
                    <img
                    style={({height:100,borderRadius:'50%'})}
                    src={image} alt=""/>
                )
            }
          },
          {
              label: "Modification",
              name: "id",
              options:{
                  customBodyRender:(id)=>(
                    <Button variant="contained" color="primary" size="Medium" ><Link to ={`/edit/${id}`} style={{color:"white" }}>Edit</Link></Button>
                  )
              }
            },
            {
                label: "Deletion",
                name: "id",
                options:{
                    customBodyRender:(id)=>(
                        <Button variant="contained" color="secondary" size="Medium"  onClick={()=>{deleteProd(id)}}>Delete</Button>
                    )
                }
              }
      ]
    return (
        <>  
        <ThemeProvider theme={createTheme()}> 
               <MUIDataTable
                 title="List Product"
                 data={listProd}
                 columns={columns}
               />
        </ThemeProvider> 

 </> 
        
    );
}
export default ListProduits;