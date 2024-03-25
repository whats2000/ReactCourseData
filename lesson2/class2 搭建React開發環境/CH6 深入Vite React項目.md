# 第六章：深入Vite React項目

在第五章中，我們學習了如何使用Yarn和Vite快速搭建一個React開發環境。本章將深入探索Vite
React項目的結構，解析關鍵文件的功能，並介紹一些常用的開發命令和配置選項。

一個典型的Vite React項目包含多個文件和目錄。了解這些文件和目錄的用途對於管理和維護你的應用至關重要。

## 6.1 重要文件和目錄
- `index.html`：項目的入口文件。在Vite項目中，`index.html`位於根目錄，直接引用了入口JS文件，通常是`main.jsx`或`main.tsx`。
- `src`目錄：包含React組件的源程式碼，包括應用的主組件`App.jsx`或`App.tsx`。
    - 以下是一個可能的`src`目錄結構：
  ```
   src
    │  App.css       這是App的樣式表
    │  App.tsx       這是App的主要程式碼，也是React組件的根組件
    │  index.css     放全局樣式，如重置樣式
    │  main.tsx      這是頁面的入口文件，一般用於渲染App組件 `createRoot()` 會出現在此，一般我們會在這裡引入全局樣式，但是不定義組件。
    │  vite-env.d.ts 這是Vite的環境變數定義文件
    │
    └─assets         一般放置靜態資源，如圖片、字體等
          react.svg  一個React圖示(向量圖)
  ```
- `public`目錄：用於存放靜態資源，如圖標、爬蟲資訊等，這些資源在構建過程中會被複製到輸出目錄。
    - 只有需要直接引用的靜態資源才放在`public`目錄中，其他資源應該放在`src/assets`目錄中。
    - 如: `favicon.ico`、`logo192.png`、`logo512.png`、`manifest.json`、`robots.txt`等。
- `components`目錄：用於存放React組件，這些組件可以在應用中重複使用。
    - 之後我們會講更多關於組件的知識，這裡只是先提一下。
- `vite.config.js`：Vite的配置文件，允許你自定義構建、伺服器和插件選項。
    - 以下是我很常用的用來設定檔案路徑的設定
    - 其中`@`代表`src`目錄，`#`代表`src/components`目錄，可以直接在程式碼中使用這些別名。
    ```ts
    import { resolve } from 'path';
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react-swc';
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      resolve: {
        alias: [
          { find: '@', replacement: resolve(__dirname, 'src') },
          { find: '#', replacement: resolve(__dirname, 'src/components') },
        ],
      },
    });
    ```
- `package.json`：項目的配置文件，包含了項目的元數據、依賴包列表、腳本命令等。
- `tsconfig.json`：TypeScript的配置文件，用於定義TypeScript的編譯選項和類型檢查規則。
- `.prettierrc.yaml`：Prettier的配置文件，用於定義程式碼格式化規則。
  - 如果沒有這個檔案，可以新增
  - 搭配 VSCode 的 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter 套件，可以自動格式化程式碼
  - 以下是一個常用的設定
  ```yaml
  tabWidth: 2
  semi: true
  singleQuote: true
  ```

## 6.2 功能性文件和目錄
- `node_modules`目錄：包含項目的依賴包，這些依賴包在安裝時會被放置在這個目錄下。
- `.eslintrc.cjs`：ESLint的配置文件，用於定義程式碼檢查規則。
- `.gitignore`：Git的忽略文件，用於定義哪些文件和目錄不應該被Git版本控制。
- `README.md`：項目的說明文件，通常包含項目的描述、安裝步驟、使用說明等。
- `tsconfig.node.json`：Node.js環境的TypeScript配置文件，用於定義Node.js專用的編譯選項。
- `yarn.lock`：Yarn的依賴版本鎖定文件，確保每次安裝依賴時都使用相同的版本。

## 6.3 實用目錄名稱

在項目中，我們可以使用一些常見的目錄名稱來幫助我們更好地組織和管理項目文件。
大家可以根據自己的習慣和項目需求來選擇適合的目錄名稱。
以下是一些常見的目錄名稱，讓你參考：

- `src`：源程式碼目錄，包含所有React組件和應用邏輯。
- `public`：靜態資源目錄，包含所有不需要經過構建處理的靜態資源。
- `components`：組件目錄，包含所有可重複使用的React組件。
- `assets`：資源目錄，包含所有應用中使用的靜態資源，如圖片、字體等。
- `styles`：樣式目錄，包含所有應用的樣式表文件。
- `utils`：工具目錄，包含所有應用中使用的工具函數。
- `hooks`：鉤子目錄，包含所有自定義React鉤子。
- `locales`/`i18n`：國際化目錄，包含所有應用的國際化語言文件。
- `types`：類型目錄，包含所有應用的類型定義文件。
- `constants`：常數目錄，包含所有應用中使用的常數。
- `config`：配置目錄，包含所有應用的配置文件。
- `pages`：頁面目錄，包含所有應用的頁面組件。
- `tests`：測試目錄，包含所有應用的測試文件。
- `services`：服務目錄，包含所有應用的API服務。
- `layouts`：佈局目錄，包含所有應用的佈局組件。
- `store`：狀態管理目錄，包含所有應用的狀態管理邏輯。
- `router`：路由目錄，包含所有應用的路由配置。
  

## 6.4 常用Yarn命令

在開發過程中，以下幾個Yarn命令將非常有用：

**永遠記住**：在執行Yarn命令之前，請確保你已經移動到項目目錄下。

- **`yarn dev`**：啟動一個熱重載的開發伺服器，允許你在開發過程中實時預覽更改。
  - 像是`live-server`，但是更快速，且有更多功能。
- **`yarn build`**：構建生產準備就緒的應用。此命令將應用打包，優化性能。
  - 這會產生一個`dist`目錄，裡面包含了所有應用的部屬檔案。
  - 這將會是實際部屬到伺服器上的檔案。
  - 特點是檔案會被壓縮，像是CSS、JS會被壓縮成一行。
- **`yarn preview`**：本地預覽生產構建的項目。這在部署前測試應用的行為非常有用。
  - 請記得先執行`yarn build`，再執行`yarn preview`。
  - 這個與`yarn dev`不同，`yarn dev`是開發模式，`yarn preview`是生產模式。
  - 代表會壓縮檔案，並且不會有熱重載功能。可以測試網路環境下的表現。
- **`yarn eslint`**：運行ESLint進行程式碼檢查。這需要你已經在項目中配置了ESLint。

## 6.5 調整Vite配置

Vite提供了強大且靈活的配置選項，允許你根據項目需求調整許多設定。

- 打開`vite.config.ts`或`vite.config.js`文件，這是Vite的配置文件。
- 配置文件導出一個配置對象，你可以在這裡添加或修改設定。例如，你可以更改構建路徑、配置代理、添加插件等。
- [Vite官方文檔](https://vitejs.dev/guide/using-plugins.html)提供了完整的配置選項參考，幫助你根據需要進行調整。

## 練習

- 熟悉項目結構：在你的Vite React項目中探索不同的文件和目錄，嘗試理解它們的用途。
- 使用Yarn命令：在項目中執行`yarn dev`、`yarn build`和`yarn preview`命令，觀察它們的行為。