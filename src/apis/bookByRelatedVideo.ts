import { BookByRelatedVideo } from 'src/types/napi';
import napiGetRequester from './common/napiGetRequester';

const bookByRelatedVideo = async ({
  titleCode,
  pageSize,
  isParentalLock,
}: {
  titleCode: string;
  pageSize?: number;
  isParentalLock: boolean;
}): Promise<BookByRelatedVideo> =>
  napiGetRequester<BookByRelatedVideo>({
    path: '/v1/books/related_book',
    params: {
      title_code: titleCode,
      age_rating_code: isParentalLock ? 'R15' : '',
      page_size: pageSize || 100,
      page_number: 1,
    },
  });
export default bookByRelatedVideo;
