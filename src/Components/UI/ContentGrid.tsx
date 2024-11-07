// ContentGrid.tsx
import { Anime } from '../../Types/interface';

const ContentGrid: React.FC<{ animeData: Anime[] }> = ({ animeData }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {animeData.map((anime) => (
        <div
          key={anime.mal_id}
          className='relative bg-white dark:bg-gray-900 text-white p-4 rounded-lg shadow-md'
        >
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className='w-full h-64 object-cover rounded-lg'
          />
          <div className='absolute top-2 left-2 bg-teal-700 text-xs px-2 py-1 rounded'>
            {anime.status}
          </div>
          <div className='absolute top-2 right-2 bg-gray-700 text-xs px-2 py-1 rounded'>
            {anime.rating?.slice(0, 5)}
          </div>

          <div className='mt-4'>
            <h3 className='text-lg font-semibold truncate text-black'>{anime.title}</h3>
            <p className='text-sm text-gray-400'>{anime.episodes} episodes</p>

            <div className='flex items-center mt-2 space-x-2'>
              <span className='text-sm'>⭐ {anime.score}</span>
              <span className='text-sm text-gray-400'>#{anime.rank} Ranking</span>
            </div>

            <div className='flex flex-wrap gap-2 mt-3'>
              {anime.genres?.slice(0, 2).map((genre) => (
                <span key={genre.name} className='text-xs bg-gray-800 px-2 py-1 rounded-md'>
                  {genre.name}
                </span>
              ))}
              {anime.genres?.length > 2 && (
                <span className='text-xs bg-gray-800 px-2 py-1 rounded-full'>
                  +{anime.genres.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
