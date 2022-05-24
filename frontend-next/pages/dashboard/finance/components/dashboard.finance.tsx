import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DashboardStadistics = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <main>
          <span>Finanzas globales</span>
          <p>Lista de todas tus finanzas globales.</p>
        </main>
      </header>
      <main className='dashboardFinance'>
        <section>
          <h2>Ganancias totales</h2>
        </section>
        <section>
          <h2>Ganancias por mes</h2>
        </section>
        <aside>
          <h2>Ganancias del dìa</h2>
        </aside>
      </main>
      <div className='dashboardFinance'>
        <article>
          <aside>
            <h2>Agregar un gasto nuevo</h2>
          </aside>
          <section>
            <h2>Tabla de gastos generales</h2>
          </section>
        </article>
      </div>
    </div>
  );
};
