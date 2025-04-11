import { request } from '@/app/_api/axios';
import { sampleEndpoints } from '@/app/_api/services/sample/config';

export default class SampleService {
  public static readonly getSample = () => {
    return request({
      url: sampleEndpoints.getSample(),
      method: 'GET',
    });
  };
}
