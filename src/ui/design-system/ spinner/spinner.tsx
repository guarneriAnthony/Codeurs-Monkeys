import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large"
    variant?: "primary" | "white"
}


export const Spinner = ({size = "medium", variant = "primary",}:Props) => {
    let variantStyle: string, sizeStyle: string;
    
    switch(size){
        case "small":
            sizeStyle = "w-5 h-5"
            break;
        case "medium":  //Default
            sizeStyle = "w-9 h-9"
            break;
        case "large":
            sizeStyle = "w-12 h-12"
            break;
        }

        switch(variant){
            case "primary":  //Default
                variantStyle = "text-primary"
                break;
            case "white":  
                variantStyle = "text-white"
                break;
            }
    

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={clsx(sizeStyle, variantStyle)}>
            <path fill="currentColor" d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                <animateTransform  attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
            </path>
        </svg>
    );
};


