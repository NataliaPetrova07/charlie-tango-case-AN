import { useContext } from "react";
import { SellerContext } from "@/contexts/SellerContext";

export default function Test() {
    const data = useContext(SellerContext);
    console.log(data.info)
    const { info } = data



    return (
        <div>
            <span>Price:{info.price}</span>

            {/* This shit down here for mapping is not working */}
            {/*  <ul>
                {info.map((info) => <li key={info.id}>{info.price}</li>)}
            </ul> */}
        </div>
    );
}
