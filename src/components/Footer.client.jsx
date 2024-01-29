import { Link } from "@shopify/hydrogen";

import NavBar from "./NavBar.client";

export default function Footer({collections}){
    return(
        <div className="footer-links">
            {collections.map((collection) =>(
                <NavBar collections={collections}/>
            ))}              
        </div>
    )
}