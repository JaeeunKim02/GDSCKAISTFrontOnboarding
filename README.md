# GDSC Front-end Onboarding Project

> GDSC 프론트엔드 팀에 오신 것을 환영합니다!

## Task 1. View 만들기

이번 Task에서는 React와 조금 익숙해지고 CSS Flex를 통한 스타일링을 해보려고 합니다.
디자인을 위한 Figma 파일을 확인해가면서 만들어봅시다!

> Figma에는 디자이너가 개발자를 위해서 남겨둔 아주 다양한 정보들이 있습니다!
> 각 요소를 클릭하면 폰트, 폰트 크기, 영역의 넓이나 높이, 색상 등 다양한 정보를 우측 패널에서 확인할 수 있습니다.
> 자세히 보면 영역의 귀퉁이가 둥글다거나, 그림자가 져있다거나 다양한 특징들이 있을 것입니다. 그런 디테일까지 확인해보면서 스타일링을 해봅시다.

### Task 1-1. 컴포넌트 만들기

React는 UI의 구성요소를 '컴포넌트'로 만들어 이용합니다.
여러 번 다시 사용해야 하는 UI 요소를 적절히 컴포넌트화하면 재사용성을 높임으로써 효율성, 유지보수성을 챙길 수 있습니다.

이번 Task에서는 두 종류의 컴포넌트를 만들어보려고 합니다.
`src` 폴더 안에 `components` 이름으로 컴포넌트 폴더를 만들고, 그 안에 각 컴포넌트를 위한 파일을 만들어서 작성하시면 됩니다.

첫 번째는 **Chip**입니다.
특정 조건이 선택되었는지 표시하는 역할을 하고 있습니다. 이는 MUI를 쓰지 않고 직접 CSS를 이용해서 만들어봅시다!

두 번째는 병원 정보가 들어있는 **List Item**입니다.
병원의 오픈 여부나 여러 정보들, 긜고 접수하기를 위한 버튼을 담고 있습니다. 여기서 접수하기 버튼은 MUI Button을 이용해서 만들어봐요.

이 요소들을 어떻게 만들어야 재사용성이 높게 만들 수 있을지, 조건에 따라 어떻게 다른 모양이 되도록 만들지 고민해서 만들어보아요.

### Task 1-2. Flex를 이용해 화면 레이아웃 만들기

Task 1-1에서 만들었던 컴포넌트를 이용해 완성된 화면을 하나 만들어봅시다. `template` 폴더에 있는 XXX 파일에서 한 번 만들어봅시다. 처음엔 거의 아무것도 없긴 할거에요.
하지만 px 값을 한정시키지 말고, 가급적이면 간격이나 width, height를 자동으로 계산되도록 만들어봅시다. 위에서 만들었던 컴포넌트의 CSS도 이 방식에 어울리게 바꾸는 작업이 들어갈 수도 있어요.
CSS Flex 요소들을 이용해 Figma 화면과 같은 화면을 한 번 만들어보아요.

`display: flex`, `flex-direction`, `justify-contents`, `align-items`, `flex-grow`, `flex-shrink` 등을 참고하면 도움이 될 것 같습니다.
