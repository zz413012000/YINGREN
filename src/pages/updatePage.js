import React from "react";
import axios from "axios";
function UpdatePage(){
    function loadFile(e){
        let file=e.target.files[0]
        console.log(e)
        console.log(file)
        putServer(file)
    }
    function putServer(data){
        let src="http://localhost:4000";
        let config={
            headers:{

            },
        }
        axios.put(src,data,config)
    }
    return (
        <div>
            <input type="file" onChange={loadFile}/>
        </div>
    )
}
export default UpdatePage