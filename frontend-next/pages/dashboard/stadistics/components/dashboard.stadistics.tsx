import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DashboardFinance = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <main>
          <span>Estadisticas globales</span>
          <p>Lista de todas tus estadisticas del sitio globales.</p>
        </main>
      </header>
      <main className='dashboardStadistics'>
        <section>
          <h2>Ganancias totales</h2>
        </section>
        <section>
          <h2>Ganancias por mes</h2>
        </section>
      </main>
      <div className='dashboardStadistics'>
        <article>
          <section>
            <h2>Tabla de gastos generales</h2>
          </section>
          <section>
            <h2>Tabla de gastos generales</h2>
          </section>
        </article>
      </div>
    </div>
  );
};
