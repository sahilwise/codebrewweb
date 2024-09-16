import Image from "next/image";
import NavBar from "./components/NavBar/page";
import Footer from "./components/Footer";
import BlogData from "./components/BlogData";
export default function Home() {
  return (
    <>
    <NavBar />
      <div className="flex flex-col h-screen bg-background text-foreground">
       
      {/* Top sticky floating nav */}
      <nav className="sticky top-0 z-10 bg-primary text-primary-foreground p-4">
          <p className="text-center">6/20 ~ Best Free Antivirus Software for Windows</p>
      </nav>

      {/* Content area */}
      <main className="flex-grow overflow-hidden p-6 mx-52">
        <BlogData />
      </main>

      {/* Bottom sticky floating nav */}
      <nav className="sticky bottom-0 z-10 bg-secondary text-secondary-foreground p-4 shadow-md">
          <p className="text-center">7/20 ~ verything Apple Announced at WWDC</p>
      </nav>
    </div>
    </>
  );
}
