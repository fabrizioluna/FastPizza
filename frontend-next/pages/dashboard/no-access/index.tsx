import Router from 'next/router';

const NoAccessGuard = () => {
  return (
    <div className='auth_dashboard'>
      <h2>Recursos protegidos.</h2>
      <p>No tienes permisos suficientes para acceder.</p>
      <p
        onClick={() => Router.back()}
        style={{ color: '#3fbb68', fontWeight: 'bold', cursor: 'pointer' }}
      >
        Regresar a la página anterior.
      </p>
    </div>
  );
};

export default NoAccessGuard;
