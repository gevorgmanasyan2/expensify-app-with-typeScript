// Higher Order Component (HOC)-
// Acomponent (HOC) that renders another component
//it must`
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info=()=>(
    <div>
        <h1>Info</h1>
        <p>The info is:{PaymentResponse.info}</p>
    </div>
);
const withAdminWarning=(WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAdmin && <p>This is private info.Please dont share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const requireAuthentication=(WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAuthenticated?(
                <WrappedComponent {...props} />
            ):(
<p>Please login to view the info</p>
            )}
        </div>
    );
};

const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={false} info="There are details" />,document.getElementById("root"));
// ReactDom.render(<AdminInfo isAuthenticated={false} info="There are details" />,document.getElementById("root"));















