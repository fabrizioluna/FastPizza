import { Paginator } from '@/components/paginator/paginator';
import { CustomTable } from '@/components/tables/table.component';
import { Categories } from 'pages/all-products/types/allproducts.type';
import { Fragment, useState } from 'react';

export const CategoriesList = ({
  categories,
}: {
  categories: Categories[];
}) => {
  const [pagination, setPagination] = useState<number>(0);
  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'Nombre',
          },
          {
            nameField: 'Estado',
          },
        ]}
      >
        {categories
          .slice(pagination, pagination + 10)
          .map((category: Categories) => (
            <tr key={category._id}>
              <td>{category.category_name}</td>
              <td>{category.category_status ? 'activo' : 'inactivo'}</td>
            </tr>
          ))}
        <Paginator
          arr={categories}
          changePage={setPagination}
          currentPage={pagination}
          numberItemsPerPage={10}
        />
      </CustomTable>
    </Fragment>
  );
};
