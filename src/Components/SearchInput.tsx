import { useEffect, useState } from 'react';
import { mutate, KeyedMutator } from 'swr';
import { StreamerSearchLiveDto } from '../api';
import { searchListFetcher } from '../hooks/useSearchList';

export default function SearchInput({
  mutate,
  searchKey,
  setSearchKey,
}: {
  mutate: KeyedMutator<StreamerSearchLiveDto[]>;
  searchKey: string;
  setSearchKey: (value: string) => void;
}) {
  const [dupKey, setDupKey] = useState(searchKey);
  useEffect(() => {
    const timeout = setTimeout(async () => {
      setSearchKey(dupKey);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dupKey]);

  return (
    <div>
      <input
        value={dupKey}
        onChange={e => {
          setDupKey(e.target.value);
        }}
        type="text"
      />
    </div>
  );
}
