import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProgressBar } from "pages/dashboard/components/dashboard.progressbar";

export const StadisticsDelivery = () => {
  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <main>
          <span>Entregas en proceso</span>
          <p>Lista de todas las entregas por realizar.</p>
        </main>
      </header>
      <div className='dashboardInfo'>
        <section>
          <header>
            <p>Entregas por realizar</p>
          </header>
          <article>
            <span>5</span>
            <ProgressBar />
          </article>
        </section>
        <section>
          <header>
            <p>Entregas en proceso</p>
          </header>
          <article>
            <span>5</span>
            <ProgressBar />
          </article>
        </section>
        <section>
          <header>
            <p>Entregas totales</p>
          </header>
          <article>
            <span>212</span>
            <ProgressBar />
          </article>
        </section>
      </div>
    </div>
  );
};
