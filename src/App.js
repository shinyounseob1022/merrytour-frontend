import './App.css';
import Header from './component/Header';
import Container from './component/Container';
import Banner from './component/Banner';
import Wrapper from './component/Wrapper';
import BestOftheMonth from './component/BestOftheMonth';
import Recommend from './component/Recommend';
import UserReview from './component/UserReview';
import Footer from './component/Footer';
import LiveTour from './component/LiveTour';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Wrapper>
          <BestOftheMonth />
          <Recommend />
          <UserReview />
        </Wrapper>
        <LiveTour />
      </Container>
      <Footer />
    </>
  );
}

export default App;
