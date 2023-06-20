import { useParams } from "react-router-dom";

function ProductScreen(){
    const params = useParams();// react hook to get element from url 
    const {slug} = params; 
    return <div>
        <h1>{slug}</h1>
    </div>;
}

export default ProductScreen;