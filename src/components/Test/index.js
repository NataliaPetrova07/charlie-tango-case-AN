import { useContext } from "react";
import { SellerContext, DispatchContext } from "@/contexts/SellerContext";

function Test() {
    const sellerInfo = useContext(SellerContext);
    const dispatch = useContext(DispatchContext);

    function handleLogin() {
        dispatch({
            action: "LOGIN",
            payload: "Bo",
        })
    }

    console.log(sellerInfo)
    return (
        <div>
            <span>Price: 230</span>
        </div>
    );
}
export default Test;