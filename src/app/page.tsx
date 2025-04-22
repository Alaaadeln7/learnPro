"use client";
import Customers from "@/components/ui/homePage/CustomersSection";
import Features from "@/components/ui/homePage/Features";
import Hero from "@/components/ui/homePage/Hero";
import OtherCourses from "@/components/ui/homePage/OtherCourses";
import Steps from "@/components/ui/homePage/Steps";
import ShareKnowlageSection from "@/components/ui/homePage/ShareKnowlageSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main id="root">
      <Hero />
      <Features />
      <Steps />
      <Customers />
      <OtherCourses />
      <ShareKnowlageSection />
      <Footer />
    </main>
  );
}
