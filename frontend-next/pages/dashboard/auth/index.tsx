import { CustomForm } from '@/components/form/form.component';
import { useState } from 'react';

const DashboardAuth = () => {
  const [values, setValues] = useState();

  const authHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // const { statusCode } = await createExpense(values as unknown as Expense);
  };
  return (
    <div className='auth_dashboard'>
      <h2>Recursos protegidos.</h2>
      <p>Por favor autenticate para continuar.</p>
      <article>
        <div className='dashboardFormAuth'>
          <CustomForm
            setValueInputs={setValues}
            values={values}
            isEditingForm={false}
            inputs={[
              {
                name: 'employee_envoice',
                type: 'text',
                placeholder: 'Ingresa tu número de empleado',
              },
              {
                name: 'employee_password',
                type: 'text',
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
