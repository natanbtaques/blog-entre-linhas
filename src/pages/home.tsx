import Link from 'next/link';
import BackgroundSlider from '../components/header/backgroundSlider';

export default function HomePage() {
  return (
    <>
      {/* Slider de fundo */}
      <BackgroundSlider />

      {/* Conteúdo da página */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-opacity-50 p-4 sm:p-8 relative z-10">
        {/* Container do conteúdo */}
        <div className="text-center max-w-2xl p-4 sm:p-8 bg-opacity-50 dark-blog rounded-lg shadow-lg white">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-wide white-text-blog">
            Welcome to <span className="white-text-blog">Ink & Ideas</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 tracking-wide">
            Step into a space where every piece is crafted to inspire, provoke thought, and resonate with the soul. Explore texts that touch the heart and expand the mind.
          </p>

          {/* Botão para acessar os posts */}
          <Link
            href="/posts"
            className="color-1 white-text-blog font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-lg sm:text-xl transform hover:bg-amber-700 transition-colors duration-500"
          >
            Discover Posts
          </Link>
        </div>
      </div>
    </>
  );
}
