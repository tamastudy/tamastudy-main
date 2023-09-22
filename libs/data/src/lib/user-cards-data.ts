function randomUUID(): string {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}

export const userCardsData = [
  {
    id: randomUUID(),
    username: 'Jongseok Lee',
    about: '개발을 너무 사랑하는 평범한 개발자입니다.',
    email: 'jonsoku.dev@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jongseok-lee.jpg',
    jobTitle: 'Frontend Engineer',
    jobPlace: 'LINE',
    phone: '(82) 080-7708-3832',
    address: 'Tokyo, Japan',
    customLinks: [
      {
        link: 'https://mentree.club/mentor/interviews/2100',
        text: 'Mentree Interview',
      },
    ],
    sns: {
      linkedIn: 'jongseok-lee-785216191',
    },
  },
  {
    id: randomUUID(),
    username: 'Jongseok Park',
    about:
      '백앤드 개발을 하다 타마스터디에서 프론트 앤드의 매력을 느껴 최근에는 프론트로 이동하였습니다. 🧑🏻‍💻\n배운것을 정리하여 공유하는것을 좋아합니다📝\n최근에는 React, AWS에 관심을 가지고 공부중입니다🔥\n함께 하실분은 언제든 연락주셔요📞',
    email: 'pjongsuk1@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jongseok-park.jpg',
    jobTitle: 'WEB Engineer',
    jobPlace: '株式会社メンバーズ',
    address: 'Tokyo, Japan',
    sns: {
      linkedIn: 'jongseok-park-266a911b9',
    },
  },
  {
    id: randomUUID(),
    username: 'Jeonghan Gam',
    about: '요시! 요로시쿠네~',
    email: 'jgam@alumni.nd.edu',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jeonghan-gam.jpg',
    jobTitle: 'Backend Engineer',
    jobPlace: 'QuotaBook',
    address: 'Seoul, Korea',
    kakaoId: 'gam8999',
    lineId: 'gam8999',
    sns: {
      linkedIn: 'jeonghan-jimmy-gam-67726b127',
      facebook: 'jgam1333',
      instagram: 'jgam__',
      kakao: 'gam8999',
      line: 'gam8999',
    },
    customLinks: [
      {
        link: 'https://mentree.club/mentor/interviews/2085',
        text: 'Mentree Interview',
      },
      {
        link: 'https://nomadcoders.co/community/thread/1308',
        text: 'Nomadcoders Interview',
      },
    ],
  },
  {
    id: randomUUID(),
    username: 'Sungtae Kim',
    about:
      '타인의 삶과 비교하지 마라\n해와 달은 서로를 비교하는 법이 없다\n그들은 단지 그들의 시간대에서 빛나고 있을 뿐\n네가 가는 길도 맞고 내가 가는 길도 맞다',
    email: 'ttvt@naver.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/sungtae-kim.jpg',
    jobTitle: 'WEB Engineer',
    jobPlace: 'smarting',
    address: 'Tokyo, Japan',
    sns: {
      instagram: 'st__soso',
    },
  },
  {
    id: randomUUID(),
    username: 'Dongmin Park',
    about: '크리에이티브를 좋아하는 개발자',
    email: 'dongmin.park.career@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/dongmin-park.jpg',
    jobTitle: 'Frontend Engineer',
    jobPlace: 'TORIHADA',
    address: 'Tokyo, Japan',
    kakaoId: 'jm2pm',
    lineId: 'g2o2d',
    sns: {
      instagram: 'dmm_0877',
      linkedIn: 'dongmin-park-47559b1ab',
      facebook: 'dongmin.park.330',
      twitter: 'pakudoburi',
      github: 'dongmin7208',
    },
  },
  {
    id: randomUUID(),
    username: 'Hyeongil Park',
    about: 'ㄱㅈㅇ!!',
    email: 'youuy28@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/hyeongil-park.jpg',
    jobTitle: 'WEB Engineer',
    jobPlace: 'teamLab',
    address: 'Tokyo, Japan',
  },
  {
    id: randomUUID(),
    username: 'Airi Narita',
    about:
      'エンジニアへのキャリアチェンジ。R4.11~ 学習記録、アウトプット！毎日更新。 HTML,CSS,SaSS,JavaScript,REACT,SQL,Ruby on Rails AWS...etc',
    email: 'airiswim.kitty@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/airi-narita.jpg',
    jobTitle: 'Backend Engineer',
    jobPlace: 'teamLab',
    address: 'Tokyo, Japan',
    sns: {
      twitter: 'aaaairinkiyowo',
      zenn: 'airiswim',
      github: 'airinarita',
    },
    customLinks: [
      {
        link: 'https://narita-airi.com/',
        text: 'Engineer Blog - Together',
      },
    ],
  },
  {
    id: randomUUID(),
    username: 'Hasegawa Anju',
    about: '',
    email: '',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jess-hong.jpg',
    jobTitle: 'Backend Engineer',
    jobPlace: 'teamLab Engineering',
    address: 'Tokyo, Japan',
    sns: {},
    customLinks: [],
  },
  {
    id: randomUUID(),
    username: 'Soyeon Jeon',
    about: '',
    email: '',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jess-hong.jpg',
    jobTitle: 'Frontend Engineer',
    jobPlace: 'Bullet Group',
    address: 'Tokyo, Japan',
    sns: {},
    customLinks: [],
  },
  {
    id: randomUUID(),
    username: 'Seungyeon Lee',
    about: '',
    email: '',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jess-hong.jpg',
    jobTitle: 'Frontend Engineer',
    jobPlace: 'PERSOL PROCESS & TECHNOLOGY CO., LTD.',
    address: 'Tokyo, Japan',
    sns: {},
    customLinks: [],
  },
  {
    id: randomUUID(),
    username: 'Soohyun Lee',
    about: '',
    email: '',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jess-hong.jpg',
    jobTitle: 'Backend Engineer',
    jobPlace: '-',
    address: 'Tokyo, Japan',
    sns: {},
    customLinks: [],
  },
  {
    id: randomUUID(),
    username: 'Sayaka Sugawara',
    about: 'ECサイト運営からエンジニア転職を目指して勉強中です🌱',
    email: 'uknow.love1229@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/sugawara-sayaka.jpg',
    jobTitle: 'Frontend Engineer',
    jobPlace: 'TECHNOPRO',
    address: 'Tokyo, Japan',
    sns: {
      zenn: 'goldsaya',
    },
  },
  {
    id: randomUUID(),
    username: 'Jess Hong',
    about:
      'IT 업종에서 종사한지 5년차 Jess입니다.Product Manager 이다보니여기저기 코딩공부하고 있어요. ',
    email: 'snowdl@naver.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jess-hong.jpg',
    jobTitle: 'Product Manager',
    jobPlace: 'Rakuten',
    address: 'Tokyo, Japan',
  },
  {
    id: randomUUID(),
    username: 'Jeonghun Park',
    about: '얼른 회사원!',
    email: 'seoul2015.11.14@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/jeonghun-park.jpg',
    jobTitle: 'PM',
    jobPlace: 'Hitachi solutions',
    address: 'Tokyo, Japan',
    sns: {
      instagram: 'seoul201596',
    },
  },
  {
    id: randomUUID(),
    username: 'Seonhui Park',
    about: '박선희입니다.',
    email: 'sonyyy1806@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/seonhui-park.jpg',
    jobTitle: 'マークアップエンジニア',
    jobPlace: 'ark',
    address: 'Tokyo, Japan',
    sns: {
      instagram: 'sun_ny0_0',
      github: 'sunnyheee',
    },
  },
  {
    id: randomUUID(),
    username: 'Taeho Jang',
    about: '내 꿈의 근처라도 가보고는 죽어야지 싶더라고!',
    email: 'nairtehosh@gmail.com',
    profileImg:
      'https://bucket-rctv5y.s3.ap-northeast-1.amazonaws.com/members/profile-images/taeho-jang.jpg',
    jobTitle: 'FRONT ENGINEER',
    jobPlace: 'teamLab',
    address: 'Tokyo, Japan',
    sns: {
      instagram: 'tehokr',
      linkedIn: 'taeho-jang-873345139',
    },
  },
];
