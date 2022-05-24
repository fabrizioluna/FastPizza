import { Product } from 'pages/home/adapters/product.adapter';
import { Fragment } from 'react';

export const ListProducts = ({ products }: { products: Product[] }) => {
    console.log(products)
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Precio</th>
          <th>Descuento</th>
          <th>Descipción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      {products.map((product: Product) => (
        <tbody key={product._id}>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.discount}</td>
          <td>{product.description}</td>
          <td>
            <button>Ir</button>
            <button>Editar Producto</button>
          </td>
        </tbody>
      ))}
    </table>
  );
};
