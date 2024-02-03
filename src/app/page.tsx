import Contacts from "@/components/Contact/Contacts";
import Footer from "@/components/Footer/Footer";
import Herosection from "@/components/Hero/Herosection";
import Navbar from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio";
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto dark:text-white text-gray-950 ">
       <Navbar />
       <Herosection />
       <Service />
       <Portfolio />
       <Contacts />
       <Footer />
    </main>
  );
}
