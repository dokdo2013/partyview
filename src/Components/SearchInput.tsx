import { useEffect, useState } from 'react';
import { KeyedMutator } from 'swr';
import { StreamerSearchLiveDto } from '../api';

export default function SearchInput({
  searchKey,
  setSearchKey,
}: {
  mutate: KeyedMutator<StreamerSearchLiveDto[]>;
  searchKey: string;
  setSearchKey: (value: string) => void;
}) {
  const [dupKey, setDupKey] = useState(searchKey);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchKey(dupKey);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dupKey]);

  useEffect(() => {
    !searchKey && setDupKey('');
  }, [searchKey]);

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
