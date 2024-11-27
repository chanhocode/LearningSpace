// 타입 별칭
let user: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: 'Neo',
  nickname: 'The One',
  birth: '1984-01-01',
  bio: 'Hello, World!',
  location: 'The Matrix',
};

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
let user2: User = {
  id: 1,
  name: 'Neo',
  nickname: 'The One',
  birth: '1984-01-01',
  bio: 'Hello, World!',
  location: 'The Matrix',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes = {
  korea: 'ko',
  usa: 'us',
  china: 'cn',
  japan: 'jp',
};
let countryCodes2: CountryCodes = {
  korea: 'ko',
  usa: 'us',
  china: 'cn',
  japan: 'jp',
};

type CountryCodes2 = {
  [key: string]: string;
  korea: string;
};
let countryCodes3: CountryCodes2 = {
  korea: 'ko',
};
