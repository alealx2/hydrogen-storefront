import { Link } from '@shopify/hydrogen';

import FloatingMenu from './FloatingMenu.client';

export default function NavBar({collections}){
    return (
        <ul className="header-navigation">
            <li><a href="/catalog">Catalog</a></li>
            {/* <li><a href="#" className=''>Collections</a></li> */}
            <li>
                <FloatingMenu menu={collections}/>
            </li>
            {/* {collections.map((collection) =>(
                <li key={collection.id}>
                    <Link to={`/collections/${collection.handle}`} > {collection.title} </Link>                
                </li>
            ))} */}
            <li><a href="/blog">Blog</a></li>
        </ul>        
    )
}

