import { useContext } from "react";
import { SellerContext } from "@/contexts/SellerContext";

export default function Buyers() {
    const data = useContext(SellerContext);
    console.log(data.info)
    const { info } = data



    return (
        <div>
            <p>ID:{info.price}</p>

            {/* This shit down here for mapping is not working */}
            {/*  <ul>
                {info.map((info) => <li key={info.id}>{info.price}</li>)}
            </ul> */}
        </div>
    );
}
