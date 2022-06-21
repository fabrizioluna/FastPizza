import { useCallService } from "@/hooks/useCallService";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { DashboardContainer } from "../components/dashboard.container";
import { DashboardLayout } from "../components/dashboard.layout";
import { Employee, employeeAdapter } from "./adapters/employee.adapter";
import { CountEmployees } from "./components/employee.count";
import { EmployEmployee } from "./components/employees.employ";
import { ListEmployees } from "./components/employees.list";
import { getAllEmployees } from "./services/employee.service";


export const DashboardEmployees = () => {
  const { call }: any = useCallService(getAllEmployees, employeeAdapter);
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);

  useEffect(() => {
    call !== null && setEmployeeList(call);
  }, [call]);

  return (
    <DashboardLayout>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faKitchenSet} />
        </div>
        <main>
          <span>Empleados generales</span>
          <p>Lista y gestion de todos tus empleados.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Contratar nuevo empleado'>
          {call !== null && (
            <EmployEmployee
              curretListEmployees={call}
              setEmployees={setEmployeeList}
            />
          )}
        </DashboardContainer>
        <DashboardContainer title='Total de empleados'>
          {call !== null && <CountEmployees countEmployees={call.length} />}
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Lista de empleados activos'>
          {call !== null && employeeList.length > 0 && (
            <ListEmployees employees={employeeList as any} />
          )}
        </DashboardContainer>
      </main>
    </DashboardLayout>
  );
};
