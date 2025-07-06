import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react'; // Import useState
import { Poppins } from 'next/font/google';
import CustomCursor from '../components/CustomCursor';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Initialize Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * A reusable 3D shape component that rotates continuously.
 */
function RotatingShape() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Icosahedron ref={meshRef} args={[2, 0]}>
      <meshStandardMaterial color="#FDA4BA" roughness={0.5} />
    </Icosahedron>
  );
}

// --- Data for the page sections ---

const quotes = [
  {
    emoji: "💡",
    title: "When Progress Feels Impossible",
    text: "“Just keep swimming.”",
    author: "Finding Nemo",
  },
  {
    emoji: "✨",
    title: "Be Yourself",
    text: "“You cannot live your life to please others. The choice must be yours.”",
    author: "Alice in Wonderland",
  },
  {
    emoji: "❤️",
    title: "Craft with Love",
    text: "“Whatever you do, do it with all your heart.”",
    author: "The Princess Diaries",
  },
];

// Updated favorites data with your new items and local image path
const favorites = [
    {
        category: "Movies",
        emoji: "🎬",
        items: [
            { name: "Parasite", imageUrl: "/parasite.png" },
            { name: "Ne Zha", imageUrl: "/nezha.png" },
            { name: "Top Gun", imageUrl: "/topgun.png" },
            { name: "The Platform", imageUrl: "/platform.png" },
            { name: "Sheep without a Shepherd", imageUrl: "/sheep.png" }
        ]
    },
    {
        category: "Shows",
        emoji: "📺",
        items: [
            { name: "Squid Game", imageUrl: "/squid.png" },
            { name: "The Disguiser", imageUrl: "/disguiser.jpg" },
            { name: "Wednesday", imageUrl: "/wednesday.jpg" },
            { name: "Joy of Life", imageUrl: "/joy.png" },
            { name: "Till the End of the Moon", imageUrl: "/moon.jpg" }
        ]
    }
];

// Data for the new "My Works" section
const myWorks = [
    { src: '/portfolio/photo 1.png', alt: 'Photo 1' },
    { src: '/portfolio/photo 2.png', alt: 'Photo 2' },
    { src: '/portfolio/photo 3.png', alt: 'Photo 3' },
    { src: '/portfolio/photo 4.png', alt: 'Photo 4' },
    { src: '/portfolio/photo 5.png', alt: 'Photo 5' },
    { src: '/portfolio/photo 6.png', alt: 'Photo 6' },
    { src: '/portfolio/photo 7.png', alt: 'Photo 7' },
    { src: '/portfolio/photo 8.png', alt: 'Photo 8' },
    { src: '/portfolio/photo 9.png', alt: 'Photo 9'},
];

function ImageLightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center z-[100] transition-opacity duration-300 overflow-y-auto p-4 md:p-8"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl my-auto" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Enlarged view" className="w-full h-auto object-contain rounded-lg shadow-2xl" />
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 md:top-2 md:right-2 bg-white rounded-full p-2 text-gray-800 hover:bg-pink-100 transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

/**
 * The main component for the Playground page.
 */
export default function Playground() {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <main className={`${poppins.className} min-h-screen w-full font-sans text-gray-900 bg-gradient-to-b from-rose-50 via-white to-pink-50`}>
      <CustomCursor />
      
      {/* ================= Nav Bar ================= */}
      <nav className="sticky top-0 z-50 w-full bg-[#FDEFF5]/90 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" passHref>
            <h1 className="text-lg md:text-xl font-semibold tracking-wide cursor-pointer hover:text-pink-400 transition-colors">
              Hannie X.
            </h1>
          </Link>
          <ul className="hidden md:flex space-x-8 text-sm md:text-base font-normal text-gray-600">
            <li><Link href="/#about" className="hover:text-pink-400 transition-colors">About</Link></li>
            <li><Link href="/#experience" className="hover:text-pink-400 transition-colors">Experiences</Link></li>
            <li><Link href="/#projects" className="hover:text-pink-400 transition-colors">Projects</Link></li>
            <li><Link href="/#skills" className="hover:text-pink-400 transition-colors">Skills</Link></li>
            <li>
              <Link href="/playground" className="flex items-center gap-1 text-pink-500 font-semibold transition-colors">
                Playground
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </Link>
            </li>
          </ul>
          <a
            href="https://www.linkedin.com/in/hannie-xie/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-800 px-4 py-1 text-sm md:text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
          >
            Connect
          </a>
        </div>
      </nav>

      {/* ================= Welcome Section ================= */}
      <section className="py-20 text-center">
        <div className="h-96 w-full max-w-2xl mx-auto cursor-grab active:cursor-grabbing">
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <directionalLight position={[-10, -10, -5]} intensity={0.7} />
            <RotatingShape />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        <h1 className="mt-8 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Welcome to Playground!
        </h1>
      </section>

      {/* ================= My Works Section ================= */}
      <section id="my-works" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-16">
                Some Works
            </h2>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {myWorks.map((work, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
                        <img
                            src={work.src}
                            alt={work.alt}
                            className="w-full h-auto object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            onClick={() => setSelectedImage(work.src)}
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/fdeff5/374151?text=Image+Not+Found'; }}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= Quotes Section ================= */}
      <section id="quotes" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-medium text-gray-800 mb-12">
              My Favorite Movie Quotes
              <span className="ml-3 text-lg font-normal text-gray-500 italic">
                  / a.k.a. My Life Philosophy
              </span>
          </h2>
          <div className="space-y-10">
              {quotes.map((quote, index) => (
                  <div key={index} className="border-b border-gray-200 pb-10">
                      <div className="flex items-start gap-4">
                          <span className="text-2xl mt-1">{quote.emoji}</span>
                          <div>
                              <h3 className="text-xl font-semibold text-gray-700">{quote.title}</h3>
                              <blockquote className="mt-2 text-lg text-gray-600 italic">
                                {quote.text}
                                <span className="ml-2 not-italic text-sm text-gray-500">— {quote.author}</span>
                              </blockquote>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </section>

      {/* ================= Favorites Section ================= */}
      <section id="favorites" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-16">
                Rabbit holes I proudly fall into
            </h2>
            <div className="space-y-16">
                {favorites.map((favCategory, index) => (
                    <div key={index}>
                        <h3 className="flex items-center gap-3 text-2xl font-normal text-gray-700 mb-6">
                            <span className="text-3xl">{favCategory.emoji}</span>
                            {favCategory.category}
                        </h3>
                        {/* FIX: Use text-center on a wrapper and inline-grid on the grid itself to center it. */}
                        <div className="text-center">
                            <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                                {favCategory.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="relative group aspect-[2/3] rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x600/fdeff5/374151?text=Image'; }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-pink-300 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-semibold text-white text-center p-2">
          {item.name}
        </span>
    </div>
</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>


 {/* ================= Image Lightbox Modal ================= */}
      <ImageLightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
}