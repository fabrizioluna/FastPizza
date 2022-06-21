import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSideProps } from 'next';
import { DashboardContainer } from '../components/dashboard.container';
import { DashboardLayout } from '../components/dashboard.layout';
import { financeAdapter } from './adapters/finance.adapter';
import { ExpensesList } from './components/expenseslist.finance';
import { NewExpense } from './components/newexpense.finance';
import { getAllFinance } from './service/finance.service';
import { Finance } from './types/finance.types';

const Dashboard_Finance = ({ financeObject }: { financeObject: Finance }) => {
  return (
    <DashboardLayout>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <main>
          <span>Finanzas globales</span>
          <p>Lista de todas tus finanzas globales.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Ganancias totales'>
          <h5>${financeObject.totalEarnedYear}</h5>
        </DashboardContainer>
        <DashboardContainer title='Ganancias por mes'>
          <h5>${financeObject.totalEarnedMonth}</h5>
        </DashboardContainer>
        <DashboardContainer title='Ganancias del dìa'>
          <h5>${financeObject.totalEarnedDay}</h5>
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Agregar un gasto nuevo'>
          <NewExpense />
        </DashboardContainer>
        <DashboardContainer title='Tabla de gastos generales'>
          <ExpensesList expenses={financeObject.totalExpenses} />
        </DashboardContainer>
      </main>
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAllFinance();
  const financeAdapted = financeAdapter(data);

  return {
    props: {
      financeObject: financeAdapted,
    },
  };
};

export default Dashboard_Finance;
