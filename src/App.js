/** 再レンダリングが起きる条件
 * stateが更新されたコンポーネントは再レンダリング
 * propsが変更されたコンポーネントは再レンダリング
 * 再レンダリングされたコンポーネント配下の子要素は再レンダリング
 * https://zenn.dev/b1essk/articles/react-re-rendering#%E5%86%8D%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0%E3%82%92%E6%9C%80%E9%81%A9%E5%8C%96%E3%81%99%E3%82%8B
 */

import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => {
    setOpen(!open);
  };

  /** 子コンポーネントのmemo化
   * 子コンポーネントに関数を渡す場合は
   * useCallback()で関数をmemo化する
   */
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  /** 変数のmemo化 */
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
