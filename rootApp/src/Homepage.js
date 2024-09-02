import MainApp from 'website/MainApp';

const Homepage = () => {
  return (
    <>
      <div
        className="container"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
      >
        <div
          className="left"
          style={{ background: 'lightgreen', height: '80vh' }}
        >
          left
        </div>
        <div
          className="right"
          style={{ background: 'lightblue', height: '80vh' }}
        >
          right
        </div>
      </div>
      <MainApp />
    </>
  );
};

export default Homepage;
