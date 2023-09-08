interface Props {
  params: {
    id: string;
  };
}
const TestIsr = async (props: Props) => {
  const catRes = await fetch(
    'https://api.thecatapi.com/v1/images/search?api_key=live_eR5WiVCdPtIVXHuRUjldY5jIASh35Yr1hdUYMe0YZ7uO7f4NqOA8cbEhwWYToi1d',
  );
  const catData = await catRes.json();
  return (
    <div style={{ maxWidth: '600px' }}>
      <h2>{props.params.id}</h2>
      <img src={catData[0].url} alt="cat" />
    </div>
  );
};

export async function generateStaticParams() {
  return [];
}
export default TestIsr;
export const revalidate = 60;
