export const CountEmployees = ({
  countEmployees,
}: {
  countEmployees: number;
}) => {
  return (
    <div>
      <h4>Numero de empleados registrados</h4>
      <h1>{countEmployees}</h1>
    </div>
  );
};
