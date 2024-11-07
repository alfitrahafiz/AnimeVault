import { X, TrendingUp, Star, Calendar, Clock, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => (
  <>
    {isSidebarOpen && (
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
        onClick={() => setIsSidebarOpen(false)}
      />
    )}
    <aside
      className={`overflow-y-auto fixed top-0 left-0 z-50 h-full w-64 bg-background text-text shadow-lg transform transition-transform duration-300 lg:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='px-4 py-3'>
        <div className='flex items-center bg-background text-text justify-between md:justify-start gap-5 mb-8'>
          <img src='/jikan.png' alt='...' className='w-5 h-5 md:w-6 md:h-6' />
          <h1 className='text-xl font-bold text-text'>Anime Vault</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className='lg:hidden p-2 hover:bg-gray-100 rounded-full'
          >
            <X className='w-5 h-5' />
          </button>
        </div>
        <nav className='space-y-2'>
          <a
            href='#'
            className='flex items-center space-x-3 p-3 rounded-lg bg-indigo-50 text-indigo-600'
          >
            <TrendingUp className='w-5 h-5' />
            <span>Top Anime</span>
          </a>
          <a href='#' className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50'>
            <Star className='w-5 h-5' />
            <span>Recomendation</span>
          </a>
          <a href='#' className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50'>
            <Calendar className='w-5 h-5' />
            <span>Seasonal</span>
          </a>
          <a href='#' className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50'>
            <Clock className='w-5 h-5' />
            <span>Upcoming</span>
          </a>
        </nav>

        <div className='mt-8'>
          <h2 className='px-3 text-sm font-semibold text-gray-600 uppercase'>Genres</h2>
          <div className='mt-4 space-y-2'>
            {['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'].map((genre) => (
              <button
                key={genre}
                className='w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg'
              >
                <span>{genre}</span>
                <ChevronRight className='w-4 h-4 text-gray-400' />
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  </>
);

export default Sidebar;
