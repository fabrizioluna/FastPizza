import { DashboardContainer } from 'pages/dashboard/components/dashboard.container';
import { CUstomChart } from 'pages/dashboard/components/dashboard.customChart';
import { Fragment, useMemo } from 'react';
import {
  Finance,
  Month,
  MonthStatistics,
  TotalStatistics,
} from '../types/finance.types';

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const FinanceCharts = ({
  financeObject,
}: {
  financeObject: MonthStatistics[];
}) => {
  const charts = useMemo(() => {
    const financeArray = financeObject.sort((a, b) => {
      if (a.month > b.month) {
        return 1;
      }
      if (a.month < b.month) {
        return -1;
      }
      return 0;
    });

    const financeEarnedMonths = financeArray.map(
      (finance: MonthStatistics) => finance.totalEarnedThisMonth
    );

    const financeOrdersMonths = financeArray.map(
      (finance: MonthStatistics) => finance.totalOrdersThisMonth
    );

    const financeOrdersByDay = financeArray[5].totalOrdersByMonth.map(
      (finance: Month) => finance.totalOrdersByDay
    );

    const financeEarnedByDay = financeArray[5].totalOrdersByMonth.map(
      (finance: Month) => finance.totalEarnedByDay
    );

    // let countTotalEarnedMonth: number = 0;
    // financeObject.map(
    //   (month: MonthStatistics) =>
    //     (countTotalEarnedMonth =
    //       countTotalEarnedMonth += month.totalEarnedThisMonth)
    // );
    return {
      statisticsMonthsEarned: financeEarnedMonths,
      statisticsMonthsOrders: financeOrdersMonths,
      statisticsThisMonthOrders: financeOrdersByDay,
      statisticsThisMonthEarned: financeEarnedByDay,
    };
  }, []);

  console.log(charts);
  return (
    <Fragment>
      <main className='dashboardContainers'>
        <DashboardContainer title='Ventas totales del 2022'>
          <CUstomChart typeChart='Bar' values={charts.statisticsMonthsEarned} />
        </DashboardContainer>
        <DashboardContainer title='Ordenes totales del 2022'>
          <CUstomChart typeChart='Bar' values={charts.statisticsMonthsOrders} />
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Ventas del mes de Junio'>
          <CUstomChart
            typeChart='Line'
            values={charts.statisticsThisMonthEarned}
          />
        </DashboardContainer>
        <DashboardContainer title='Ordenes del mes de Junio'>
          <CUstomChart
            typeChart='Bar'
            values={charts.statisticsThisMonthOrders}
          />
        </DashboardContainer>
      </main>
    </Fragment>
  );
};
