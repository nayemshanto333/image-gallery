import Gallery from "@/component/gallery";
import Header from "@/component/header/header";
import Navbar from "@/component/nav";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-sky-100 px-5">
      <div className="w-full sm:max-w-screen-2xl mx-auto p-2.5 py-4 md:px-14 md:py-20 bg-white rounded-lg shadow-lg ">
        {/* Navbar section */}
        <Navbar />
        

        {/* Header section */}
        <Header />
        
        {/* Gallery Section */}
        <Gallery />
        
        
      </div>
    </main>
  );
}
