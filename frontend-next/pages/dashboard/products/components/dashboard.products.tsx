import { useCallService } from "@/hooks/useCallService";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productAdapter } from "pages/home/adapters/product.adapter";
import { getDashboardProducts } from "../services/product.service";
import { ListProducts } from "./dashboard.listProducts";

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
      <main className='dashboardFinance'>
        <section>
          <h2></h2>
        </section>
        <section>
          <h2></h2>
        </section>
        <aside>
          <h2></h2>
        </aside>
      </main>
      <div className='dashboardFinance'>
        <article>
          <aside>
            <h2></h2>
          </aside>
          {/* Component list products */}
          <section>
            <h2>Productos</h2>
           {call !== null && <ListProducts products={call} />}
          </section>
        </article>
      </div>
    </div>
  );
};
