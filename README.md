- [📌 Convention](#📌-convention)
  - [커밋 컨벤션](#커밋-컨벤션)
  - [네이밍 컨벤션](#네이밍-컨벤션)

# 📌 Convention

## 커밋 컨벤션

1. 커밋 메세지 제목은 `PROJECT_NAME` / `gitmoji` - `기능설명` 템플릿으로 작성해주세요.
   ```
   ✨ `:sparkles:` - 새로운 기능 추가
   💄 `:lipstick:` - UI 스타일링 관련 작업
   👽 `:alien:` - 외부 API 변경
   💬 `:speech_balloon:` - 텍스트/문자열 추가/변경
   💫 `:dizzy:` - 애니메이션/전환 효과 추가/변경
   📖 `:book:` - storybook
   📦 `:package:` - 패키지 파일 추가/변경
   🚧 `:construction:` - 작업 진행 중
   🎨 `:art:` - 코드 구조/형식 개선
   ♻️  `:recycle:` - 코드 리팩토링
   🐛 `:bug:` - 버그 수정
   🗑️ `:wastebasket:` - 불필요한 코드/파일 삭제
   ✏️  `:pencil2:` - 오타 수정
   ⏪ `:rewind:` - 변경 사항 되돌리기
   🚚 `:truck:` - 리소스 이동/이름 변경
   🩹 `:adhesive_bandage:` - 코드 작성 시 실수, 자잘한 수정
   🎉 `:tada:` - 프로젝트 시작
   🔧 `:wrench:` - 설정 파일 변경
   🚀 `:rocket:` - 배포 관련 작업
   👷 `:construction_worker:` - CI 설정
   💡 `:bulb:` - 주석 추가/변경
   ✅ `:white_check_mark:` - 테스트 추가
   📝 `:memo:` - 문서 추가/업데이트
   ```
   (<a href="https://gitmoji.dev">gitmoji</a> 참고)

## 네이밍 컨벤션

- **SVG**

  ```
  Icon + { 이름 }

  ex) IconPlus
  ```

- **Image (png)**

  ```
  Img + { 이름 }

  ex) ImgLogo
  ```

- **Query Hook**

  ```
  조회: use + { Entity }s + Query
  삭제: use + Delete + { Entity }s
  수정: use + Edit + { Entity }
  등록: use + Create + { Entity }s
  *단수복수 구분

  ex) useCreateOrderStyles
  ```

- **Hook**

  ```
  use + { 기능 or UI Term }

  ex) useCheckbox, useSegment
  ```

- **Pages**

  ```
  파일/폴더명: { 페이지 이름 }
  Page 파일내의 컴포넌트 함수 이름: { 페이지 이름 } + Page

  ex)
  // OrderStyle.tsx
  const OrderStylePage = () => {...};
  ```

- **Components**

  ```
  컴포넌트 이름: 모양 + { Entity } + 기능
  ex) ModalOrderStyleCreate, BtnAdd

  컴포넌트 내의 함수:	기능 + 동작
  ex) handleChange, handlePlusClick...

  props로 받아오는 함수:	on + *
  ex) onChange={handleChange}, onPlusClick={handlePlusClick}...
  ```
