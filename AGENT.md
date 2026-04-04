# CLAUDE_CODE_GUIDE: ZENPPLE Website Architecture

## 1. 專案核心定位與禁令 (Critical Constraints)
*   **品牌定位**：森波 (ZENPPLE) 是「意識邊界校準場」(Consciousness Calibration Field)，強調「主體覺醒」。
*   **絕對禁語 (The "No Healing" Rule)**：**禁止出現「療癒 (Healing)」一詞**。
    *   *替代詞*：**定頻 (Anchoring)**、**校準 (Calibration)**、**對齊 (Alignment)**。
*   **視覺風格**：現代禪意極簡 (Zen-minimalism)、高留白感 (High Whitespace)。
*   **核心邏輯**：角色驅動導流（潮間帶的人、林間迷霧者、播種者）。

## 2. 技術棧 (Tech Stack)
*   **Framework**: Next.js 14+ (App Router)
*   **Deployment**: Vercel
*   **Styling**: Tailwind CSS
*   **Components**: Radix UI / Shadcn UI (用於實現 Click-to-expand 邏輯)
*   **Animations**: Framer Motion (用於呼吸感、墨跡揭露動畫)
*   **Language**: TypeScript

## 3. 視覺系統實作規範 (Visual System)
### 色彩系統 (Tailwind Config)
```javascript
colors: {
  background: "#F2EFEA", // 奶霧白：主底色
  foreground: "#2A2A2A", // 墨：主文字
  series: {
    qi: "#4A6B8A",       // 靛石藍：QI-SB 系列
    hl: "#C47B7B",       // 煙霞玫：HL 系列
    sc: "#7B6B9E",       // 暮紫：HL / SC 系列
    co: "#C4784A",       // 沉金橙：CO 系列
    as: "#5E8E8A",       // 苔石青：AS 認證
    ts: "#B09070",       // 暖沙石：TS / PE 系列
  }
}
```

### 字型層級
*   **Display (英)**: `Josefin Sans` (Weight 100, Letter-spacing 0.3em)
*   **Heading (中)**: `Noto Sans TC 900` / 王漢宗特黑
*   **Body**: `DM Sans` (Line-height 1.7)
*   **Mono**: `Space Mono` (用於編號/價格)

## 4. 核心頁面路由與功能架構
| 路徑 | 頁面名稱 | 核心組件需求 |
| :--- | :--- | :--- |
| `/` | 首頁 | 全螢幕 Hero + **互動角色卡牌 (Click-to-expand)** |
| `/qi-sb` | 靈性頌缽音流 | Feature Grid (服務項目), FAQ Accordion |
| `/hl` | 深層系統對齊 | **分支路徑選擇器** (HL-02 vs HL-03), Timeline |
| `/sc` | 薩滿靈魂覺醒 | 5 階段意識階梯 (Vertical Timeline), 三界圖插畫 |
| `/qi-cs` | 夏＋玄路徑諮詢 | **情境對照表** (Feature Comparison), 指導靈宣告 |
| `/as` | 品牌認證考核 | 認證 4 關卡 Step-by-step List, 效力對比表 |
| `/ts-pe` | 高階執業養成 | 雙軸修煉路徑圖, 課程 Feature List |
| `/as-c` | 品牌孵化實務 | 數位工作流介紹, 技術規格警告區塊 |
| `/co` | 聯名企業合作 | B2B 定價級距表 (Pricing Table), 合作流程圖 |
| `/about` | 關於森波 | Team Section (禿禿 & 夏子), Logo 意涵展示 |
| `/contact` | 聯繫森波 | LINE QR Code, 預約 4 步驟卡片, Google Map |
| `/ethics` | 執業規範 | 8 大紅線 Accordion, 非醫療聲明清單 |

## 5. 互動設計細節 (Claude Code Attention Needed)
*   **Click-to-expand 邏輯**：
    *   首頁卡牌預設僅顯示插圖與標題，點擊後寬度/高度展開顯示角色描述與服務 Pills。
    *   服務步驟圖點擊階段圓點後，下方滑出詳細課程內容。
*   **呼吸感動畫 (Breathe)**：Logo 與核心按鈕需有 3-4s 的緩慢脈動。
*   **墨跡揭露 (Ink Reveal)**：Hero 大標題進入畫面時，需實作由左至右的擴散遮罩效果。
*   **捲動觸發 (Fade-slide in)**：元素位移 0.6–1.0s，錯開 0.18s 節奏進場。

## 6. Agent 開發指令集 (Prompt Workflow)

### Step 1: 初始化環境
`run: npx create-next-app@latest zenpple-site --typescript --tailwind --eslint`
`run: shadcn-ui@latest init`

### Step 2: 建立全局樣式
「根據 `CLAUDE_CODE_GUIDE` 的色彩與字型規範，修改 `tailwind.config.ts` 與 `globals.css`。實作 `ink-reveal` 與 `breathe` 的 Keyframes。」

### Step 3: 建立服務數據對象
「建立 `constants/services.ts`，將總表中的所有課程（編號、名稱、時數、費用）轉化為結構化數據，並確保 Description 中完全沒有『療癒』二詞。」

### Step 4: 開發首頁互動組件
「開發 `components/home/PersonaCards.tsx`。使用 Framer Motion 實作三個角色的點擊展開效果。點擊卡牌後，頁面需平滑滾動至該角色推薦的服務區塊。」

### Step 5: 實作 HL 分支邏輯
「在 `/hl/page.tsx` 中，建立一個決策路徑組件。在完成 HL-01 掃描介紹後，讓用戶選擇『A路徑：系統重整』或『B路徑：主題對齊』，並動態顯示對應的內容區塊。」

## 7. 部署檢查清單 (Vercel Deployment)
*   **SEO 校準**：檢查所有 Metadata，確保沒有出現禁語「療癒」。
*   **動態效能**：`IntersectionObserver` 需正常運作，確保動畫僅在進入視窗時觸發。
*   **圖像處理**：淺色底 Logo 使用 `mix-blend-multiply`，深色底使用 `mix-blend-screen`。
