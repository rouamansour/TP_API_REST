import { useState } from "react";
import API from "../Axios/Api";
import {useNavigate} from "react-router-dom";
import Button from '@material-ui/core/Button';
//import { createTheme } from '@mui/material/styles';


function AddProduit() {
    

    const [reference, Setreference] = useState("");
    const [designation, Setdesignation] = useState(""); 
    const [marque, Setmarque] = useState("");
    const [prix, SetPrix] = useState("");
    const [image, Setimage] = useState();
    const [inputFile, SetinputFile] = useState("");

    const navigate=useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const objetProduit ={
            reference: reference,
            designation : designation,
            marque : marque ,
            prix : prix,
            image : image
        };
        API.post('/produits/', objetProduit).then(res => console.log(res.data));
        //history.push("/Admin")
        navigate("/Admin");
    }


    return (
        <div style={{margin:"80px"}}>
            <center>
            <h3 >Add product </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    placeholder="Reference"
                    type="text"
                    value={reference}
                    onChange={e => Setreference(e.target.value)}
                    /> 
                </div>

                <div>
                    <input
                    placeholder="Designation"
                    type="text"
                    value={designation}
                    onChange={e => Setdesignation(e.target.value)}
                    /> 
                </div>

                <div>
                    <input
                    placeholder="Marque"
                    type="text"
                    value={marque}
                    onChange={e => Setmarque(e.target.value)}
                    /> 
                </div>

                <div>
                    <input
                    placeholder="Prix"
                    type="number"
                    value={prix}
                    onChange={e => SetPrix(e.target.value)}
                    /> 
                </div>

                <div>
                <input 
                 type="file"
                 value={inputFile} 
                 onChange={e => { SetinputFile(e.target.value); Setimage("images/"+e.target.files[0].name) }} />
                <img src={image} width="80" />
                </div>
              
                <button style={{backgroundColor:'#FFEB3B' }}>Ajouter</button>
                
            </form>
            </center>
        </div>
      );
      
}

export default AddProduit;

