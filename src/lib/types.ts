export type SurfSpot = {
  id: string;
  name: string;
  city: string;
  country: string;
  region: string;
  image: string;
  description: string;
  level: string;
  bestSeason: string;
  waveType: string;
  averageWaveHeight: string;
  crowd: string;
  costOfLiving: string;
  facilities: string[];
  affiliateStays: { name: string; url: string }[];
  affiliateActivities: { name: string; url: string }[];
};
