import { CustomForm } from '@/components/form/form.component';
import { useState } from 'react';
// import { AdminDashboard } from './components/admin/admin.dashboard';

const Dashboard = () => {
  const [values, setValues] = useState();

  const loginDashboard = async (e: React.FormEvent) => {};

  return (

    <div className='dashboard'>
        {/* <AdminDashboard /> */}
      {/* <section>
        <h1>Bievenido al Panel de FastPizza. Por favor inicia sesión.</h1>
        <CustomForm
          setValueInputs={setValues}
          values={values}
          inputs={[
            {
              name: 'user_name',
              type: 'text',
              placeholder: 'Ingresa tu numero de empleado',
            },
            {
              name: 'user_password',
              type: 'password',
              placeholder: 'Ingresa tu clave de acceso',
            },
          ]}
          submitCallback={loginDashboard}
          buttonMessage={'Ingresar al Panel'}
        />
      </section> */}
    </div>
  );
};

export default Dashboard;
