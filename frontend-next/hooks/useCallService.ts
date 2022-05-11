import { useEffect, useState } from 'react';

export const useCallService = (
  callback: (requestService: any) => Promise<any>,
  callbackAdapter: (request: any) => any,
  request?: any
) => {
  const [call, setCall] = useState({});

  useEffect(() => {
    const callService = async () => {
      const data = await callback(request);

      //   Si la data es un array... entonces hace un map del callback del Adapter.
      setCall(
        Array.isArray(data)
          ? data.map((element) => callbackAdapter(element))
          : data
      );
    };
    callService();
  }, []);

  return { call };
};
