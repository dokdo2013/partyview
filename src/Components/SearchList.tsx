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
            console.log(streamerListStore);
          }}
        >
          {item.display_name}
        </option>
      ))}
    </div>
  );
}
