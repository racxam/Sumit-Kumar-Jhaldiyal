import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MySpace from "@/components/MySpace";
import RecentProjects from "@/components/RecentProjects";
import Resume from "@/components/Resume";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        {/* <MySpace/> */}
        <Grid />
        <RecentProjects />
        <Clients />
        <Resume />
        <Experience />
        <Approach />
        <Footer />



      </div>
    </main>
  );
}
