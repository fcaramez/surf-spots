import { surfSpots } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[500px] bg-linear-to-br from-sky-500 to-sky-600 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/hero.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-sky-900/50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
            Discover Europe&apos;s Best Surf Spots
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 font-normal drop-shadow-sm">
            From beginner-friendly beaches to world-className big wave breaks
            across European coastlines
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl cursor-pointer">
            Explore Surf Spots
          </button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Surf Destinations in Europe
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Europe&apos;s incredible coastlines with our guide to the
            best surfing spots, complete with local tips, cost insights, and
            accommodation recommendations
          </p>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl mb-12 border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Filter Surf Spots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="country"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Country
              </label>
              <select
                id="country"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base bg-white cursor-pointer transition-colors focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              >
                <option>All Countries</option>
                <option>Portugal</option>
                <option>Spain</option>
                <option>France</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="experience"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Experience Level
              </label>
              <select
                id="experience"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base bg-white cursor-pointer transition-colors focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              >
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="cost"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Cost of Living
              </label>
              <select
                id="cost"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base bg-white cursor-pointer transition-colors focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              >
                <option>All Costs</option>
                <option>Low Cost</option>
                <option>Medium Cost</option>
                <option>High Cost</option>
              </select>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surfSpots.map((spot) => (
            <a href={`/spot/${spot.id}`} key={spot.id}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-full h-60 overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {spot.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full whitespace-nowrap">
                      {spot.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {spot.city}, {spot.country}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    {spot.costOfLiving} Cost of Living
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
