import { statusCode } from '../responseStatus/responseStatus';

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

    if (status === statusCode.NOT_FOUND) {
      localStorage.setItem(key, JSON.stringify([element]));
      return sendRes(200, element);
    }

    // const dataParse = JSON.parse(data)
    localStorage.setItem(key, JSON.stringify([ ...data, element ]));
    return sendRes(200, element);
  },
  deleteRow(key: string, index: number) {
    const { status, data } = this.get(key);
    
    if(status === statusCode.NOT_FOUND) return sendRes(404, 'No hay informacion para eliminar.')

    // const dataParse = JSON.parse(data);
    Array.isArray(data) ? data.splice(index, 1) : null;

    // TODO: Queda pendiente cambiar esto por x indice.
    localStorage.setItem(key, JSON.stringify(data))

    // console.log('El data despues del pop', nextArray, dataParse)

  },
  clear(key: string) {
    const Key = this.get(key);

    const { status } = Key;
    if(status === statusCode.SUCCESS) return localStorage.clear()

  }
};

export const sendRes = (status: number, response: any) => {
    // let res = null;
    // typeof response === 'string' ? res = response : res = JSON.parse(response)
  return status === 200
    ? { status: 200, data: response }
    : { status: 404, data: response };
};
