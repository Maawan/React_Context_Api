import React, { useState } from 'react';
import PackageContext from "./context";
function Provider(props){
    const [currentValue , changeItBro] = useState("Aaaji Lawda");
    return (
        <PackageContext.Provider
            value={{
                data : currentValue,
                valueChange : () => {
                    changeItBro("Chnage ho gaya hai badwe");
                }
            }}

        >
            {props.children}
        </PackageContext.Provider>
    )
}
export default Provider;