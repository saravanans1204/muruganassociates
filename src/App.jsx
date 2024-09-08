import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        <Feedbacks />
        <div className='relative z-0  ' style={{ background: "#000" }}>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div className='relative z-0  ' style={{ background: "#000" }}>
        <Footer />
        <div className="w-full bg-green-100 text-black px-40 pt-20 pb-10 opacity-90 font-medium" >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2 opacity-70">Contact Us</h3>
          <div className="opacity-70">
            📍 <strong className="opacity-80">Address:</strong> <br />
            No: 2, Selvaganapathy Nagar, <br />
            3rd Cross Street, Thiruverkadu, <br />
            Chennai - 600077, India
          </div>
        </div>
        <div>
          <div className="mb-4 opacity-80">
            📞 <strong className="opacity-80">Phone:</strong> <br />
            +91 97917 05083 <br />
            +91 95666 81299 <br />
            +91 93455 89729
          </div>
          <div className="opacity-80">
            ✉️ <strong>Email:</strong> <br />
            <a href="mailto:info@muruganassociates.com">info@muruganassociates.com</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10  opacity-50 text-[10px]">
        &copy; {new Date().getFullYear()} muruganassociates. All rights reserved.
      </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px'
  },
  address: {
    marginBottom: '15px'
  },
  phone: {
    marginBottom: '15px'
  },
  email: {
    marginBottom: '15px'
  }
};

export default App;
