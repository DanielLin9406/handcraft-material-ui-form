# Jobs

## License

此專案僅供提供宇 X 科技股份有限公司面試專用，禁止未經 Daniel Lin 本人同意之前使用於商業專案與任何形式之營利目的

### Basic

- [x]Built basic infrastructure
- [x]Added Route
- [x]Product Page
- [x]Login Page
- [X]Redirect home to login
- [x]Add login flow
- [x]Remove uncessary code
- [x]Input form focus effect

## Idea

- MVP pattern
  - ![MVP](https://drive.google.com/uc?export=view&id=1Jexsxyet-Sr8iRHcqt58ViTUPC7wfyNa)
  - [Client-Side Architecture Basics [Guide]](https://khalilstemmler.com/articles/client-side-architecture/introduction/)
- Redux for global state while Hooks for local state
  - Ref. [React's useReducer Hook vs Redux](https://www.robinwieruch.de/redux-vs-usereducer)
    > Use useState for basic and simple/small size applications.
    > Use useState + useReducer + useContext for advanced/medium size applications.
    > Use useState/useReducer + Redux for complex/large size applications.
- Debounce
  - In order to increase the efficiency of processing, I set a delay of 250 micro-second validating the input value after the value was changed.
- Page-Level Lazy Load
- Product List is RWD

## Project Structure

- Models (data-fetching + state management can be replaced by Apollo if needed.)
  - catalog (product list)
    - data-fetching
      - CatalogService
    - state-management
      - CatalogReducer
    - use-case
      - readCatalogByName
  - customer
    - data-fetching
      - CustomerService (leveraging mock.js here)
    - state-management
      - CustomReducer
    - use-case
      - Signin
      - ReadMe
- Pages → Assembling static components together and decorate with VM model
  - Components
    - Page → any page level component as an actual web page.
    - Tabs → subcomponent that constructing a page.
    - Sections → breaking down as smaller compoent
  - Layouts → define larger scale page layout and SEO setting
  - routes → define overall router paths also including authorized route.
- Presenters → Define View Models at global or local state management
  - View Model defines various kind of HOC related to API fetching or local hooks dispatching.
  - Redux using API facade pattern
  - Local state reducer
  - Local state DTO
- Views
  - Dump → Put all UI components in here.
  - Logic → Directly connect UI component to global state and use hooks pattern. These components eventually become a standalone component with their inside state.

## Guide

Since there is no cookie/session nor server provided, the page is going to redirect to login page.
If you directly go to /catalog or productlist page, you will be redirect to login page as well.

## Start

Web is on 8080 port

```
npm start
```
