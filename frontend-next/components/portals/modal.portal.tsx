import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('#modalPortal') as HTMLElement)
    : null;
};
