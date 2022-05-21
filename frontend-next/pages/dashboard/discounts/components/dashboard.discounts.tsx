import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DashboardDiscounts = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faTags} />
        </div>
        <main>
          <span>Descuentos generales</span>
          <p>Lista de todos tus descuentos disponibles.</p>
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
          <section>
            <h2></h2>
          </section>
        </article>
      </div>
    </div>
  );
};
