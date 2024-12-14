import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-color-purple text-white p-4 sm:p-8">
      {/* Container da página */}
      <div className="text-center max-w-4xl p-4 sm:p-8 bg-opacity-50 bg-black rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-wide">
          Welcome to <span className="text-yellow-400">Ink & Ideas</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Step into a space where every piece is crafted to inspire, provoke thought, and resonate with the soul. Explore texts that touch the heart and expand the mind.
        </p>

        {/* Botão para acessar os posts */}
        <Link
          href="/posts"
          className="bg-yellow-400 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-lg sm:text-xl transition-transform transform hover:scale-105 hover:bg-yellow-500"
        >
          Discover Posts
        </Link>
      </div>
    </div>
  );
}