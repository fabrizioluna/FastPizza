import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Finance } from '../types/finance.types';
import { ExpensesList } from './expenseslist.finance';
import { NewExpense } from './newexpense.finance';

export const DashboardStadistics = ({ financeObject }: { financeObject: Finance }) => {
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
          <h1>{financeObject.totalEarnedYear}</h1>
        </section>
        <section>
          <h2>Ganancias por mes</h2>
          <h1>{financeObject.totalEarnedMonth}</h1>
        </section>
        <aside>
          <h2>Ganancias del dìa</h2>
          <h1>{financeObject.totalEarnedDay}</h1>
        </aside>
      </main>
      <div className='dashboardFinance'>
        <article>
          <aside>
            <h2>Agregar un gasto nuevo</h2>
            <NewExpense />
          </aside>
          <section>
            <h2>Tabla de gastos generales</h2>
            <ExpensesList expenses={financeObject.totalExpenses} />
          </section>
        </article>
      </div>
    </div>
  );
};
