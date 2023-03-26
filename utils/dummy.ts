export const programmingItems = [
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'TypeScript',
  'Python',
  'Django',
  'Flask',
  'Ruby',
  'Rails',
  'PHP',
  'Laravel',
  'Symfony',
  'Java',
  'Spring',
  'Hibernate',
  'Kotlin',
  'C#',
  'ASP.NET',
  'Angular',
  'Vue.js',
  'Golang',
  'Rust',
  'Elixir',
  'Phoenix',
  'Swift',
  'Objective-C',
  'C++',
  'Scala',
];

export const getRandomItems = (array: string[]) => {
  // 2-5の範囲のランダムな整数を生成
  const randomCount = Math.floor(Math.random() * (10 - 2 + 1)) + 2;

  // 配列の要素をシャッフル
  const shuffledArray = array.sort(() => 0.5 - Math.random());

  // シャッフルされた配列からランダムな個数の要素を取得
  const selectedItems = shuffledArray.slice(0, randomCount);

  // 各要素に対してランダムなIDを割り当てる
  const itemsWithRandomIds = selectedItems.map((item, index) => {
    return { id: index + Math.floor(Math.random() * 100), name: item };
  });
  return itemsWithRandomIds;
};
