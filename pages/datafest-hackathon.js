// pages/datafest-hackathon.js

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import CustomCursor from '../components/CustomCursor';
import { useState, useEffect } from 'react';



import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'], // regular, medium, semibold, bold, extrabold
  subsets: ['latin'],
  display: 'swap', // Ensures text is visible while the font loads
});

// A reusable component for section headers to maintain consistency
const SectionHeader = ({ title }) => (
  <h2 className="text-3xl font-bold text-gray-700 tracking-tight mb-8 text-center">
    {title}
  </h2>
);

export default function DatafestHackathonPage() {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
        <main className={`${poppins.className} min-h-screen w-full font-sans text-gray-900 bg-stone-50`}>

      <CustomCursor />
            <div className="fixed top-6 left-6 z-50">
        <Link href="/#projects" passHref legacyBehavior>
          <a className="flex items-center gap-2 bg-white/50 backdrop-blur-sm p-2 pr-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
            <ArrowLeftIcon className="w-5 h-5 text-gray-600 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold text-gray-700">Back</span>
          </a>
        </Link>
      </div>
      {/* Combined Header and Project Details Section */}
    <div className="bg-blue-100 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 pt-6 pb-4">

          {/* Bottom details part */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mt-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Timeline</h3>
              <p className="text-gray-800 mt-1">48 Hours (25 April - 27 April)</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tools</h3>
              <p className="text-gray-800 mt-1">Python, R, Pandas, Matplotlib, Shiny, Figma, Tableau</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Team</h3>
              <p className="text-gray-800 mt-1"> Daniel Wang, Hannie Xie, John Tan, Ming Yang Li, Oscar Su </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Section 1: The Problem */}
        <section className="text-center mb-24">
          <p className="text-lg font-semibold text-gray-400 -mt-10 mb-5 italic">🏆  Winner: Judges&apos; Choice Prize</p>
          <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6">The Challenge</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-left">
    Real estate companies hold vast amounts of data, but often <strong><span className="text-blue-300">struggle to identify</span></strong> which regions hold the <em>highest potential</em> for future growth across different sectors.
  </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                  <p className="text-3xl font-serif font-bold text-gray-800 flex items-center gap-x-3">
                      <span role="img" aria-label="person icon" className="text-3xl">⚖️</span>
                      <span>~75%</span>
                  </p>
                  <p className="text-gray-600 mt-2 text-medium">of leasing decisions made without predictive analytics</p>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                  <p className="text-3xl font-serif font-bold text-gray-800 flex items-center gap-x-3">
                      <span role="img" aria-label="money with wings icon" className="text-3xl">💸</span>
                      <span>$20-60 million</span>
                  </p>
                  <p className="text-gray-600 mt-2 text-medium">in annual revenue lost</p>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                  <p className="text-3xl font-serif font-bold text-gray-800 flex items-center gap-x-3">
                      <span role="img" aria-label="gravestone icon" className="text-3xl">🕰️</span>
                      <span>6-9 months</span>
                  </p>
                  <p className="text-gray-600 mt-2 text-medium">wasted scouting in low-growth areas</p>
              </div>
          </div>
          <p className="mt-8 text-gray-600 text-lg italic">
            💡 Fueled by adrenaline, and lots of snacks and caffeine, our team developed a solution to tackle this challenge—all within a whirlwind 48 hours.
          </p>
        </section>
{/* Section 2: The Process */}
<section className="text-center mb-24 px-4">
    <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
        The <span className="bg-gradient-to-r from-blue-200 via-indigo-300 to-sky-300">48-Hour</span> Process
    </h1>

    {/* Process Visualization Component */}
    <div className="max-w-6xl mx-auto mt-12">
        {/* Timeline Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            <p className="font-serif text-gray-600 text-medium font-semibold">Fri 2/25 9 P.M.</p>
            <p className="font-serif text-gray-600 text-medium font-semibold">Sat 2/26 12 P.M.</p>
            <p className="font-serif text-gray-600 text-medium font-semibold">Sat 2/26 11 P.M.</p>
            <p className="font-serif text-gray-600 text-medium font-semibold">Sun 2/27 10 A.M.</p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 mt-2 mb-8"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 text-center">
            {/* Column 1: Discover */}
            <div>
                <h3 className="font-serif text-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent uppercase tracking-widest font-bold">Discover</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                    <li>・ Brainstorm</li>
                    <li>・ Research</li>
                    <li>・ Data Cleaning</li>
                    <li>・ Exploratory Data Analysis</li>
                </ul>
            </div>

            {/* Column 2: Define */}
            <div>
                <h3 className="font-serif text-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent uppercase tracking-widest font-bold">Define</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                    <li>・ Research Question</li>
                    <li>・ 5W1H</li>
                    <li>・ Workflow</li>
                </ul>
            </div>

            {/* Column 3: Develop */}
            <div>
                <h3 className="font-serif text-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent uppercase tracking-widest font-bold">Develop</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                    <li>・ Data Visualization</li>
                    <li>・ Modelling</li>
                    <li>・ Interpret Results</li>
                </ul>
            </div>

            {/* Column 4: Deliver */}
            <div>
                <h3 className="font-serif text-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent uppercase tracking-widest font-bold">Deliver</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                    <li>・ Practice</li>
                    <li>・ Presentation</li>
                    <li>・ Pitching & storytelling</li>
                </ul>
            </div>
        </div>
    </div>
    {/* Questions Subsection */}
    <div className="max-w-3xl mx-auto mt-8 mb-12 text-center">
      <p className="italic font-semibold text-gray-400 mb-4 text-xl">
  ❓<span className="text-blue-300">Questions</span> we asked ourselves throughout
    </p>
      <div className="space-y-3 text-lg text-gray-800 leading-relaxed text-left">
        <li> What makes a region “high-growth,” how can we measure that with messy data?</li>
        <li> How did office needs shift pre- vs. post-pandemic across tech, legal, and finance?</li>
        <li> Which trends matter, and which are just noise?</li>
      </div>
    </div>

            {/* Mid-Way Breakdown Subsection */}
        <div className="bg-gray-100 border-l-4 border-blue-300 p-4 rounded-md">
  <p className="italic text-gray-600 text-medium leading-relaxed">
    (Our Mid-Way Breakdown: Hit a wall 24 hours before the deadline, scrapped our plan, took a walk, downed more caffeine, had a deep 1-hour discussion, and came back with one clear goal.)
  </p>
</div>
</section>

        {/* Section 3: Product Showcase */}
        <section className="mb-24 text-center">
    
    {/* Main Section Title */}
    <h1 className="text-4xl md:text-4xl font-normal text-gray-900 mb-12">
      Putting everything together...
    </h1>

    {/* Side-by-Side Image Comparison – Set 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
  {/* Before 1: Static map plot */}
  <div className="text-center">
    <p className="font-semibold text-gray-600 mb-3">
      <span className="bg-blue-200">Before:</span> Densely plotted map
    </p>
    <Image
      src="/1 before.png"
      alt="Map of lease locations before interactivity"
      width={800}
      height={600}
      className="rounded-lg shadow-md object-cover w-full h-[400px] object-contain"
    />
  </div>

  {/* After 1: Labeled, interactive map */}
  <div className="text-center">
    <p className="font-semibold text-gray-600 mb-3">
      <span className="bg-blue-200">After:</span> Map with Sector Markers
    </p>
    <Image
      src="/1 after.png"
      alt="Interactive dashboard with markers and labels"
      width={800}
      height={600}
      className="rounded-lg shadow-xl object-cover ring-2 ring-indigo-400 w-full h-[400px] object-contain"
    />
  </div>
</div>


{/* Side-by-Side Image Comparison – Set 2 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
  {/* Before 2: Basic radar plot */}
  <div className="text-center">
    <p className="font-semibold text-gray-600 mb-3">
      <span className="bg-blue-200">Before:</span> Hard to interpret
    </p>
    <Image
      src="/2 before.png"
      alt="Basic radar chart comparing LA and OC"
      width={800}
      height={600}
      className="rounded-lg shadow-md object-cover w-full h-[400px] object-contain"
    />
  </div>

  {/* After 2: Labeled and interactive radar chart */}
  <div className="text-center">
    <p className="font-semibold text-gray-600 mb-3">
      <span className="bg-blue-200">After:</span> Improved readability and Insight
    </p>
    <Image
      src="/2 after.png"
      alt="Interactive radar chart showing lease and lifestyle metrics"
      width={800}
      height={600}
      className="rounded-lg shadow-xl object-cover ring-2 ring-indigo-400 w-full h-[400px] object-contain"
    />
  </div>
</div>


    {/* Product Showcase Sub-heading */}
    <h2 className="text-2xl italic font-semibold text-white mb-6">
  <span className="bg-gradient-to-r from-blue-200 via-indigo-300 to-sky-300 px-2">
    🌟The Product🌟
  </span>
</h2>

    {/* Embedded PDF Presentation */}
    <div className="w-full max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden border border-gray-200">
    {isClient && (
        <iframe
            src="/Yoohooo Datafest.pdf"
            className="w-full h-[800px]"
            title="Datafest Presentation"
        >
            <p>Your browser does not support PDFs. 
                <a href="/Yoohooo Datafest.pdf">Download the PDF</a> instead.
            </p>
        </iframe>
    )}
</div>
</section>

        {/* Section 4: Final Thoughts */}
        <section className="text-center">
        <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6">Final Thoughts</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-12">
<em>Sleep?</em> DataFest was a blur of caffeine ☕️, chaotic brainstorms, and surprisingly productive late-night breakthroughs—and I 
<span className="text-blue-400">loved</span> every second. As my first hackathon, it taught me how to turn messy data into something actually useful 
(and maybe even a little pretty). </p>
<p className="text-lg mb-12">I walked away not just with a working solution, but with a much deeper appreciation for the <span className="text-blue-400">creative, scrappy</span> process of data storytelling. Big shoutout to my teammates for being insanely talented, and the best people to be stuck in a 48-hour data 
sprint with. Would absolutely do it again… after a long nap.</p>

            <Image
              src="/datafest.jpg" 
              alt="Our team photo at the hackathon"
              width={800}
              height={600}
              className="rounded-lg shadow-xl mx-auto"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/ffffff/374151?text=Team+Photo'; }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
