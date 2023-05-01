import { useContext } from "react";
import { SellerContext, UpdateContext } from "@/contexts/SellerContext";

function Test() {
    const sellerInfo = useContext(SellerContext);
    const dispatch = useContext(UpdateContext);

    function handleLogin() {
        dispatch({
            action: "LOGIN",
            payload: "Bo",
        })
    }

    console.log(sellerInfo)
    return (
        <div>
            <span>Price: {sellerInfo.price}</span>
        </div>
    );
}
export default Test;