import { CustomForm } from "@/components/form/form.component";
import { STATUS_CODE } from "@/utils/responseStatus/responseStatus";
import { useState } from "react";
import { createNewCategory } from "../services/product.service";

export const CreateCategory = () => {
  const [values, setValues] = useState();

  const registerCategoryHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Manejar las exepciones
    const { data, statusCode } = await createNewCategory(values as any);
    if(statusCode !== STATUS_CODE.SUCCESS){

    }
  };
  return (
    <div className='dashboardForm'>
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formStyles={{ display: 'block' }}
        isEditingForm={false}
        inputs={[
          {
            name: 'category_name',
            type: 'text',
            placeholder: 'Nombre de la categoria',
          },
        ]}
        submitCallback={registerCategoryHandler}
        buttonMessage={'Registrar nueva categoria'}
      />
    </div>
  );
};
