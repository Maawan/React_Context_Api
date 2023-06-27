import React from "react";
import Provider from "./provider";
import Level1 from "./Level1";
function App(){
    return(
        <div>
            <p>This is Level 0</p>
                <Provider>
                    <Level1 />
                </Provider>
        </div>
        
    )
    // return(
    //     <p>okkk</p>
    // )
    
}
export default App;