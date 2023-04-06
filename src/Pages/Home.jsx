import Row from "../components/Row";
import Main from "../Layout/Main";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId="1" title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId="3" title="Trending" fetchUrl={requests.requestUpcoming} />
      <Row rowId="4" title="Top Rated" fetchUrl={requests.requestTopRated} />
    </div>
  );
};

export default Home;
