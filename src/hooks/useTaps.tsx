import { useState } from "react";

interface Content {
  name: string;
  content: string;
}

const useTaps = (index: number, contents: Content[]): [Content, React.Dispatch<React.SetStateAction<number>>] => {
  const [targetIndex, setTargetIndex] = useState(index);

  return [contents[targetIndex], setTargetIndex];
};

export default useTaps;
