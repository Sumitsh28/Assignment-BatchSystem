import Banner from "@/components/banner/banner";
import Faq from "@/components/faq/faq";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Testimonial from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Faq />
      <Banner />
      <Footer />
    </div>
  );
}
