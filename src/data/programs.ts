import type { Program } from "../types/program";

export const programs: Program[] = [
  {
    id: "news-collector",
    displayName: "NewsCollector",
    repositoryName: "NewsCollectorV2",
    category: "Intelligence Pipeline",
    status: "v2.0",
    tagline: "뉴스 수집, AI 2단계 분석, 웹/이메일 배포를 묶은 Python 시스템.",
    summary:
      "6개 카테고리 기사·게시글을 자동 수집하고 AI 2단계 분석 후 웹 리포트와 이메일로 배포하는 시스템입니다. 최신 README 기준으로 0404.go.kr 당일 통신 이슈 공지 수집, Global Roaming Trend 한글 전용 표시, 수신자 그룹 분리 관리까지 포함합니다.",
    usage: [
      "Python 3.9+에서 `pip install -r requirements.txt` 후 필요 시 `pip install python-dotenv`를 추가합니다.",
      "`.env.example`을 복사한 뒤 Naver, Google CSE, OpenAI, Gmail SMTP와 리포트 옵션 값을 설정합니다.",
      "`python run.py` 또는 `python main.py`로 전체 파이프라인을 실행하고, `python start_web.py`로 관리용 웹 대시보드를 실행합니다.",
    ],
    highlights: [
      "Naver/Google + 0404 해외안전여행 공지 수집",
      "AI 요약과 전략 인사이트 2단계 분석",
      "웹 리포트 이력 저장과 수신자 그룹별 이메일 발송",
    ],
    tags: ["Python", "OpenAI", "News", "Analytics", "Email"],
    links: {
      accessNote:
        "웹 대시보드 실행 방법이 README에 포함되어 있으므로 문서를 먼저 읽는 흐름이 적절합니다.",
      readmeLabel: "Open README",
      readmeUrl: "https://github.com/tyler-bit-ai/NewsCollectorV2/blob/master/README.md",
      primaryLabel: "Open Repository",
      primaryUrl: "https://github.com/tyler-bit-ai/NewsCollectorV2",
      secondaryLabel: "Open Repository Home",
      secondaryUrl: "https://github.com/tyler-bit-ai/NewsCollectorV2",
      accessMode: "readme",
    },
  },
  {
    id: "esim-price-japan",
    displayName: "Japan Marketplace eSIM Insight",
    repositoryName: "eSIMPriceJapan",
    category: "Published Dashboard",
    status: "Live",
    tagline: "Amazon JP·Qoo10 JP eSIM 상품을 국가별로 비교하는 공개 대시보드.",
    summary:
      "일본 마켓플레이스 eSIM 상품을 `site + country + dataset` 단위로 비교하는 공개 대시보드입니다. 최신 README 기준으로 `amazon_jp`, `qoo10_jp`를 지원하고, CSV/JSONL 산출물과 함께 KPI, 정렬, 다운로드, KRW 환산 가격까지 제공합니다.",
    usage: [
      "대시보드에서 사이트, 국가, 데이터셋을 고른 뒤 검색어·네트워크·데이터·사용기간·통신사 조건을 조정합니다.",
      "가격, 판매량, 리뷰, 검색 위치, 사용기간 기준으로 정렬하며 KPI와 분포를 확인합니다.",
      "필터 결과를 다운로드하고 필요하면 `npm run dashboard`로 로컬 대시보드를 확인합니다.",
    ],
    highlights: [
      "Amazon JP / Qoo10 JP 국가별 비교",
      "KRW 환산 가격과 dataset selector 지원",
      "상세 항목 다운로드와 publish workflow 제공",
    ],
    tags: ["eSIM", "Japan", "Marketplace", "Dashboard"],
    links: {
      accessNote:
        "공개된 GitHub Pages 대시보드에서 사이트·국가·데이터셋별 결과를 바로 확인할 수 있습니다.",
      readmeLabel: "Open README",
      readmeUrl: "https://github.com/tyler-bit-ai/eSIMPriceJapan/blob/main/README.md",
      primaryLabel: "Open App",
      primaryUrl: "https://tyler-bit-ai.github.io/eSIMPriceJapan/dashboard/",
      secondaryLabel: "Open Repository",
      secondaryUrl: "https://github.com/tyler-bit-ai/eSIMPriceJapan",
      accessMode: "app",
    },
  },
  {
    id: "esim-price-domestic",
    displayName: "국내 판매 해외 eSIM 가격 비교",
    repositoryName: "eSIMPriceCollectorDomestic",
    category: "Published Dashboard",
    status: "Live",
    tagline: "국내 eSIM 판매 사이트의 해외 사용 상품 가격을 비교하는 정적 대시보드.",
    summary:
      "국내 eSIM 판매 사이트의 해외 사용 상품을 수집·정규화해 GitHub Pages 대시보드로 비교하는 프로젝트입니다. 최신 README 기준으로 `usimsa`, `pindirect`, `rokebi`, `maaltalk`와 JP/VN/US/PH 대상 국가를 지원하며, 최신 publish 스냅샷과 이력 비교를 함께 제공합니다.",
    usage: [
      "상단에서 사이트, 국가, 사용일수, 데이터, 망 유형, 정렬 기준과 비교 시점을 선택합니다.",
      "국가별 가격 분포 밴드와 `local / roaming` 가격 차이, 시점별 변경 상품을 확인합니다.",
      "필요하면 `python -m app crawl --registry config/source_registry.yml --out data --publish-dashboard`로 대시보드용 데이터를 갱신합니다.",
    ],
    highlights: [
      "4개 국내 판매 사이트 통합 수집",
      "최신 스냅샷과 일자별 이력 비교",
      "상세 비교표와 GitHub Actions 배포",
    ],
    tags: ["eSIM", "Pricing", "Domestic", "Dashboard"],
    links: {
      accessNote:
        "공개된 GitHub Pages 대시보드에서 최신 스냅샷과 과거 시점을 함께 비교할 수 있습니다.",
      readmeLabel: "Open README",
      readmeUrl:
        "https://github.com/tyler-bit-ai/eSIMPriceCollectorDomestic/blob/main/README.md",
      primaryLabel: "Open App",
      primaryUrl: "https://tyler-bit-ai.github.io/eSIMPriceCollectorDomestic/",
      secondaryLabel: "Open Repository",
      secondaryUrl: "https://github.com/tyler-bit-ai/eSIMPriceCollectorDomestic",
      accessMode: "app",
    },
  },
  {
    id: "esim-keyword-analysis",
    displayName: "Korea Inbound eSIM Market Signals",
    repositoryName: "eSIMKeywordAnalysis",
    category: "Published Dashboard",
    status: "Live",
    tagline:
      "미국 사용자의 Korea eSIM 검색 수요를 공개 Google 신호로 읽는 분석 대시보드.",
    summary:
      "공개 Google 신호만 사용해 미국 영어 검색 환경(`hl=en`, `gl=us`)에서 Korea eSIM 키워드를 비교·우선순위화하는 분석 프로젝트입니다. 최신 README 기준으로 Streamlit 운영 대시보드와 `site/` 정적 Public Dashboard를 함께 제공하며, modifier·signal·seed lineage·snapshot delta를 읽을 수 있습니다.",
    usage: [
      "기본 운영 화면은 `streamlit run src/keyword_analysis/dashboard.py`로 실행합니다.",
      "대시보드에서 한국 eSIM 키워드 우선순위, modifier, signal, seed lineage, snapshot 변화를 확인합니다.",
      "공개용 정적 데이터는 `export_korea_public_dashboard`로 `site/data`에 생성해 배포합니다.",
    ],
    highlights: [
      "공개 Google 신호 기반 Korea keyword prioritization",
      "Streamlit 운영 대시보드 + 정적 Public Dashboard",
      "Autocomplete, related searches, Trends 기반 변화 추적",
    ],
    tags: ["eSIM", "Korea", "Search Signals", "Market Intelligence"],
    links: {
      accessNote:
        "공개된 GitHub Pages 대시보드에서 게시용 스냅샷을 읽을 수 있고, 운영 분석은 별도 Streamlit 대시보드에서 수행합니다.",
      readmeLabel: "Open README",
      readmeUrl: "https://github.com/tyler-bit-ai/eSIMKeywordAnalysis/blob/master/README.md",
      primaryLabel: "Open App",
      primaryUrl: "https://tyler-bit-ai.github.io/eSIMKeywordAnalysis/",
      secondaryLabel: "Open Repository",
      secondaryUrl: "https://github.com/tyler-bit-ai/eSIMKeywordAnalysis",
      accessMode: "app",
    },
  },
  {
    id: "kresident",
    displayName: "Kresident",
    repositoryName: "kresident",
    category: "Data Pipeline + Static Dashboard",
    status: "Live",
    tagline: "국내 체류 외국인 통계 원본 수집과 정적 대시보드 생성 프로젝트.",
    summary:
      "법무부 통계월보 게시판에서 `체류외국인` 원본 엑셀을 자동 다운로드하고, 누적 raw 데이터를 바탕으로 GitHub Pages용 정적 대시보드를 생성하는 Node.js + TypeScript 프로젝트입니다.",
    usage: [
      "README를 먼저 확인해 `.env.example` 기반 환경 설정과 저장 경로 구성을 맞춥니다.",
      "`npm run dev`로 신규 월보 원본 다운로드를 실행하고 registry/log 결과를 확인합니다.",
      "`npm run generate:dashboard`로 `site/` 정적 산출물을 생성해 대시보드 데이터를 갱신합니다.",
    ],
    highlights: [
      "체류외국인 월보 원본 자동 다운로드",
      "registry 기반 중복 방지와 실행 로그 누적",
      "GitHub Pages용 정적 dashboard 산출",
    ],
    tags: ["Node.js", "TypeScript", "Immigration", "Statistics", "Dashboard"],
    links: {
      accessNote: "공개된 GitHub Pages 대시보드로 바로 진입할 수 있습니다.",
      readmeLabel: "Open README",
      readmeUrl: "https://github.com/tyler-bit-ai/kresident/blob/main/README.md",
      primaryLabel: "Open App",
      primaryUrl: "https://tyler-bit-ai.github.io/kresident/",
      secondaryLabel: "Open Repository",
      secondaryUrl: "https://github.com/tyler-bit-ai/kresident",
      accessMode: "app",
    },
  },
];
