export const CountEmployees = ({
  countEmployees,
}: {
  countEmployees: number;
}) => {
  return (
    <div>
      <p>Numero de empleados registrados</p>
      <p>{countEmployees}</p>
    </div>
  );
};
