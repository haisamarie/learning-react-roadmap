learning-react-roadmap/ # repo ルート（モノレポ）
├─ package.json # workspaces 定義 / 共通 scripts / Volta pin
├─ package-lock.json # ルートで生成
├─ .gitignore
├─ eslint.config.js # ESLint v9 Flat Config（共通）
├─ .prettierrc
├─ tsconfig.base.json # TypeScript 共通
├─ notes/ … # 学習ノート（任意）
│
├─ apps/
│ ├─ vanilla-todo/ # Week1: DOM + localStorage（Vite vanilla）
│ │ ├─ index.html
│ │ ├─ vite.config.ts
│ │ └─ src/…
│ ├─ http-search/ # Week2: fetch/HTTP（Vite vanilla）
│ │ ├─ index.html
│ │ ├─ vite.config.ts
│ │ └─ src/…
│ ├─ react-ts-app/ # Week4–7: React + TS（Vite）
│ │ ├─ index.html
│ │ ├─ vite.config.ts
│ │ ├─ tsconfig.json
│ │ ├─ src/
│ │ │ └─ setupTests.ts # Vitest + RTL セットアップ
│ │ └─ tests/
│ └─ next-capstone/ # Week8: Next.js(App Router)
│ ├─ next.config.mjs
│ ├─ tsconfig.json
│ ├─ eslint.config.js
│ └─ app/
│ ├─ layout.tsx
│ ├─ page.tsx
│ ├─ (catalog)/
│ │ └─ products/[slug]/page.tsx
│ └─ api/contacts/route.ts # Route Handler の例
│
└─ packages/ # 共有（任意）
├─ eslint-config/ # 共有 ESLint 設定
└─ tsconfig/ # 共有 tsconfig
