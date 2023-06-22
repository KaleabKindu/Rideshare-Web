import Map from '../components/Map';

const MyPage = () => {
  return (
    <div>
      <h1>My Page</h1>
      <Map latitude={123.456} longitude={789.012} />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch latitude and longitude from the backend
  const latitude = 123.456;
  const longitude = 789.012;

  return {
    props: {
      latitude,
      longitude,
    },
  };
}

export default MyPage;
