import { useCallService } from '@/hooks/useCallService';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { productAdapter } from 'pages/home/adapters/product.adapter';
import { getDashboardProducts } from './services/product.service';
import { ListProducts } from './components/dashboard.listProducts';
import { DashboardContainer } from '../components/dashboard.container';
import { CreateProduct } from './components/products.newproduct';

export const DashboardProducts = () => {
  const { call } = useCallService(getDashboardProducts, productAdapter);

  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faBurger} />
        </div>
        <main>
          <span>Productos generales</span>
          <p>Lista de todos tus productos disponibles.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Producto más vendido'>
          <h4>Tacos al pastor</h4>
        </DashboardContainer>
        <DashboardContainer title='Producto menos vendido'>
          <h4>Empanadas</h4>
        </DashboardContainer>
        <DashboardContainer title='Total de productos vendidos'>
          <h4>2804</h4>
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Registrar nuevo producto'>
          <CreateProduct />
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Lista de todos los productos'>
          {call !== null && <ListProducts products={call} />}
        </DashboardContainer>
      </main>
    </div>
  );
};
