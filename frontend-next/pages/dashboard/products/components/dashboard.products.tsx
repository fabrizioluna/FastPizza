import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DashboardProducts = () => {
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
          <section>
            <h2></h2>
          </section>
        </article>
      </div>
    </div>
  );
};
