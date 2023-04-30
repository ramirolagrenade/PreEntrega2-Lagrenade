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
    items: cart.map(items => ({ id: items.id, Title: items.title, price: items.price, quantity: items.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))

  }

  if (cart.length === 0) {
    return (
      <>
        <div>
          <p>No hay elementos en el carrito</p><br /><br />
          <a className='vi' href='/'>Hacer compras</a>
        </div>
      </>
    )
  }

  return (
    <>
      <div className=''>
        {cart.map(item => <ItemCart key={item.id} item={item} />)}
        <div className='card-item'>
          <br />
          <p>
            total: ${totalPrice()}
          </p>
          <button className='add-cart' onClick={handleClick}>Hacer compra</button>
        </div>
      </div>
    </>
  )
}

export default Cart 