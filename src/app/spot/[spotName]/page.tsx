import { surfSpots } from "@/lib/data";
import Image from "next/image";
import { SurfSpot } from "@/lib/types";
import { Calendar, DollarSign, MapPin, Users, Waves } from "lucide-react";
import { notFound } from "next/navigation";

export default async function SpotPage({
  params,
}: {
  params: Promise<{ spotName: string }>;
}) {
  const { spotName } = await params;

  const spot = surfSpots.find((spot) => spot.id === spotName) as SurfSpot;

  if (!spot) {
    return notFound();
  }

  return (
    <main>
      <div className="min-h-screen bg-background flex flex-col gap-20">
        <header className="relative h-[30vh] overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src={"/images/hero.webp"}
            alt={`${spot.name} surf spot`}
            className="w-full h-full object-cover"
          />
        </header>

        <main className="max-w-5xl mx-auto px-4 relative z-99">
          <article>
            <div className="bg-card rounded-lg shadow-xl p-8 mb-8">
              <header className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
                      {spot.name}
                    </h1>
                    <p className="text-lg text-sky-bg-sky-100-foreground flex items-center gap-2">
                      <MapPin />
                      {spot.city}, {spot.country}
                    </p>
                    <p className="text-md text-sky-bg-sky-100-foreground mt-1">
                      {spot.region}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-400 text-black hover:bg-amber-400/80">
                      {spot.level}
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-400 text-black hover:bg-amber-400/80">
                      {spot.costOfLiving} Cost of Living
                    </div>
                  </div>
                </div>
              </header>

              <p className="text-lg text-black/90 leading-relaxed mb-8">
                {spot.description}
              </p>

              <section className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-sky-100 rounded-lg">
                  <Waves className="h-5 w-5 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Wave Type</h3>
                    <p className="text-sky-bg-sky-100-foreground">
                      {spot.waveType}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-sky-100 rounded-lg">
                  <Waves className="h-5 w-5 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Average Wave Height
                    </h3>
                    <p className="text-sky-bg-sky-100-foreground">
                      {spot.averageWaveHeight}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-sky-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Best Season
                    </h3>
                    <p className="text-sky-bg-sky-100-foreground">
                      {spot.bestSeason}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-sky-100 rounded-lg">
                  <Users className="h-5 w-5 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Crowd Level
                    </h3>
                    <p className="text-sky-bg-sky-100-foreground">
                      {spot.crowd}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-sky-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Cost of Living
                    </h3>
                    <p className="text-sky-bg-sky-100-foreground">
                      {spot.costOfLiving}
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Facilities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {spot.facilities.map((facility) => (
                    <div
                      key={facility}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-400 text-black hover:bg-amber-400/80"
                    >
                      {facility}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </main>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3302274839736991"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3302274839736991"
          data-ad-slot="6895468062"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

        <footer className="bg-sky-100 mt-20 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-sky-bg-sky-100-foreground">
            <p>© 2025 Europe Surf Guide. All rights reserved.</p>
            <p className="text-sm mt-2">
              Affiliate disclosure: We may earn commissions from bookings made
              through our links.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
