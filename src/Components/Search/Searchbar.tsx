import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchbarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchbarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <div className='flex-1 max-w-3xl lg:max-w-xl xl:max-w-3xl mx-4'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search anime...'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className='w-full pl-10 pr-4 py-1.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        />
        <Search
          onClick={handleSearch}
          className='absolute left-3 top-2.5 w-5 h-5 text-gray-400 cursor-pointer'
        />
      </div>
    </div>
  );
}
