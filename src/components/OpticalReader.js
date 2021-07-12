import React, { useState } from "react";
import axios from "axios";



const OppticalReader = (props) => {

    // const [newImage, setNewImage] = useState({ data: 'text' })
    // const [recipeList, setRecipeList] = useState([]);


    // const addImage = e => {
    //     e.preventDefault();
    //     // axiosWithAuth()
    //     console.log('add image')
    //     axios
    //         .post('https://recipe-organizer-app.herokuapp.com/char/upload/', newImage)
    //         .then(res => {

    //             console.log(res.data, 'added image')
    //             setRecipeList(recipeList);
    //             setNewImage({ data: 'text' })

    //             window.location.reload();
    //         })
    //         .catch(err => console.log(err, 'add fail image'));
    // };


    return (
        <div>
            <h1> Upload</h1>
            <form action='/upload' method="POST" encType="multipart/form-data">
                <input type='file' name="" className="text" />
                <button type="submit">Submit</button>
            </form>

        </div>

    );
}

export default OppticalReader;