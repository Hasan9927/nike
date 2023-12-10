import Nav from './Components/Nav';
import CustormerReviews from './Sections/CustormerReviews';
import Footer from './Sections/Footer';
import Hero from './Sections/Hero';
import PopulerProducts from './Sections/PopulerProducts';
import Services from './Sections/Services';
import SpecialOffer from './Sections/SpecialOffer';
import Subscribe from './Sections/Subscribe';
import SuperQuality from './Sections/SuperQuality';

const app = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero></Hero>
    </section>
    <section className="padding">
      <PopulerProducts></PopulerProducts>
    </section>
    <section className="padding">
      <SuperQuality></SuperQuality>
    </section>
    <section className="padding-x py-10">
      <Services></Services>
    </section>
    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>
    <section className="bg-pale-blue padding">
      <CustormerReviews></CustormerReviews>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe></Subscribe>
    </section>
    <section className="bg-black padding-x padding-y pb-8">
      <Footer></Footer>
    </section>
  </main>
);
export default app;
