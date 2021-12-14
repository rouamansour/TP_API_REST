import Home from "./Home";
//import "bootstrap/dist/css/bootstrap.min.css";
import ListProduits from "./Admin/ListProduits";
import AddProduit from "./Admin/AddProduit";
import EditProduit from "./Admin/EditProduit";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes, Link ,BrowserRouter as Router} from 'react-router-dom' ;

function App() {
    return (
     <div >
        <Router>
               {/* <nav className="navbar navbar-expand-lg navbar-dark bg-" style={{backgroundColor:'#82B1FF'}}>
               <div  style={{display:"flex",justifyContent:"space-around", textalign: "center"}}>
                   <div><Link to="/Admin" className="nav-link" style={{color:"black" }}>Admin</Link></div>
                   <div ><Link exact to="/Home" className="nav-link"  style={{color:"black" }}>Home</Link></div>
                   <div><Link to="/Add" className="nav-link"  style={{color:"black" }}>Add product</Link></div>
               </div>
               </nav> */}

                <nav>
                <ul class="nav nav-tabs" >
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page"to="/Admin" style={{color:"black" }}>Admin</Link> 
                </li>
                <li class="nav-item">
                    <Link exact to="/Home" class="nav-link" >Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Add" class="nav-link" >Add product</Link>
                </li>
                </ul>
                </nav>
                <Routes>  
                    <Route path="/Admin"  element={<ListProduits/>}></Route>  
                    <Route path="/Add"  element={<AddProduit/>}></Route> 
                    <Route path="/Home"  element={<Home/>}></Route> 
                    <Route path="/Edit/:id"  element={<EditProduit/>}></Route>    
                </Routes> 
         </Router>
      </div>
    );
  }  
export default App;
