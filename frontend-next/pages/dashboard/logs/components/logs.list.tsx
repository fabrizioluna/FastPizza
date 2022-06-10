import { LogAdapted } from "../types/logs.types";

export const LogsList = ({ logs }: { logs: LogAdapted[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Acción</th>
          <th>Descripción</th>
          <th>Tabla</th>
          <th>Controlador</th>
          <th>Fecha</th>
        </tr>
      </thead>
      { logs.map((log: LogAdapted) => (
        <tbody key={log.id}>
          <td>{log.action}</td>
          <td>{log.description}</td>
          <td>{log.table}</td>
          <td>{log.controller}</td>
          <td>{log.timestamps}</td>
        </tbody>
      ))}
    </table>
  );
};
