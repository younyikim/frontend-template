import { useQuery } from '@tanstack/react-query';

import { sampleKeys } from '@/app/_api/services/sample/config';
import SampleService from '@/app/_api/services/sample/service';

export const useGetSample = () => {
  return useQuery({
    queryKey: sampleKeys.getSample(),
    queryFn: () => SampleService.getSample(),
  });
};
