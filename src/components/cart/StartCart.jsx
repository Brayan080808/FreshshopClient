import useFetchCart from '../../hooks/cart/useFetchCart'
import Spiner from '../Spiner'
import CartElement from './CartElement'
import EmptyCart from './EmptyCart'
import useSesion from '../../store/useSesion'
import getNewToken from '../../services/login/getNewToken'
import ErrorState from '../ErrorState'

const StartCart = () =>{
    const { isPending, isError, data, error, refetch } = useFetchCart("/shop/carro_compra/")
    const usuario = useSesion()


    if (isPending) return <Spiner />
    if (isError){ return <ErrorState refetch={refetch} />}
    return (
            <div className="p-2 md:p-16 my-6">
                <table className='w-full'>
                    <thead className=''>
                        <tr className="bg-yellow  text-white  text-lg ">
                            <th className='py-4 px-1 md:px-2'>Images</th>
                            <th className='py-4 px-1 md:px-2'>Product Name</th>
                            <th className='py-4 px-1 md:px-2'>Quantity</th>
                            <th className='py-4 px-1 md:px-2'>Price</th>
                            <th className='py-4 px-1 md:px-2'>Total</th>
                            <th className='py-4 px-1 md:px-2'>Remove</th>
                        </tr>
                    </thead>
                    <tbody className=''>

                        {data.map((item) =>
                            <CartElement product={item} key={item.id_carro_compra}/>
                        )}
                        
                    </tbody>
                    
                </table>
                {data.length === 0 && <EmptyCart />}
            </div>
        )
} 
export default StartCart

