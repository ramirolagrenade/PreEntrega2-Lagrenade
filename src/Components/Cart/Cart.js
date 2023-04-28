import { addDoc, collection, getFirestore } from 'firebase/firestore' 
import React from 'react' 
import { useCartContext } from '../../context/CartContext' 
import ItemCart from '../ItemCart/ItemCart' 

const Cart = () => {
  const { cart, totalPrice } = useCartContext() 

  const order = {
    buyer: {
      name: 'Carlitos',
      email: 'mailFalso123@gmail.com',
      phone: '1555443311',
      adress: 'Av. Siempreviva 2525'
    },
    items: cart.map(product => ({id: product.id,Title: product.title, price: product.price, quantity: product.quantity})) ,
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore() 
    const ordersCollection = collection(db, 'orders') 
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))

  } 

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <a href='/'>Hacer compras</a>
      </>
    ) 
  }

  return (
    <>
      {
        cart.map(item => <ItemCart key={item.id} item={item} />)
      }
      <p>
        totales: {totalPrice()}
      </p>
      <button className='btn-buy' onClick={handleClick}>Hacer compra</button>
    </>
  ) 
} 

export default Cart 