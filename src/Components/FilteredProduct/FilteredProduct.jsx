import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"
import {Navbar} from '../Navbar/Navbar'
export const FilteredProduct = () => {
    const products = useSelector((state) => state.products.filterProducts)
    // console.log(products)
    const { type } = useParams()
    return (
        <div>
             <Navbar />
            <div className="pt-1">
                <div className="pl-16">
                    <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">{type}</h1>
                </div>
                <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
                    {products.filter((product) => product.type === type).map((product, index) => {
                        return(
                            <div key={index}>
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                text={product.text}
                                img={product.img}
                                price={product.price}
                                colors={product.color}
                            />
                        </div>
                        )
                       
                    })}
                </div>
            </div>
        </div>
    )
}


