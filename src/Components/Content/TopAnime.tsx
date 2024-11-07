import { useEffect, useState } from 'react';
import { getTopAnime } from '../../api/jikan';
import { Anime } from '../../Types/interface';
import ContentGrid from '../UI/ContentGrid';
import ContentList from '../UI/ContentList';

interface TopAnimeProps {
  viewMode: 'grid' | 'list';
}

const TopAnime: React.FC<TopAnimeProps> = ({ viewMode }) => {
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const fetchAnime = async (pageNum: number) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getTopAnime({
        filter: 'bypopularity',
        limit: 20,
        page: pageNum,
      });

      setAnimeData(response.data);
      setHasNext(response.hasNext);
      setCurrentPage(response.currentPage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(1);
  }, []);

  const handlePrevPage = () => {
    if (!isLoading && currentPage > 1) {
      fetchAnime(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLoading && hasNext) {
      fetchAnime(currentPage + 1);
    }
  };

  return (
    <div className='min-h-screen bg-background text-text pt-16'>
      <main className='lg:ml-64 min-h-screen transition-all duration-300'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {isLoading ? (
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center space-x-2'>
                <div className='w-8 h-8 border-t-4 border-blue-500 rounded-full animate-spin'></div>
              </div>
            </div>
          ) : error ? (
            <p className='text-red-500'>{error}</p>
          ) : viewMode === 'grid' ? (
            <ContentGrid animeData={animeData} />
          ) : (
            <ContentList animeData={animeData} />
          )}

          <div className='flex justify-center items-center gap-4 pt-10'>
            <button
              onClick={handlePrevPage}
              disabled={isLoading || currentPage === 1}
              className={`px-4 py-2 bg-accent text-white dark:text-black rounded-lg hover:bg-primary/80 transition-colors ${
                isLoading || currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Prev ({currentPage - 1})
            </button>

            <span className='font-medium'>Page {currentPage}</span>

            <button
              onClick={handleNextPage}
              disabled={isLoading || !hasNext}
              className={`px-4 py-2 bg-accent text-white dark:text-black rounded-lg hover:bg-primary/80 transition-colors ${
                isLoading || !hasNext ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Next ({currentPage + 1})
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopAnime;
