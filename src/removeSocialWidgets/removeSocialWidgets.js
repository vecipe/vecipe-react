//おすすめ店舗リストのソーシャルウィジェットを削除する
const remove = () => {
  const pathname = document.location.pathname;
  if (pathname === "/blog/%e4%bf%9d%e5%ad%98%e3%83%aa%e3%82%b9%e3%83%88") {
    const elements = document.getElementsByClassName(
      "veu_socialSet veu_socialSet-position-after veu_contentAddSection"
    );
    console.log(elements);

    const length = elements.length;
    let i = 0;
    while (i < length) {
      elements.item(i).remove();
      i++;
    }
  }
};

export default remove;
