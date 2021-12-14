import API from "../Axios/Api";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
//import { Route,Routes, Link ,BrowserRouter as Router} from 'react-router-dom' ;

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
    return (
        <>
        <Link to ="/Add">Ajouter produit</Link>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Reference</th>
                    <th>Designation</th>
                    <th>marque</th>
                    <th>prix</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    listProd.map((val,ind)=>{
                        return <tr key={ind}>
                            <td>{val.reference}</td>
                            <td>{val.designation}</td>
                            <td>{val.marque }</td>
                            <td>{val.prix }</td>
                            <td><img src={val.image} alt="" width="100"/></td>
                            <td><Button variant="contained" color="secondary" size="Medium"  onClick={()=>{deleteProd(val.id)}}>Supprimer</Button>
                            <button><Link to={ `/edit/${val.id}`}> Edit</Link></button></td>
                            </tr>
                    })

                    
                }
            </tbody>
        </table>
        </>
    );
}
export default ListProduits;