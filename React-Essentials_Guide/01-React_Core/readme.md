# jsx

: JSX는 자바스크립트를 확장한 문법이다. 주로 React라이브러리에서 사용되며, UI컴포넌트를 생성할 때 HTML과 유사한 문법을 사용하여 자바스크립트 코드 내에 서 UI 구조를 쉽게 표현할 수 있게 해준다.

## 특징

- 태그 기반 구조
- 자바스크립트 표현식 통합
  > 중괄호 '{}'를 사용하여 자바스크립트 표현식을 JSX 내부에 삽입할 수 있다.
- 컴포넌트 기반
  > React의 컴포넌트를 JSX태그 처럼 사용할 수 있다. 이를 통해 재사용 가능한 UI조각을 생성하고 관리할 수 있다.

# component

: 컴포넌트는 UI의 독립적이고 재사용 가능한 부분을 말한다. 각 컴포넌트는 독립적으로 동작하며, 다양한 컴포넌트를 조합하여 복잡한 UI를 구성할 수 있다.

## 특징

- 독립성과 재사용성
- Props를 통한 데이터 전달
- State를 통한 데이터 관리
- 생명주기 메서드
- 함수 컴포넌트와 훅
- 단방향 데이터 흐름

  > React의 데이터 흐름은 위에서 아래로(부모에서 자식으로) 단방향입니다. 컴포넌트는 자신의 Props나 State에만 의존해야 하며, 상위 컴포넌트를 직접 수정하거나 영향을 주어서는 안됩니다.

- 컴포지션을 통한 구성
  > 컴포넌트는 다른 컴포넌트를 포함할 수 있으며, 이를 통해 복잡한 UI를 구성할 수 있습니다. 컴포지션을 사용하면 기능별로 컴포넌트를 분리하고, 이를 조합하여 사용할 수 있습니다.

## 규칙

- 함수제목이 대문자 영어로 시작해야 된다.
- 함수에서 렌더링 가능한 값이 반환 되어야 한다.

## Fragments(프래그먼트)

```javascript
function App() {
  return (
    <div>
      {' '}
      // - 해당 감싸주는 div 제거시
      <Header />
      <main></main>
    </div>
  );
}
```

- 해당 감싸주는 div 제거시
  `JSX expressions must have one parent element`
  JSX는 하나의 상위 혹은 부모 요소를 가지고 있어야한다.

### 프래그먼트 사용하기

```javascript
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <main></main>
    </Fragment>
  );
}
```

```javascript
function App() {
  return (
    <>
      <Header />
      <main></main>
    </>
  );
}
```

: 빈 태그로 Fragment 대신 사용할 수 있다.
이와 같은 방법으로 불피요한 div의 사용을 안할 수 있다.

## 컴포넌트 분리

- Feature 및 State로 컴포넌트 분리하기
  `useState` 의 상태가 변경되면 리렌더링 되며 다른 불필요한 리렌더링이 발생할 수 있음.

## < forwarded props > or < proxy props >

```javascript
// Section.jsx
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}> // ...props를 사용해 id를 효율적으로 가져올 수 있다.
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Examples.jsx
export default function Examples() {
  ...

  return (
    <Section title='Example' id='examples'>
      ...
    </Section>
  );
}


```

## jSX 슬롯 활용
```javascript
// .Examples.jsx
export default function Examples() {
  ...

  return (
    <Section title='Example' id='examples'>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            ...
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu></menu>
    </Section>
  );
}

// .Tabs.jsx
export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}

```

슬롯으로 JSX를 넘겨 받을 수 있다.
