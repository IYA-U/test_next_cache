import { VideoEpisodeByVideo } from 'src/types/napi';
import napiGetRequester from './common/napiGetRequester';

const videoEpisodeByVideo = async ({
  titleCode,
  pageSize,
}: {
  titleCode: string;
  pageSize?: number;
}): Promise<VideoEpisodeByVideo> =>
  napiGetRequester<VideoEpisodeByVideo>({
    path: '/1/cmsuser/episode',
    params: {
      title_code: titleCode,
      page_number: 1,
      page_size: pageSize || 100,
    },
  });
export default videoEpisodeByVideo;
