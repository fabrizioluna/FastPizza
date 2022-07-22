export const showFormErrors = (
  formFieldsRef: {
    current: Array<any>;
  },
  results: any
) => {
  return formFieldsRef.current
    .filter((formField: any) =>
      results.some((field: any) => formField.name === field.key)
    )
    .map((formField: any) => (formField.style.borderColor = 'red'));
};
