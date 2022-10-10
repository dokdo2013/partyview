import { useSearchList } from '../hooks/useSearchList';
import SearchInput from './SearchInput';

export default function SearchBar() {
  const { data, mutate } = useSearchList('');

  console.log(data);

  return (
    <div>
      {data ? (
        data?.map(user => (
          <div style={{ color: 'red' }} key={user.id}>
            {user.display_name}
          </div>
        ))
      ) : (
        <></>
      )}
      <SearchInput mutate={mutate} />
    </div>
  );
}
