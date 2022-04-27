import { Cart } from './cart.model';

export const insertElementCart = (id: string, products: Array<string>) => {
  return new Promise(async (resolve, reject) => {
    const cart = await Cart.findById(id);

    if (!cart)
      return reject('El carrito de compras no existe en la base de datos.');

    products.map(
      (product: string) => (cart.cart_products = [...cart, product])
    );

    await cart
      .save()
      .then(() => resolve(cart))
      .catch(() => reject('No se pudo procesar la solicitud.'));
  });
};
