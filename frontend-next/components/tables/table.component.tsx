import { Fragment, ReactNode } from 'react';

interface TableHeaders {
  nameField: string;
}

interface TableProps {
  fields: TableHeaders[];
  children: ReactNode;
}

export const CustomTable = ({ fields, children }: TableProps) => {
  return (
    <table className='dashboardTable'>
      <thead>
        <tr>
          {fields.map((field, key: number) => <Fragment key={key}>
          <th>{field.nameField}</th>
          </Fragment>)}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};
