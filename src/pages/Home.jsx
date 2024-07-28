import styled from "styled-components";
import Hero from "../components/Hero";
import Cards from '../components/Cards';

const Home = () => {
  
  const Container = styled.div`
    margin:0px;
    padding:0px;
  `
  return (
    <Container>
      <Hero/>
      <Cards />
    </Container>
  );
};

export default Home;