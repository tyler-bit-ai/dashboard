import type { Program } from "../types/program";

export const programs: Program[] = [
  {
    id: "iot-auto",
    displayName: "Roaming IOT Settlement Generator",
    repositoryName: "IotAuto",
    category: "Desktop Utility",
    status: "README fallback",
    tagline: "Excel settlement automation for roaming IOT workflows.",
    summary:
      "Tkinter 기반 Python 도구로 템플릿 Excel, raw 데이터, 환율 파일을 조합해 정산 결과물을 생성합니다. 저장소에서 확인된 GUI 타이틀은 'Roaming IOT Settlement Generator v3.3'입니다.",
    usage: [
      "Template Files, Raw Data File, Exchange Rate Check 파일을 순서대로 선택합니다.",
      "Start Processing을 실행한 뒤 출력 폴더를 지정합니다.",
      "템플릿별 처리 결과와 실패 항목을 요약 팝업으로 확인합니다.",
    ],
    highlights: [
      "Tkinter GUI 기반 실행 흐름",
      "Excel 템플릿 다중 선택 지원",
      "정산 결과 파일 일괄 생성",
    ],
    tags: ["Python", "Tkinter", "Excel", "Settlement"],
    links: {
      accessNote:
        "웹으로 바로 실행되는 페이지는 없으므로 저장소와 문서를 먼저 확인해야 합니다.",
      primaryLabel: "Open Repository",
      primaryUrl: "https://github.com/tyler-bit-ai/IotAuto",
      secondaryLabel: "Open README",
      secondaryUrl: "https://github.com/tyler-bit-ai/IotAuto",
      accessMode: "readme",
    },
  },
  {
    id: "news-collector",
    displayName: "NewsCollector",
    repositoryName: "NewsCollectorV2",
    category: "Intelligence Pipeline",
    status: "README fallback",
    tagline: "SKT 로밍팀용 뉴스 수집, AI 분석, 웹/이메일 배포 시스템.",
    summary:
      "6개 카테고리의 기사와 게시글을 자동 수집하고 AI 2단계 분석을 거쳐 웹 리포트와 이메일로 배포하는 Python 기반 시스템입니다. README에서 CLI 실행, 웹 대시보드, 0404 해외안전여행 공지 수집까지 확인됩니다.",
    usage: [
      "Python 3.9+ 환경에서 `pip install -r requirements.txt`로 의존성을 설치합니다.",
      "`.env.example`을 복사해 `.env`를 만들고 API 키와 SMTP 정보를 채웁니다.",
      "`python run.py` 또는 `python main.py`로 전체 파이프라인을 실행하거나 `python start_web.py`로 웹 대시보드를 시작합니다.",
    ],
    highlights: [
      "뉴스/블로그/카페/Google 검색 수집",
      "AI 요약 + 전략 인사이트 2단계 분석",
      "HTML 웹 리포트와 이메일 배포",
    ],
    tags: ["Python", "OpenAI", "News", "Analytics", "Email"],
    links: {
      accessNote:
        "웹 대시보드 실행 방법이 README에 포함되어 있으므로 문서를 먼저 읽는 흐름이 적절합니다.",
      primaryLabel: "Open README",
      primaryUrl: "https://github.com/tyler-bit-ai/NewsCollectorV2/blob/master/README.md",
      secondaryLabel: "Open Repository",
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
    tagline: "Amazon JP와 Qoo10 JP 기준 eSIM 상품 인사이트 대시보드.",
    summary:
      "일본 마켓플레이스에서 수집한 eSIM 상품 데이터를 필터링하고, 데이터 용량 분포와 네트워크 비중, 셀러 배지 분포, 상세 항목을 확인할 수 있는 공개 대시보드입니다.",
    usage: [
      "필터 영역에서 네트워크, 데이터, 사용기간, 통신사 조건을 조정합니다.",
      "상단 차트와 분포 섹션으로 전체 구성을 확인합니다.",
      "상세 항목 표나 Excel 다운로드로 원본 수준 데이터를 확인합니다.",
    ],
    highlights: [
      "Amazon JP / Qoo10 JP 데이터 비교",
      "필터 기반 탐색",
      "상세 항목과 Excel 다운로드 지원",
    ],
    tags: ["eSIM", "Japan", "Marketplace", "Dashboard"],
    links: {
      accessNote: "공개된 GitHub Pages 대시보드로 바로 진입할 수 있습니다.",
      primaryLabel: "Open App",
      primaryUrl: "https://tyler-bit-ai.github.io/eSIMPriceJapan/dashboard/",
      secondaryLabel: "Open Published Page",
      secondaryUrl: "https://tyler-bit-ai.github.io/eSIMPriceJapan/dashboard/",
      accessMode: "app",
    },
  },
  {
    id: "esim-price-domestic",
    displayName: "국내 판매 해외 eSIM 가격 비교",
    repositoryName: "eSIMPriceCollectorDomestic",
    category: "Published Dashboard",
    status: "Live",
    tagline: "국내 판매 해외 eSIM 가격 밴드와 망 유형 차이를 비교하는 대시보드.",
    summary:
      "국가별 가격 분포 밴드, local/roaming 가격 차이, 상세 비교표를 통해 국내 판매 해외 eSIM 상품을 비교하는 공개 대시보드입니다. 스냅샷 시점 선택과 도움말도 제공됩니다.",
    usage: [
      "상단에서 크롤링 시점과 필터 조건을 선택합니다.",
      "Price Distribution과 Local vs Roaming 섹션에서 가격 차이를 비교합니다.",
      "상세 비교표와 Excel 다운로드로 세부 옵션을 확인합니다.",
    ],
    highlights: [
      "국가별 가격 분포 밴드",
      "local / roaming 차이 분석",
      "스냅샷 선택과 상세 비교표",
    ],
    tags: ["eSIM", "Pricing", "Domestic", "Dashboard"],
    links: {
      accessNote: "공개된 GitHub Pages 대시보드로 바로 진입할 수 있습니다.",
      primaryLabel: "Open App",
      primaryUrl: "https://tyler-bit-ai.github.io/eSIMPriceCollectorDomestic/",
      secondaryLabel: "Open Published Page",
      secondaryUrl: "https://tyler-bit-ai.github.io/eSIMPriceCollectorDomestic/",
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
      "해외 사용자가 한국에서 사용할 eSIM을 검색할 때의 market signals를 읽는 대시보드.",
    summary:
      "local Google signal analysis를 기반으로 Korea 관련 eSIM 키워드 우선순위, modifier, seed lineage, signal summary, snapshot delta를 탐색할 수 있는 읽기 전용 공개 대시보드입니다.",
    usage: [
      "Filters에서 검색 우선순위와 signal 범위를 조정합니다.",
      "Published KPIs와 Korea Keyword Comparison에서 핵심 타깃 키워드를 확인합니다.",
      "Modifier, Seed, Signal, Snapshot Delta 섹션으로 변화 흐름을 읽습니다.",
    ],
    highlights: [
      "Published target explorer",
      "Keyword priority와 signal 요약",
      "변화 추적용 snapshot delta",
    ],
    tags: ["eSIM", "Korea", "Search Signals", "Market Intelligence"],
    links: {
      accessNote: "공개된 GitHub Pages 대시보드로 바로 진입할 수 있습니다.",
      primaryLabel: "Open App",
      primaryUrl: "https://tyler-bit-ai.github.io/eSIMKeywordAnalysis/",
      secondaryLabel: "Open Published Page",
      secondaryUrl: "https://tyler-bit-ai.github.io/eSIMKeywordAnalysis/",
      accessMode: "app",
    },
  },
];
