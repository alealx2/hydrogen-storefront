import {Link, Image } from '@shopify/hydrogen';

export default function CollectionCard({collection}){
    return(
        <>
            <Link key={collection.id} to={`/collections/${collection.handle}`} >  
            <div className="collection-grid-item">
                <Image alt={collection.image.altText} data={collection.image}/>
                <h3>{collection.title}</h3>
            </div>
            </Link>       
        </> 
    )
}