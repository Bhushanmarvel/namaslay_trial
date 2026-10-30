import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Transformations from "@/components/Transformations";
import TransformationPillars from "@/components/TransformationPillars";
import EnquiryForm from "@/components/EnquiryForm";
import SocialLinks from "@/components/SocialLinks";
import Intro from "@/components/Intro";
import FloatingWhatsapp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Transformations />
      <Intro />
      <TransformationPillars />

      <section className="bg-white py-10">
        <div className="container-custom grid gap-6 lg:grid-cols-2">
          <EnquiryForm />
          <SocialLinks />
        </div>
      </section>

      <FloatingWhatsapp />
    </>
  );
}