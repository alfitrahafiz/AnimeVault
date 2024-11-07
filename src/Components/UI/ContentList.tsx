import { Anime } from '../../Types/interface';

const ContentList: React.FC<{ animeData: Anime[] }> = ({ animeData }) => (
  <section className='mb-12'>
    <div className='space-y-4'>
      {animeData.map((anime) => (
        <div
          key={anime.mal_id}
          className='flex items-center bg-white dark:bg-gray-800 text-text rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow'
        >
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className='min-w-32 h-24 object-cover'
          />
          <div className='p-4'>
            <h3 className='font-semibold mb-2'>{anime.title}</h3>
            <div className='text-sm text-gray-600 hidden md:block'>
              <p>{anime.synopsis?.slice(0, 250) + '...'}</p>
            </div>
            <div className='text-sm text-gray-600 md:hidden block'>
              <p>{anime.synopsis?.slice(0, 25) + '...'}</p>
            </div>

            <div className='flex items-center text-sm text-gray-600'>
              <span>{anime.type}</span>
              <span className='mx-2'>•</span>
              <span>{anime.episodes ? `${anime.episodes} eps` : 'N/A'}</span>
              <span className='mx-2'>•</span>
              <span>Score: {anime.score}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ContentList;
