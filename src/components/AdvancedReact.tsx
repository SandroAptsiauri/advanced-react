import {
  ChangeEvent,
  useMemo,
  useState,
  useTransition,
} from "react";
import { photos } from "./photos";
import { TPhotos } from "../types/photos.type";

const AdvancedReact = () => {
  const [data, setData] = useState<TPhotos[]>([]);
  const [input, setInput] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const filteredData = useMemo(() => {
    return data?.filter((photo) =>
      photo.title.toLocaleLowerCase().includes(input)
    );
  }, [input, data]);
  const onClick = () => {
    setData(photos);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setInput(e.target.value);
    });
  };
  return (
    <div>
      <input type="text" onChange={onChange} />
      <div>
        <button onClick={onClick}>Click to get photos</button>
        {isPending && <h1>Loading . . . </h1>}
        {filteredData?.map(({ title, id }) => (
          <div key={id}>
            <h1>{title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedReact;
