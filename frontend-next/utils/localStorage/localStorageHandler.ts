import { STATUS_CODE } from '../responseStatus/responseStatus';

export const localStorageHandler = {
  get(key: string) {
    const Key = localStorage.getItem(key);
    if (Key === null)
      return sendRes(404, 'No se encontro información para la key ' + key);

    //   Si existe enviamos la data
    return sendRes(200, JSON.parse(Key));
  },
  set(key: string, element: any) {
    const { status, data } = this.get(key) as { status: number; data: any };

    if (status === STATUS_CODE.NOT_FOUND) {
      localStorage.setItem(key, JSON.stringify([element]));
      return sendRes(200, element);
    }
    localStorage.setItem(key, JSON.stringify([ ...data, element ]));
    return sendRes(200, element);
  },
  deleteRow(key: string, index: number) {
    const { status, data } = this.get(key);
    
    if(status === STATUS_CODE.NOT_FOUND) return sendRes(404, 'No hay informacion para eliminar.')
    Array.isArray(data) ? data.splice(index, 1) : null;

    // TODO: Queda pendiente cambiar esto por x indice.
    localStorage.setItem(key, JSON.stringify(data))

  },
  clear(key: string) {
    const Key = this.get(key);

    const { status } = Key;
    if(status === STATUS_CODE.SUCCESS) return localStorage.setItem(key, JSON.stringify([]))

  }
};

export const sendRes = (status: number, response: any) => {
  return status === 200
    ? { status: 200, data: response }
    : { status: 404, data: response };
};

export const authCookieStorage = () => {
  if (typeof window !== 'undefined') {
      const get = () => {
          const authLocal = localStorage.getItem('authUser');
          // Verificamos primero que exista la cookie.
          if(authLocal === null) return { status: false, error: 'No existe la cookie en el localStorage.' }
          // Si existe lo retornamos ya parseado.
          return { status: true, data: JSON.parse(authLocal) }
      }
      
      const set = (newJWT: string, id: string) => {
          return localStorage.setItem('authUser', JSON.stringify({ jwt: newJWT, id }))
      }
      
      const clear = () => {
          return localStorage.setItem('authUser', JSON.stringify(null));
      }
      
      return { get, set, clear };
  }
}