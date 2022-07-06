import { PageHead } from '@/components/pageHead/pageHead.component';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSideProps } from 'next';
import { DashboardContainer } from '../components/dashboard.container';
import { CUstomChart } from '../components/dashboard.customChart';
import { DashboardLayout } from '../components/dashboard.layout';
import { expenseAdapter, financeAdapter } from './adapters/finance.adapter';
import { ExpensesList } from './components/expenseslist.finance';
import { FinanceCharts } from './components/finance.charts';
import { NewExpense } from './components/newexpense.finance';
import { getAllFinance } from './service/finance.service';
import { Finance } from './types/finance.types';

const Dashboard_Finance = ({ financeObject }: { financeObject: Finance }) => {
  console.log(financeObject);
  return (
    <DashboardLayout>
      <PageHead titlePage='Panel de Empleado: Finanzas' />
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <main>
          <span>Finanzas globales</span>
          <p>Lista de todas tus finanzas globales.</p>
        </main>
      </header>
      <FinanceCharts financeObject={financeObject.completeStatistics} />
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
  const expenseAdapted = financeAdapter(data);
  const financeAdapted = {
    ...data,
    totalExpenses: expenseAdapted.totalExpenses,
  };

  return {
    props: {
      financeObject: financeAdapted,
      expenseAdapted,
    },
  };
};

export default Dashboard_Finance;
