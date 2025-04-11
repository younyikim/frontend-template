# frontend-template

## 🚀 Getting started

### Step 1: frontend-template 레포지토리 클론하기

```bash
$ git clone git@gitlab.com:Robin.Ky/frontend-template.git
```

### Step 2: 사용할 프로젝트 템플릿 선택하기

| 템플릿 이름                                                                                                               | 설명                    | 기본 구성                                                                                                         | 명령어                |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------- |
| [Basic Next.js Template](https://gitlab.com/Robin.Ky/frontend-template/-/blob/main/templates/basic-nextjs?ref_type=heads) | Next.js 프로젝트 템플릿 | Next.js v15, next-intl v4, Tailwind v4, TanStack Query v5, Storybook, Redux, Axios 관련 기본 설정이 포함된 템플릿 | `$ yarn basic-nextjs` |

### Step 3: 템플릿을 사용해 프로젝트 생성하기

- [Basic Next.js Template](https://gitlab.com/Robin.Ky/frontend-template/-/blob/main/templates/basic-nextjs?ref_type=heads)

  1. GitLab에서 새로운 레포지토리를 생성한다.

  - ⚠️ 주의 : `Initialize repository with a README` 옵션은 선택하지 않는다.

  2. frontend-template의 Root에서 프로젝트 복사 스크립트 실행한다.
     ```bash
       $ yarn basic-nextjs
     ```
  3. 프로젝트 생성 스크립트를 실행하면 다음과 같은 정보를 입력해야 한다.

  - **Enter the name of the new project :**
    - 새로 생성할 프로젝트의 이름을 입력한다.
  - **Enter the path where the project should be created:**
    - 프로젝트가 생성될 로컬 경로를 입력한다.
    - 아무것도 입력하지 않고 엔터를 누르면, 기본 경로 (`/Users/[your name]/Desktop`)에 생성된다.
  - **Enter the GitLab repository URL:**
    - 1번에서 생성한 Git Repository의 `SSH Url`을 입력한다.
    - 예시: `git@gitlab.com:your-username/awesome-frontend.git`

  4. 스크립트의 실행이 완료되면, 템플릿 복사부터 Git 초기화 및 원격 저장소 연결, 첫 커밋 및 푸시까지 자동으로 완료된다.

  ***

  #### ⚙️ 프로젝트 생성 스크립트 실행 시, 자동으로 처리되는 작업

  `yarn basic-nextjs` 명령어를 실행하면 다음 작업들이 자동으로 수행된다 :

  1. 프로젝트가 생성될 로컬 경로를 생성한다.
  2. 템플릿을 지정한 프로젝트 경로로 복사한다.
  3. 프로젝트 경로로 이동한다.
  4. Git 초기화
  5. 사용자가 입력한 GitLab 원격 저장소와 로컬 저장소를 연결한다.
  6. 초기 커밋을 생성하고, 원격 저장소에 템플릿을 푸시한다.
  7. 실행 종료
