import { Link } from '@shopify/hydrogen';
<<<<<<< HEAD

=======
>>>>>>> 1d24c3a98aba66f25438ac8c97c4bd2e856c144b
import FloatingMenu from './FloatingMenu.client';

export default function NavBar({collections}){
    return (
        <ul className="header-navigation">
            <li><a href="/catalog">Catalog</a></li>
<<<<<<< HEAD
            {/* <li><a href="#" className=''>Collections</a></li> */}
            <li>
                <FloatingMenu menu={collections}/>
            </li>
            {/* {collections.map((collection) =>(
=======
            <li>
                <FloatingMenu menu={collections}/>
            </li>
            {/* <li><a href="#" className=''>Collections</a></li>
            {collections.map((collection) =>(
>>>>>>> 1d24c3a98aba66f25438ac8c97c4bd2e856c144b
                <li key={collection.id}>
                    <Link to={`/collections/${collection.handle}`} > {collection.title} </Link>                
                </li>
            ))} */}
            <li><a href="/blog">Blog</a></li>
        </ul>        
    )
}

