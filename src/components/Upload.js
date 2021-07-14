import React, {useState} from 'react';

const Upload = () => {
    //const [file, setFile] = useState[null];

const changeHandler = (e) => {
    let selected = e.target.files[0]; //Accessing the file that user has selected
   
    if(selected){
       console.log(selected);
        //setFile(selected);
    }
}   
    
        return (
            <div>
                <form>
                    <input type ='file'  onChange = {changeHandler}/>
                </form>
            </div>
        )

}

export default Upload
