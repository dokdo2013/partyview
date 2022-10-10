import { useSearchList } from '../hooks/useSearchList';
import SearchInput from './SearchInput';
import SearchList from './SearchList';

export default function SearchBar() {
  const { data, mutate } = useSearchList('');

  console.log(data);

  return (
    <div>
      {data && <SearchList list={data} />}
      <SearchInput mutate={mutate} />
    </div>
  );
}
