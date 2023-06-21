import data from "./data";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to = "/">
                <Navbar.Brand> Buyopia</Navbar.Brand>
              </LinkContainer>
              
            </Container>
          </Navbar>
          {/* <Link to="/">Buyopia</Link> */}
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen/>}/>
              <Route path="/" element={<HomeScreen/>}/>
            </Routes>
          </Container>
        </main>

        <footer className='text-center'>All rights reserved</footer>
      </div>
    </BrowserRouter> 
  );
}

export default App;
