import { client } from "@/config/axios.config";

export const validateDiscount = (discountObject: any) => {
  return client
    .post('discount/validate_discount', discountObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
