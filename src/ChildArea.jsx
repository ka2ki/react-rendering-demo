import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

/** memoとは？
 * propsが変更されない限りレンダリングしないよ！
 */
export const ChildArea = memo((props) => {
  console.log("ChildAreaがレンダリングされた");
  const { open, onClickClose } = props;
  const data = [...Array(200).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
