import { Layout } from '@/components/layout';
import { PageHead } from '@/components/pageHead/pageHead.component';
import React, { useState } from 'react';
import { ConfirmForm } from './components/confirmForm';
import { RegisterForm } from './components/registerForm';

const SingUp = () => {
  const [values, setValues] = useState();
  const [valuesSecond, setValuesSecond] = useState();
  const [previuosValues, setPreviuosValues] = useState<{ _id: string }>();
  const [enterCode, setEnterCode] = useState<boolean>(false);

  return (
    <Layout>
      <PageHead titlePage='Registrate gratis' />
      {!enterCode && (
        <RegisterForm
          setValues={setValues}
          values={values}
          setPreviuosValues={setPreviuosValues}
          setEnterCode={setEnterCode}
        />
      )}
      {enterCode && (
        <ConfirmForm
          setValuesSecond={setValuesSecond}
          valuesSecond={valuesSecond}
          previuosValues={previuosValues}
        />
      )}
    </Layout>
  );
};

export default SingUp;
