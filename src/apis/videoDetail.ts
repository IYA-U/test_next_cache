import { VideoDetail } from 'src/types/napi';
import napiGetRequester from './common/napiGetRequester';

const videoDetail = async ({
  titleCode,
}: {
  titleCode: string;
}): Promise<VideoDetail> =>
  napiGetRequester<VideoDetail>({
    path: '/1/cmsuser/stage',
    params: {
      title_code: titleCode,
    },
  });
export default videoDetail;
