import { createParamDecorator } from '@nestjs/common';
import { CustomException } from 'src/utils/responses/custom-exception/error.response';
import { CustomResponse } from 'src/utils/responses/custom-success/success.response';

export const FormatResponse = createParamDecorator(() => {
  return CustomResponse.success('This works good', {});
});
