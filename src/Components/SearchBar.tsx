import { useState } from 'react';
import { useSearchList } from '../hooks/useSearchList';
import SearchInput from './SearchInput';
import SearchList from './SearchList';

export default function SearchBar() {
  const [searchKey, setSearchKey] = useState('');
  const { data, mutate } = useSearchList(searchKey);

  console.log(data);

  return (
    <div>
      {data && <SearchList list={data} />}
      <SearchInput
        mutate={mutate}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
    </div>
  );
}
