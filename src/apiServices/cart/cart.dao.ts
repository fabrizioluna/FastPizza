import { Cart } from './cart.model';
import { cartTypes } from './cart.types';

export const cartDao = {
  create: (id: string, props: Array<string>) => {
    return new Promise<{ _id: string }>(async (resolve, reject) => {
      if (props.length <= 0)
        return reject(
          'No se pudo crear el carrito de compras, no contiene datos.'
        );
      const cart = new Cart({ cart_user: id, cart_products: props });
      cart.cart_createdAt = new Date();

      resolve(await cart.save());
    });
  },
  insertElementCart: (id: string, products: Array<string>) => {
    return new Promise<cartTypes>(async (resolve, reject) => {
      const cart = await Cart.findById(id);

      if (!cart)
        return reject('El carrito de compras no existe en la base de datos.');

      products.map(
        (product: string) => (cart.cart_products = [...cart.cart_products, product])
      );

      await cart
        .save()
        .then(() => resolve(cart))
        .catch(() => reject('No se pudo procesar la solicitud.'));
    });
  },
};
