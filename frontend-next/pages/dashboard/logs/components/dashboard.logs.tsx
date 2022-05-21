import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DashboardLogs = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faCopy} />
        </div>
        <main>
          <span>Registros generales</span>
        <p>Lista de todos los registros de la aplicación.</p>
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
