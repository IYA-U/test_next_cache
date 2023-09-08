import {
  fetchBookByRelatedVideo,
  fetchVideoDetail,
  fetchVideoEpisodeByVideo,
} from 'src/apis';

interface Params {
  sid: string;
}
const TestIsr = async ({ params }: { params: Params }) => {
  const sid = params.sid;
  const [videoDetail, episodes, relatedVideos] = await Promise.all([
    fetchVideoDetail({ titleCode: sid }),
    fetchVideoEpisodeByVideo({ titleCode: sid }),
    fetchBookByRelatedVideo({ titleCode: sid, isParentalLock: false }),
  ]);

  return (
    <>
      <h2>{params.sid}</h2>
      <pre>{JSON.stringify(videoDetail, null, 2)}</pre>
      <pre>{JSON.stringify(episodes, null, 2)}</pre>
      <pre>{JSON.stringify(relatedVideos, null, 2)}</pre>
    </>
  );
};

export async function generateStaticParams() {
  return [];
}
export default TestIsr;
export const revalidate = 60;
