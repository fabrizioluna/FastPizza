import Router from 'next/router';
import { CustomForm } from '@/components/form/form.component';
import { createDashboardUser } from '@/redux/states/dashboard';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { authSessionCookieStorage } from '@/utils/sessionStorage/localSessionStorage';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeeWithTokenAdapter } from '../employees/adapters/employee.adapter';
import { loginDashboard } from './service/dashboardAuth.service';
import { PageHead } from '@/components/pageHead/pageHead.component';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { FormAuth } from './types/auth.types';
import { auth_validation } from './forms/auth.validation';
import { ResponseFormValues } from '@/components/form/formHandler/form.types.formHandler';
import { showFormErrors } from '@/components/form/form.showErrors';

const DashboardAuth = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState<FormAuth>({
    employee_password: '',
    employee_uniqueCode: '',
  });
  const [errorAuth, setErrorAuth] = useState<boolean>(false);
  const formFieldsRef = useRef<any>([]);

  const authHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    FormValuesHandler.check(auth_validation(values as unknown as FormAuth))
      .then(async () => {
        const { data, statusCode } = await loginDashboard(values);

        if (statusCode !== STATUS_CODE.SUCCESS) return setErrorAuth(true);

        const employeeAdapted = employeeWithTokenAdapter(
          data.employee,
          data.token
        );
        dispatch(createDashboardUser(employeeAdapted));
        authSessionCookieStorage()?.set(data.token, data.employee._id);

        Router.push('/dashboard/account');
      })
      .catch(({ results }: ResponseFormValues) => {
        showFormErrors(formFieldsRef, results);
      });
  };

  return (
    <div className='auth_dashboard'>
      <PageHead titlePage='Recursos protegidos. Inicia sesión' />
      <h2>Recursos protegidos.</h2>
      <p>Por favor autenticate para continuar.</p>
      {errorAuth && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          Credenciales no válidas.
        </p>
      )}
      <article>
        <div className='dashboardFormAuth'>
          <CustomForm
            formStyles={{}}
            formFieldsRef={formFieldsRef}
            setValueInputs={setValues}
            values={values}
            isEditingForm={false}
            inputs={[
              {
                name: 'employee_uniqueCode',
                type: 'text',
                placeholder: 'Ingresa tu número de empleado',
              },
              {
                name: 'employee_password',
                type: 'password',
                placeholder: 'Contraseña de acceso',
              },
            ]}
            submitCallback={authHandler}
            buttonMessage={'Ingresar al Dashboard'}
          />
        </div>
      </article>
    </div>
  );
};

export default DashboardAuth;
