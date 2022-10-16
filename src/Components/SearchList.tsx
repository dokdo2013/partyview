import { StreamerSearchLiveDto } from '../api';
import streamerListStore from '../stores/StreamerListStore';

export default function SearchList({
  list,
}: {
  list: StreamerSearchLiveDto[];
}) {
  return (
    <div>
      {list.map(item => (
        <option
          key={item.id}
          onClick={() => {
            streamerListStore.addStreamer(item);
          }}
        >
          {item.display_name}
        </option>
      ))}
    </div>
  );
}
