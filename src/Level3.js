import React from 'react';
import Context from "./context";
function Level3(){
    return(
        <Context.Consumer>
            {
                (context) => (
                    <div>
                        <p>This is the final level : {context.data}</p>
                        <button onClick={context.valueChange}>Click me Bitch </button>
                    </div>
                    
                )   
            }
        </Context.Consumer>
        
    )
    
}
export default Level3;