import { useShopQuery, CacheLong, gql, Seo, Link } from "@shopify/hydrogen";
import { Suspense } from "react";

import NavBar from "./NavBar.client";
import FooterNavBar from "./FooterNavBar.client";
import CartDrawer from "./CartDrawer.client";

export default function Layout({ children }) {

  const data = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
      preload: true,
  });

  const { data: { shop } } = data;
  const { data: {collections: { nodes: collections } } } = data;

  return (
    <>
        <Seo 
            type="defaultSeo"
            data={{
                title: shop.name,
                description: shop.description
            }}
        />
        

        <header>
            <div className="container header-inner">
                <Link to="/" className="header-logo">
                    {shop.name}
                </Link>

                <NavBar collections={collections}/>          
                
                <CartDrawer />
            </div>
        </header>
        
        <main>
            <Suspense>{children}</Suspense>
        </main>

        <footer>         
          <div className="container">
            <Link to="/" className="footer-logo">
              {shop.name}
            </Link>         
            <div className="footer-menu">
              <FooterNavBar collections={collections} />              
            </div>
          </div>           
        </footer>
    </>
  );
}


//Fetch store info
const SHOP_QUERY = gql`
query CollectionsInfo{
  shop {
    name
    description
  },      
  collections(first: 4) {
    nodes {
      id
      title
      description
      handle
      description
      image{
        url
        altText
      }      
    }    
  }
}
`;