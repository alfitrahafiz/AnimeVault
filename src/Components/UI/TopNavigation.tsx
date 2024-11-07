import { LayoutGrid, LayoutList, Menu } from 'lucide-react';
import ThemeToggleButton from '../Theme/ThemeToggleButton';
import Searchbar from '../Search/Searchbar';

interface TopNavigationProps {
  setIsSidebarOpen: (open: boolean) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  setIsSidebarOpen,
  viewMode,
  setViewMode,
}) => {
  return (
    <nav className='bg-background text-text shadow-sm fixed top-0 left-0 right-0 z-30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex py-3 justify-center lg:justify-end'>
          <div className='flex items-center'>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className='lg:hidden p-2 hover:bg-gray-100 rounded-full'
            >
              <Menu className='w-5 h-5' />
            </button>
          </div>
          <Searchbar onSearch={() => console.log('Searching...')} />
          <div className='flex space-x-2'>
            <button
              title='Grid view'
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'
              }`}
            >
              <LayoutGrid className='w-5 h-5' />
            </button>
            <button
              title='List view'
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'
              }`}
            >
              <LayoutList className='w-5 h-5' />
            </button>
          </div>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
