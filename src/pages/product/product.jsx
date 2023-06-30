import React, { useEffect, useState } from 'react'
import './product.css'

export default function Product() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState([])
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                Loading ....
            </>
        )
    }


    const filterProduct = (cat) => {
        if (cat === 'All') {
            setFilter(data)
        } else {
            const filteredList = data.filter((product) => product.category === cat)
            setFilter(filteredList)
        }
    }


    const ShowProducts = ({ filter }) => {
        return (
            <div>
                <button onClick={() => filterProduct('All')}>All</button>
                <button onClick={() => filterProduct("men's clothing")}>Mens Clothing</button>
                <button onClick={() => filterProduct("women's clothing")}>Womens Clothing</button>
                <button onClick={() => filterProduct('jewelery')}>Jewelry</button>
                <button onClick={() => filterProduct('electronics')}>Electronic</button>
                {filter.map((product) => (
                    <div className="product-box" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div>
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div >
        );
    };

    return (
        <div>
            <p>LATEST PRODUCT</p>
            <div>
                {loading ? <Loading /> : <ShowProducts filter={filter} />}
            </div>
        </div>
    )
}
