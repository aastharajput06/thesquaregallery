import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import './index.css';
import Search from './components/Search';
import Upload from './components/Upload';


// import { render } from '@testing-library/react';



function clickMe(){
  alert(" Thankyou for Registering!!");
}

const pictures= [
  { id: '1', name: 'Animal' },
  { id: '2', name: 'Food' },
  { id: '3', name: 'Nature' },
  { id: '4', name: 'Aesthetic' },
];



function App() {
    return (
      <>
       <Search/>
       <Upload/>
      
        <div>
          <ul>
                {pictures.map((pictures) => (
                    <li key={pictures.id}>{pictures.name}</li>
                ))}
       </ul>
 
           </div> 
          
        <div>
           <button class="bg-green-300 hover:bg-green-200 text-white font-bold py-2 px-4 rounded">
            Create Account/Log In
             </button>
          </div> 
         <div>
           <button class="bg-green-500 hover:bg-green-200 text-white font-bold py-2 px-4 rounded"
            onClick= {clickMe}>
             Submit
             </button>
          </div> 
         <div>
           <button class="bg-red-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
            Register
             </button>
          </div> 
         <div>
           <a href ="https://twitter.com/?lang=en" target ="_blank">
           <button class="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded">
             Twitter
             </button>
            </a> 
          </div> 
         <div>
         <a href = "https://www.facebook.com/" target = "_blank">
           <button class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
             facebook
             </button>
          </a>  
          </div> 
       
       
        <Navbar />
      
        <Landingpage />

      </>
    );
  }


export default App;
