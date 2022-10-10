import { useEffect, useState } from 'react';
import { mutate, KeyedMutator } from 'swr';
import { StreamerSearchLiveDto } from '../api';
import { searchListFetcher } from '../hooks/useSearchList';

export default function SearchInput({
  mutate,
}: {
  mutate: KeyedMutator<StreamerSearchLiveDto[]>;
}) {
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const data = await searchListFetcher('/api/search', searchKey);
      if (data) mutate(data);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchKey]);

  return (
    <div>
      <input
        value={searchKey}
        onChange={e => {
          setSearchKey(e.target.value);
        }}
        type="text"
      />
    </div>
  );
}
