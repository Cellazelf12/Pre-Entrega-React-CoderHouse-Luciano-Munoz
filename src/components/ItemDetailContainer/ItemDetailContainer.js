import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductByName } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { itemName } = useParams()


    useEffect(() => {
        getProductByName(itemName).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })
    }, [itemName])


    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer