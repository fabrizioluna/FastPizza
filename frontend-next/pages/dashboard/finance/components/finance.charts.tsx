import { DashboardContainer } from 'pages/dashboard/components/dashboard.container';
import { CUstomChart } from 'pages/dashboard/components/dashboard.customChart';
import { Fragment, useMemo } from 'react';
import { Month, MonthStatistics } from '../types/finance.types';

const months = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

export const FinanceCharts = ({
  financeObject,
}: {
  financeObject: MonthStatistics[];
}) => {
  const charts = useMemo(() => {
    // We organized the Array to be sure the index iteration corresponding to the month
    const financeArray = financeObject.sort((a, b) => {
      if (a.month > b.month) {
        return 1;
      }
      if (a.month < b.month) {
        return -1;
      }
      return 0;
    });

    // This variable contains the current Month to be show in the charts
    const currentMonth = new Date().getMonth();
    // This other one contains the current Day of the month
    const currentDay = new Date().getDate();

    // We create all arrays by differing information
    const financeEarnedMonths = financeArray.map(
      (finance: MonthStatistics) => finance.totalEarnedThisMonth
    );

    const financeOrdersMonths = financeArray.map(
      (finance: MonthStatistics) => finance.totalOrdersThisMonth
    );

    const financeOrdersByDay = financeArray[
      currentMonth
    ].totalOrdersByMonth.map((finance: Month) => finance.totalOrdersByDay);

    const financeEarnedByDay = financeArray[
      currentMonth
    ].totalOrdersByMonth.map((finance: Month) => finance.totalEarnedByDay);

    // We find the statistics by this specific day
    const financeEarnedThisDay = financeArray[
      currentMonth
    ].totalOrdersByMonth.find(
      (finance: Month) => finance.day === currentDay
    ) as Month;

    const { totalEarnedByDay, totalOrdersByDay } = financeEarnedThisDay;

    // let countTotalEarnedMonth: number = 0;
    // financeObject.map(
    //   (month: MonthStatistics) =>
    //     (countTotalEarnedMonth =
    //       countTotalEarnedMonth += month.totalEarnedThisMonth)
    // );
    // Then just returning in Charts variable all data
    return {
      statisticsMonthsEarned: financeEarnedMonths,
      statisticsMonthsOrders: financeOrdersMonths,
      statisticsThisMonthOrders: financeOrdersByDay,
      statisticsThisMonthEarned: financeEarnedByDay,
      statisticsThisDayEarned: [totalEarnedByDay],
      statisticsThisDayOrders: [totalOrdersByDay],
    };
  }, []);

  return (
    <Fragment>
      <main className='dashboardContainers'>
        <DashboardContainer title='Ventas totales del 2022'>
          <CUstomChart
            typeChart='Bar'
            slices={[{ sliceLength: 12, sliceLabel: months }]}
            withButtons={false}
            values={charts.statisticsMonthsEarned}
          />
        </DashboardContainer>
        <DashboardContainer title='Ordenes totales del 2022'>
          <CUstomChart
            typeChart='Bar'
            slices={[{ sliceLength: 12, sliceLabel: months }]}
            withButtons={false}
            values={charts.statisticsMonthsOrders}
          />
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
      <main className='dashboardContainers'>
        <DashboardContainer title='Ventas del mes de Junio'>
          <CUstomChart
            typeChart='Line'
            slices={[
              {
                sliceLength: 1,
                sliceLabel: ['12AM', '5AM', '10AM', '15PM', '20PM', '23PM'],
              },
            ]}
            withButtons={false}
            values={charts.statisticsThisDayEarned}
          />
        </DashboardContainer>
        <DashboardContainer title='Ordenes del mes de Junio'>
          <CUstomChart
            typeChart='Line'
            slices={[
              {
                sliceLength: 1,
                sliceLabel: ['12AM', '5AM', '10AM', '15PM', '20PM', '23PM'],
              },
            ]}
            withButtons={false}
            values={charts.statisticsThisDayOrders}
          />
        </DashboardContainer>
      </main>
    </Fragment>
  );
};
