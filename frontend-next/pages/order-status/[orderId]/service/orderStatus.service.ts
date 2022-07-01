import { client } from "@/config/axios.config";

export const getOrder = (orderId: string) => {
  return client
    .get(`order/get?id=${orderId}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
