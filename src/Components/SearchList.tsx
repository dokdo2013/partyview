import { StreamerSearchLiveDto } from '../api';
import streamerListStore from '../stores/StreamerListStore';

export default function SearchList({
  list,
  setSearchKey,
}: {
  list: StreamerSearchLiveDto[];
  setSearchKey: (value: string) => void;
}) {
  return (
    <div className="absolute text-red-600 mt-8">
      {list.map(item => (
        <option
          key={item.id}
          onClick={() => {
            streamerListStore.addStreamer(item);
            setSearchKey('');
          }}
        >
          {item.display_name}
        </option>
      ))}
    </div>
  );
}
