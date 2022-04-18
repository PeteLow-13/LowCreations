import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AboutScreen from './Screens/AboutScreen';
import FAQScreen from './Screens/FAQScreen';
import ContactScreen from './Screens/ContactScreen';
import HomeScreen from './Screens/HomeScreen';
import WorkGalleryScreen from './Screens/WorkGalleryScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Container>
        <Header />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' exact component={AboutScreen} />
        <Route path='/contact' exact component={ContactScreen} />
        <Route path='/faq' exact component={FAQScreen} />
        <Route path='/work' exact component={WorkGalleryScreen} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
