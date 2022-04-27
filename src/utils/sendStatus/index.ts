export const sendResponse = {
  success: (res: any, response: any) => res.status(200).json({ response }),
  badRequest: (res: any, response: any) => res.status(400).json({ response }),
  unAuthorized: (res: any, response: any) => res.status(401).json({ response }),
};
