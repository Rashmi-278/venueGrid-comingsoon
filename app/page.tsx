import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      <div className="space-y-1">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
          Venue Grid
        </h2>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
          Discover your perfect venue
        </h1>
        <h1 className="z-10 text-xl text-center text-transparent duration-1000 bg-white cursor-default sm:text-3xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-gray-300 to-gray-800 animate-fade-in-3">
          Coming Soon
        </h1>
      </div>
      <NewsletterForm />
      <Socials />
    </main>
  );
}
