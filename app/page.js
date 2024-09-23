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
      <nav className="sticky top-0 py-2 z-10 bg-primary text-primary-foreground bg-gradient-to-r from-white via-slate-100 to-white">
      <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
      </svg>
      </div>
          <p className="text-center text-md">5/20 iPhone 16 Pre Ord...</p>
      </nav>

      {/* Content area */}
      <main className="flex-grow overflow-hidden p-6 mx-52">
        <BlogData />
      </main>

      {/* Bottom sticky floating nav */}
      <nav className="sticky bottom-0 z-10 py-2 bg-secondary text-secondary-foreground shadow-md bg-gradient-to-r from-white via-slate-100 to-white">
          <p className="text-center text-md">7/20 ~ Apple loses ove...</p>
          <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
          </div>
      </nav>
    </div>
    </>
  );
}
