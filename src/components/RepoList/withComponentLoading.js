import React from "react";


function WithComponentLoading(Component) {
    return function LoadingComponent({isLoading, ...props}){
        if (!isLoading) return <Component {...props}/>
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Please hold on, fetching data may take some time :)
            </p>
        );
    }
}

export default WithComponentLoading;
