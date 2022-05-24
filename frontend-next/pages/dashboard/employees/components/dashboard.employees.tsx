import { useCallService } from '@/hooks/useCallService';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Employee, employeeAdapter } from '../adapters/employee.adapter';
import { getAllEmployees } from '../services/employee.service';
import { CountEmployees } from './employee.count';
import { EmployEmployee } from './employees.employ';
import { ListEmployees } from './employees.list';

export const DashboardEmployees = () => {
  const { call }: any = useCallService(getAllEmployees, employeeAdapter);
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);

  useEffect(() => { call !== null && setEmployeeList(call) }, [call]);

  return (
    <div>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faKitchenSet} />
        </div>
        <main>
          <span>Ordenes entrantes</span>
          <p>Lista de todas las ordenes para gestionar.</p>
        </main>
      </header>
      <div className='dashboardEmployees'>
        <header>
          <section>
            <h2>Contratar un nuevo empleado</h2>
            {call !== null && <EmployEmployee
              curretListEmployees={call}
              setEmployees={setEmployeeList}
            />}
          </section>
          <section>
            <h2>Total de empleados</h2>
            {call !== null && <CountEmployees countEmployees={call.length} />}
          </section>
        </header>
        <main>
          <section>
            <h2>Lista de empleados activos</h2>
            {call !== null && employeeList.length > 0 && <ListEmployees employees={employeeList as any} />}
          </section>
        </main>
      </div>
    </div>
  );
};
