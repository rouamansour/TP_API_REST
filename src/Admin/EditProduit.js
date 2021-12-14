import API from "../Axios/Api";
import {useState , useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Button from '@material-ui/core/Button';
//import { createTheme } from '@mui/material/styles';
//put : modifie
function EditProduit({}) {
    
    //let history = useHistory();
   // let id=match.params.id;
   const navigate=useNavigate();
    const [reference, setreference] = useState("");
    const [designation, setdesignation] = useState(""); 
    const [marque, setmarque] = useState("");
    const [prix, setPrix] = useState("");
    const [image, setimage] = useState();
    const [inputFile, setinputFile] = useState("");

    const {id} = useParams();
    
    useEffect(() => {
        API.get('/produits/'+id).then(res=>{
            setreference(res.data.reference);
            setdesignation(res.data.designation);
            setmarque(res.data.marque);
            setPrix(res.data.Prix);
            setimage(res.data.image);
        })
       
    },[]);

    const handleSubmit = () => {
        const objetProduit = {
            reference: reference,
            designation: designation,
            marque: marque,
            prix: prix,
            image: image
        }

        API.put('/produits/'+id, objetProduit).then((res) => {
             console.log(res.data)
        });
        navigate("/Admin");

        //history.push("/Admin")
    }

    return (
        <div style={{margin:"80px"}}>
            <center>
            <h2>Add product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    placeholder="Reference"
                    type="text"
                    value={reference}
                    onChange={e => setreference(e.target.value)}
                    /> 
                </div>

                <div>
                    <input
                    placeholder="Designation"
                    type="text"
                    value={designation}
                    onChange={e => setdesignation(e.target.value)}
                    /> 
                </div>

                <div>
                    <input
                    placeholder="Marque"
                    type="text"
                    value={marque}
                    onChange={e => setmarque(e.target.value)}
                    /> 
                </div>

                <div>
                    <input
                    placeholder="Prix"
                    type="number"
                    value={prix}
                    onChange={e => setPrix(e.target.value)}
                    /> 
                </div>

                <div>
                    <input
                    placeholder="Picture"
                    type="file" //choose file
                    value={inputFile}
                    onChange={e => {setinputFile(e.target.value);setimage(e.target.files[0].name)}}
                    /> 
                </div>
               
                <button style={{backgroundColor:'#4CAF50' }}>Modifier</button>
                
            </form>
            </center>
        </div>
      );
}

export default EditProduit;