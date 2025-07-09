import React, { useState } from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchValue);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSearch}>
          </Button>
        </div>
      </div>
    </div>
  );
}
