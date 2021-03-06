import { Paginator } from '@/components/paginator/paginator';
import { CustomTable } from '@/components/tables/table.component';
import { Fragment, useState } from 'react';
import { LogAdapted } from '../types/logs.types';

export const LogsList = ({ logs }: { logs: LogAdapted[] }) => {
  const [pagination, setPagination] = useState<number>(0);
  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'Acción',
          },
          {
            nameField: 'Descripción',
          },
          {
            nameField: 'Tabla',
          },
          {
            nameField: 'Controlador',
          },
          {
            nameField: 'Fecha',
          },
        ]}
      >
        {logs.slice(pagination, pagination + 20).map((log: LogAdapted) => (
          <tr key={log.id}>
            <td>{log.action}</td>
            <td>{log.description}</td>
            <td>{log.table}</td>
            <td>{log.controller}</td>
            <td>{log.timestamps}</td>
          </tr>
        ))}
        <Paginator
          arr={logs}
          changePage={setPagination}
          currentPage={pagination}
          numberItemsPerPage={20}
        />
      </CustomTable>
    </Fragment>
  );
};
