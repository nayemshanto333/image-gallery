import Header from "@/component/gallery/header";
import Navbar from "@/component/nav";



export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-sky-100 px-5" >
      <div className="w-full max-w-screen-2xl mx-auto p-20 bg-white rounded-lg shadow-lg ">
        <Navbar/>
        <hr className="mt-4"/>
        <Header/>
        <h1 className=" mt-4 font-bold text-5xl text-lime-600 ">Home page</h1>
        
      </div>
      

      
    </main>
    
  );
}
