/**
 * 위고업잉글리시 웹사이트 문구 모음
 *
 * 사이트에 보이는 글은 모두 이 파일에 있습니다.
 * 따옴표 '...' 안의 글자만 고치면 사이트에 그대로 반영됩니다.
 */

export const APP_URL = 'https://login.wegoupenglish.com'

/* ── 공통 ─────────────────────────────────────────────── */
export const SITE = {
  name: '위고업잉글리시',
  title: '위고업잉글리시 — 문법은 잡히고, 단어는 쌓인다',
  description: '문법과 단어를 잡는 영어 학습관리. 학생은 무료로 시작하세요.',
  email: 'hello@wegoupenglish.com',
  kakao: '@위고업잉글리시',
  hours: '평일 09:00 – 18:00',
}

export const NAV = {
  links: [
    { href: '/academy', label: '학원·선생님용' },
    { href: '/pricing', label: '요금' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: '문의' },
  ],
  login: '로그인',
  cta: '무료로 시작하기',
}

export const FOOTER = {
  intro: '문법·단어 중심 영어 학습관리 서비스.\n학생은 무료.',
  serviceTitle: '서비스',
  supportTitle: '지원',
  contactTitle: '연락처',
  company: [
    '와이앤지크리에이티브 ｜ 대표 이선용 ｜ 사업자등록번호 206-19-73665 ｜ 통신판매업신고 제2014-경기안양-00277',
    '경기도 안양시 동안구 시민대로 361, 1410(관양동, 에이스 평촌타워)',
    'TEL 02-2244-0391 ｜ MAIL hello@wegoupenglish.com',
  ],
  copyright: '© 2026 위고업잉글리시. All rights reserved.',
}

/* ── 홈 ───────────────────────────────────────────────── */
export const HOME = {
  hero: {
    badge: '학생은 평생 무료',
    titleLine1: '문법은 잡히고,',
    titleLine2: '단어는 쌓인다',
    subtitle:
      '하루 10분, 내 수준에 딱 맞는 문법·단어 학습.\n틀린 건 다시 나와서 결국 내 것이 됩니다.',
    cta: '무료로 시작하기',
    secondary: '선생님이신가요? →',
    note: '학생 가입 무료 · 카드 등록 없음 · 1분이면 끝',
  },

  // 히어로 옆 미리보기 카드
  preview: {
    wordLabel: '오늘의 단어',
    word: 'improve',
    wordMeaning: '향상시키다, 나아지다',
    grammarLabel: '문법 퀴즈',
    grammarQuestion: 'She ___ to school every day.',
    grammarOptions: ['go', 'goes', 'going'],
    grammarAnswer: 'goes',
    streak: '🔥 7일 연속 학습',
  },

  pain: {
    title: '혹시 이런 적 있나요?',
    items: [
      { emoji: '😩', text: '단어 100개 외웠는데,\n일주일 뒤엔 10개만 기억난다' },
      { emoji: '🤯', text: '문법 설명은 알겠는데,\n문제만 보면 헷갈린다' },
      { emoji: '😴', text: '뭘 공부해야 할지 몰라서\n그냥 책만 펼쳐 둔다' },
    ],
    answer: '위고업잉글리시가 무엇을, 얼마나 해야 할지 정해줍니다.',
  },

  steps: {
    title: '딱 3단계면 됩니다',
    items: [
      {
        label: 'STEP 1',
        title: '내 레벨 찾기',
        desc: '맞히면 어려워지고, 틀리면 쉬워지는 테스트로 지금 내 실력을 바로 확인',
      },
      {
        label: 'STEP 2',
        title: '오늘의 학습',
        desc: '내 레벨에 맞는 문법 문제와 단어를 매일 조금씩',
      },
      {
        label: 'STEP 3',
        title: '틀린 건 다시',
        desc: '약한 부분은 자동으로 다시 나와서, 맞힐 때까지 반복',
      },
    ],
  },

  features: {
    title: '문법과 단어,\n이것만 있으면 충분해요',
    items: [
      { tag: '문법', title: '레벨별 문법 문제', desc: '내 수준에 맞는 문제로 개념부터 실전까지' },
      { tag: '단어', title: '단어 플래시카드', desc: '보고, 듣고, 맞히면서 오래 남는 단어 암기' },
      { tag: '복습', title: '오답 자동 반복', desc: '틀린 유형만 골라서 다시 풀어요' },
      { tag: '동기부여', title: 'XP · 연속 학습 · 배지', desc: '매일 들어오고 싶어지는 게임처럼' },
    ],
  },

  free: {
    title: '학생이라면 이만큼 무료예요',
    freeTitle: '무료',
    freeItems: ['레벨 테스트', '문법 문제', '단어 학습', '오답 복습', 'XP · 배지', '학습 기록'],
    aiTitle: 'AI 기능 (학원 플랜)',
    aiItems: ['AI 플래시카드 자동 생성', 'AI 맞춤 문제 생성', 'AI 쓰기 피드백'],
    note: 'AI 기능은 다니는 학원이 위고업잉글리시를 쓰면 함께 쓸 수 있어요.',
  },

  stats: [
    { value: '10단계', label: '레벨 체계' },
    { value: '16,000+', label: '문법·단어 문제' },
    { value: '0원', label: '학생 가입비' },
  ],

  teacher: {
    title: '선생님이신가요?',
    desc: '학생 레벨 테스트, 숙제, 성적 관리까지.\n우리 반을 한 화면에서 관리하세요.',
    cta: '학원·선생님용 보기 →',
  },

  final: {
    title: '오늘 시작하면,\n내일 단어가 하나 더 남아요',
    cta: '무료로 시작하기',
    note: '학생 가입 무료 · 카드 등록 없음',
  },
}

/* ── 학원·선생님용 ─────────────────────────────────────── */
export const ACADEMY = {
  metaTitle: '학원·선생님용',
  metaDescription: '학생은 무료로, 관리는 쉽게. 문법·단어 학습부터 성적 관리까지.',
  hero: {
    badge: '학원·선생님용',
    title: '학생은 무료로,\n관리는 쉽게',
    subtitle: '문법·단어 학습부터 성적 관리까지. 학원은 수업에만 집중하세요.',
    cta: '학원 무료로 시작하기',
    secondary: '도입 상담 받기',
  },
  benefits: {
    title: '이런 게 편해져요',
    items: [
      { tag: '레벨 테스트', title: '레벨 테스트 자동', desc: '입학 상담용 레벨 테스트를 학생이 혼자 보고, 결과는 바로 확인' },
      { tag: '출제', title: '문제 직접 출제', desc: '우리 학원 교재에 맞춘 문법·단어 문제를 만들고 배포' },
      { tag: '복습', title: '오답은 알아서 반복', desc: '학생별 약점을 찾아 다시 풀게 합니다' },
      { tag: '리포트', title: '성적 리포트 한 번에', desc: '반별·학생별 성장 그래프와 학부모 상담용 PDF' },
    ],
  },
  howTo: {
    title: '시작은 이렇게',
    items: ['학원 가입', '초대코드 발급', '학생은 코드로 무료 가입'],
  },
  final: {
    title: '우리 학원에 맞을지 궁금하다면',
    desc: '먼저 무료로 시작해 보고, 필요할 때 플랜을 고르세요.',
    cta: '학원 무료로 시작하기',
    secondary: '요금 보기',
  },
}

/* ── 요금 ─────────────────────────────────────────────── */
export const PRICING = {
  metaTitle: '요금',
  metaDescription: '학생은 무료, 학원은 필요한 만큼만. 학생 계정은 AI 기능을 제외하고 무료입니다.',
  title: '학생은 무료,\n학원은 필요한 만큼만',
  subtitle: '학생 계정은 AI 기능을 제외하고 무료입니다.',
  perMonth: '/ 월',
  plans: [
    {
      id: 'student',
      name: '학생',
      target: '학습자 개인',
      price: '무료',
      badge: null as string | null,
      highlight: false,
      features: ['레벨 테스트', '문법·단어 학습', '오답 복습', 'XP · 배지 · 학습 기록', 'AI 기능 제외'],
      cta: '무료로 시작하기',
      href: APP_URL,
    },
    {
      id: 'starter',
      name: '스타터',
      target: '소형 교습소 (~20명)',
      price: '19,900원',
      badge: null as string | null,
      highlight: false,
      features: ['교사 2명', '문제 무제한', 'AI 플래시카드 월 300단어', 'AI 문제 생성 월 30회'],
      cta: '시작하기',
      href: APP_URL,
    },
    {
      id: 'standard',
      name: '스탠다드',
      target: '중형 학원 (~50명)',
      price: '49,900원',
      badge: '가장 인기' as string | null,
      highlight: true,
      features: ['교사 5명', '고급 분석', 'AI 플래시카드 월 1,000단어', 'AI 문제 생성 월 100회'],
      cta: '시작하기',
      href: APP_URL,
    },
    {
      id: 'premium',
      name: '프리미엄',
      target: '대형·다지점 (50명+)',
      price: '129,000원',
      badge: null as string | null,
      highlight: false,
      features: ['학생·교사 무제한', '다지점 관리', 'AI 플래시카드 월 5,000단어', 'AI 문제 생성 월 500회'],
      cta: '상담 받기',
      href: '/contact',
    },
  ],
  compareTitle: '한눈에 비교',
  compareHeader: ['', '학생', '스타터', '스탠다드', '프리미엄'],
  compareRows: [
    ['학생 수', '본인', '최대 20명', '최대 50명', '무제한'],
    ['교사 계정', '-', '2개', '5개', '무제한'],
    ['문법·단어 학습', '✓', '✓', '✓', '✓'],
    ['레벨 테스트 · 오답 복습', '✓', '✓', '✓', '✓'],
    ['AI 플래시카드', '-', '월 300단어', '월 1,000단어', '월 5,000단어'],
    ['AI 문제 생성', '-', '월 30회', '월 100회', '월 500회'],
  ],
  footnote: '학원 플랜 가격은 학원당 월 요금입니다.',
  contactPrompt: '더 많은 학생이나 맞춤 계약이 필요하신가요?',
  contactLink: '상담 받기 →',
}

/* ── FAQ ─────────────────────────────────────────────── */
export const FAQ = {
  metaTitle: 'FAQ',
  metaDescription: '위고업잉글리시 자주 묻는 질문',
  title: '자주 묻는 질문',
  subtitle: '더 궁금한 점은 문의하기로 남겨주세요.',
  items: [
    { q: '학생은 정말 무료인가요?', a: '네. 학생 계정은 AI 기능을 제외한 모든 학습 기능을 무료로 쓸 수 있어요.' },
    { q: '무료로 못 쓰는 기능은 뭔가요?', a: 'AI 플래시카드 생성, AI 문제 생성 같은 AI 기능입니다. 학원 플랜에 포함돼요.' },
    { q: '어떻게 가입하나요?', a: "'무료로 시작하기'를 누르고 1분이면 끝납니다. 학원 초대코드가 있으면 입력해 주세요." },
    { q: '어떤 걸 공부하나요?', a: '문법과 단어 중심입니다. 레벨 테스트로 내 수준을 찾고, 그 수준에 맞춰 학습해요.' },
    { q: '휴대폰으로도 되나요?', a: '네. 설치 없이 PC·태블릿·스마트폰 브라우저에서 바로 됩니다.' },
    { q: '학원은 어떻게 쓰나요?', a: '학원 가입 후 초대코드를 학생에게 주면, 학생은 무료로 가입해 바로 연결됩니다.' },
    { q: '결제는 어떻게 하나요?', a: '현재 계좌 이체 후 확인 방식입니다. 언제든 해지할 수 있어요.' },
    { q: '개인정보는 안전한가요?', a: '국내 리전 서버에 암호화해 저장하고, 권한 없는 접근을 차단합니다.' },
  ],
  cta: '무료로 시작하기',
  contact: '문의하기',
}

/* ── 문의 ─────────────────────────────────────────────── */
export const CONTACT = {
  metaTitle: '문의하기',
  metaDescription: '위고업잉글리시 도입 상담 및 문의를 남겨주세요. 1영업일 내에 답변드립니다.',
  title: '무엇이든 물어보세요',
  subtitle: '1영업일 내에 담당자가 연락드립니다.',
  formTitle: '문의 남기기',
  infoTitle: '연락처',
  methods: [
    { title: '이메일', desc: '평일 기준 1영업일 내 답변', value: 'hello@wegoupenglish.com', link: 'mailto:hello@wegoupenglish.com' },
    { title: '카카오톡', desc: '실시간 채팅 상담 가능', value: '@위고업잉글리시', link: 'https://open.kakao.com/' },
    { title: '운영시간', desc: '전화 상담 예약 가능', value: '평일 09:00 – 18:00', link: null as string | null },
  ],
  quick: {
    title: '학생이라면 바로 시작하세요',
    desc: '학생 가입은 무료예요. 1분이면 끝납니다.',
    cta: '무료로 시작하기',
  },
}
