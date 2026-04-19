# GET 醫學教育與研究團隊 - 網站開發與維護指南 (AI Assistant Handoff Guide)

這是一份專門為了「未來更新維護」而準備的備忘錄。
未來的 AI 助手只要閱讀這份說明，就能瞬間了解整個網站的架構、設計理念以及發布流程，並無縫接手您的更新任務！

## 1. 專案基本資訊
*   **專案名稱**：GET (Growing and Empowering Together) 醫學教育與研究團隊
*   **網站網址**：https://lendiswu.github.io
*   **技術框架**：Vite + React (使用 `react-router-dom` 的 `HashRouter` 以確保 GitHub Pages 路由正常運作)
*   **原始碼位置**：`/Users/lendis/Desktop/GET網頁製作`

## 2. 核心設計與排版原則 (Design System)
請未來的 AI 助理在開發時務必遵守以下設計原則，以保持網站高度的一致與專業性：
*   **色彩計畫 (Color Palette)**：明亮的「醫學白（潔淨感）」與「湖水綠（Teal，專業且具生命力）」。完全避免使用呆板的預設原色。
*   **視覺風格 (Aesthetics)**：
    *   **毛玻璃特效 (Glassmorphism)**：大量運用在卡片（`.glass-card`, `.glass-panel`）上，增添現代感與輕盈感。
    *   **懸浮互動 (Hover-lift)**：重要的按鈕或卡片都帶有陰影微動畫。
*   **時序排列原則 (Timeline Logic)**：
    *   **研究脈絡與藍圖**：採用 **由舊至新**（較舊的年份在最上方）來說明歷史演進。
    *   **重點文獻解析**：採用 **由新至舊**（最新的發表優先在最上方展示）。

## 3. 檔案架構與修改位置說明
如果您需要更新特定資料，請直接到以下檔案修改：
*   **首頁 (團隊願景、團隊成員、核心入口)**：`src/pages/Home.jsx`
    *   *註：新增團隊人員時，請將照片存入 `public/` 目錄，然後在 Home.jsx 的 `.team-grid` 中複製現有的 `<div className="team-card">` 來修改。*
*   **Speak Up 發聲行為研究專頁**：`src/pages/SpeakUpResearch.jsx`
*   **臨床模擬與團隊研究專頁**：`src/pages/SimulationResearch.jsx`
*   **全站樣式與顏色**：`src/index.css`
    *   包含了 `.badge`, `.timeline`, `.glass-card` 及所有客製化的 CSS。

## 4. 如何部署與更新網站？(自動化部署流程)
本網站已經完美串接了 GitHub Actions 自動化部署流程，未來任何資料更新，**完全不需要手動上傳檔案**，請依循以下步驟：

1. **本機預覽**：
   在終端機執行 `npm run dev`，即可於 `http://localhost:5174` 確認修改是否正確。
2. **自動上架 (Git Push to GitHub)**：
   本機確認無誤後，請在終端機依序執行：
   ```bash
   git add .
   git commit -m "更新您的描述，例如：新增一篇 2026 年的文獻"
   git push
   ```
3. **驗證上線**：
   送出 (push) 之後，GitHub 伺服器會自動花費大約 1~2 分鐘重新編譯並覆蓋上線。您只需稍後重新整理網頁即可。


---
**給未來 AI 助理的提示 (Prompt for Future AI)**：
「你好，我是 Lendis。請幫我閱讀這個資料夾底下的 `GET_PROJECT_GUIDE.md`，了解目前 GET 網站的狀態後，幫我執行接下來的更新任務...」
