# Dashboard

GitHub Pages로 배포하는 프로그램 허브 대시보드입니다.  
여러 프로젝트를 한 화면에서 훑어보고, 웹으로 바로 열 수 있는 앱은 즉시 진입하고 문서형 프로젝트는 README 중심으로 탐색하도록 구성했습니다.

## Stack

- Vite
- React
- TypeScript
- Static deployment via GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## GitHub Pages Deployment

이 저장소는 GitHub Pages용 Vite `base` 값을 `/dashboard/`로 고정합니다.

배포 절차:

1. GitHub 저장소 `Settings > Pages`에서 `Build and deployment` 소스를 `GitHub Actions`로 설정합니다.
2. 기본 브랜치에 푸시합니다.
3. `.github/workflows/deploy.yml`이 자동으로 실행되어 `dist/`를 Pages에 배포합니다.
4. 배포 주소는 `https://tyler-bit-ai.github.io/dashboard/`가 됩니다.

## Content Model

- 프로그램 메타데이터는 `src/data/programs.ts`에서 관리합니다.
- 타입 정의는 `src/types/program.ts`에 있습니다.
- UI 컴포넌트는 데이터를 읽어 렌더링하므로, 새 프로그램 추가 시 우선 메타데이터를 수정합니다.

프로그램 항목 필수 값:

- `displayName`
- `tagline`
- `summary`
- `usage`
- `highlights`
- `tags`
- `links.accessMode`
- `links.accessNote`
- `links.primaryLabel`
- `links.primaryUrl`

## Adding A New Program

1. `src/data/programs.ts`에 새 항목을 추가합니다.
2. 웹페이지가 있으면 `links.accessMode`를 `app`으로, 없으면 `readme`로 설정합니다.
3. `summary`에는 무엇을 하는 프로그램인지 짧게 적습니다.
4. `usage`에는 사용 순서를 2~4단계로 적습니다.
5. `accessNote`에는 사용자가 무엇을 눌러야 하는지 먼저 설명합니다.
6. `npm run build`로 타입과 정적 번들 결과를 확인합니다.

현재 등록된 프로그램 예시:

- `YoutubeCommentAnalysis`
- `NewsCollectorV2`
- `eSIMPriceJapan`
- `eSIMPriceCollectorDomestic`
- `eSIMKeywordAnalysis`
- `kresident`

## Verification Checklist

- 모든 카드가 상세 패널을 정상 갱신하는가
- 웹 프로젝트는 `Open App`으로 바로 진입하는가
- 비웹 프로젝트는 README 또는 저장소 중심으로 안내되는가
- 360px 모바일 폭에서도 카드와 상세 패널이 읽을 수 있는가
- 새 프로그램을 메타데이터만 추가해도 UI가 자동 확장되는가

## Structure

```text
src/
  components/
  data/
  styles/
  types/
```
