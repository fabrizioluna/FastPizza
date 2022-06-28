import { useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ValuesResult {
  values: number[];
  labels: number[];
}

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const typesDateChart = {
  LAST_SEVENDAYS: 1,
  LAST_2WEEK: 2,
  LAST_MONTH: 3,
};

const labels = {
  LAST_SEVENDAYS: [1, 2, 3, 4, 5, 6, 7],
  LAST_2WEEK: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  LAST_MONTH: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ],
};

export const CUstomChartLine = ({ values }: { values: number[] }) => {
  const [chartDate, setChartDate] = useState<number>(typesDateChart.LAST_MONTH);

  const getValuesByType = (): ValuesResult => {
    if (chartDate === typesDateChart.LAST_SEVENDAYS) {
      return {
        values: values.slice(0, 7),
        labels: labels.LAST_SEVENDAYS,
      };
    } else if (chartDate === typesDateChart.LAST_2WEEK) {
      return {
        values: values.slice(0, 14),
        labels: labels.LAST_2WEEK,
      };
    } else if (chartDate === typesDateChart.LAST_MONTH) {
      return {
        values: values,
        labels: labels.LAST_MONTH,
      };
    }
    return {
      values: values,
      labels: labels.LAST_MONTH,
    };
  };

  const config = useMemo(() => {
    return {
      datasets: [
        {
          label: 'Ventas del mes',
          data: getValuesByType().values,
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.3)',
        },
      ],
      labels: getValuesByType().labels,
    };
  }, [chartDate]);

  return (
    <div>
      <Line data={config} options={options} />
      <div id='chartButtons'>
        <button
          id='chartButtonStyle'
          onClick={() => setChartDate(typesDateChart.LAST_SEVENDAYS)}
        >
          Últimos 7 dias
        </button>
        <button
          id='chartButtonStyle'
          onClick={() => setChartDate(typesDateChart.LAST_2WEEK)}
        >
          Últimas 2 semanas
        </button>
        <button
          id='chartButtonStyle'
          onClick={() => setChartDate(typesDateChart.LAST_MONTH)}
        >
          Mes
        </button>
      </div>
    </div>
  );
};
