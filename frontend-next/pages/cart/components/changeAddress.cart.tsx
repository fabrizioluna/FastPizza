import { Fragment, useState } from 'react';

export const ChangeAddress = ({
  setChangeAddress,
}: {
  setChangeAddress: (set: any) => void;
}) => {
  const [value, setValue] = useState<{ address: string }>({ address: '' });
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  return (
    <Fragment>
      <input
        type='text'
        name='address'
        placeholder='Actualizar lugar de entrega'
        onChange={onChangeInput}
      />
      <button
        onClick={() =>
          setChangeAddress({ change: false, newAddress: value.address })
        }
      >
        Actualizar
      </button>
    </Fragment>
  );
};
