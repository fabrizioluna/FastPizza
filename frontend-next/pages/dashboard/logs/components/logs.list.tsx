import { CustomTable } from '@/components/tables/table.component';
import { Fragment } from 'react';
import { LogAdapted } from '../types/logs.types';

export const LogsList = ({ logs }: { logs: LogAdapted[] }) => {
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
        {logs.map((log: LogAdapted) => (
          <tr key={log.id}>
            <td>{log.action}</td>
            <td>{log.description}</td>
            <td>{log.table}</td>
            <td>{log.controller}</td>
            <td>{log.timestamps}</td>
          </tr>
        ))}
      </CustomTable>
    </Fragment>
  );
};
