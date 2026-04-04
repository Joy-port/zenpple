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
  foreground: "#333333", // 墨：主文字
  series: {
    qi: "#4A6B8A",       // 靛石藍：QI-SB 系列
    hl: "#C47B7B",       // 煙霞玫：HL 系列
    sc: "#7B6B9E",       // 暮紫：HL / SC 系列
    co: "#C4784A",       // 沉金橙：CO 系列
    as: "#5E8E8A",       // 苔石青：AS 認證
    ts: "#B09070",       // 暖沙石：TS / PE 系列
    // QI-CS 夏＋玄 專屬色階（深綠系）
    "qi-cs": {
      light: "#607866",  // 苔綠：主強調色 / 標籤 / 連結
      mid:   "#3D5C48",  // 林綠：次要強調 / 展開項目
      dark:  "#212E27",  // 深森：標題 / CTA 底色
    }
  }
}
```

### 字型層級
*   **Display (英)**: `Josefin Sans` (Weight 100, Letter-spacing 0.3em)
*   **Heading (中)**: `Noto Sans TC 900` / 王漢宗特黑
*   **Body**: `DM Sans` (Line-height 1.7)
*   **Mono**: `Space Mono` (用於編號/價格)

### 字型尺寸規範 (Typography Size Rules)
> 以下規範確保所有文字符合可讀性標準，禁止低於下限值。

| 角色 | 最小尺寸 | 備註 |
| :--- | :--- | :--- |
| Section label (Mono 標籤) | **12px** | 如「預約流程」、`SOUND MAPPING` 等小標 |
| Caption / tag / meta | **12px** | 卡片內 EN 副標、flip-hint、珍珠 cap 等 |
| Body text | **13px** | 描述段落最低限 |
| 裝飾性數字 (step number) | **11px** | 如步驟 01 02 03，可帶透明度但不得低於 11px |
| 任何可見文字 | **11px** | 絕對下限，無例外 |

### 文字透明度規範 (Text Opacity Rules)
*   **可讀文字**（標籤、描述、副標）：`opacity ≥ 0.6` / `rgba alpha ≥ 0.6`
*   **裝飾性文字**（步驟編號、次要 hint）：`opacity ≥ 0.5`
*   **深色背景上的淺色文字**（hero label、en-sub）：`rgba(255,255,255, ≥ 0.65)`
*   **禁止**：`opacity: 0.35`、`0.45`、`0.48`、`0.52` 等低於 0.5 的可讀文字

## 4. 核心頁面路由與功能架構
| 路徑 | 頁面名稱 | 核心組件需求 |
| :--- | :--- | :--- |
| `/` | 首頁 | 全螢幕 Hero（主標語中英雙行）+ **互動角色卡牌 (Click-to-expand)**（潮間帶的人、林間迷霧者、播種者）+ 森波生態區（大山插圖、左靈性調頻／右高階養成）+ 雙顧問雙軌導航 + Contact（LINE / IG） |
| `/qi-sb` | 靈性頌缽音流 | Hero + 頌缽定頻原理簡介 + 顧問介紹（禿禿）+ Feature Grid（服務項目與價格）+ FAQ Accordion + Testimonial + CTA（LINE）+ 腦波定頻技術規格說明 |
| `/hl` | 深層系統對齊 | Hero + 定頻邏輯 3 步驟（掃描→清理→陪跑）+ HL-01 介紹 + **分支路徑選擇器**（A: HL-02 全面式 vs B: HL-03 針對式）Feature Comparison Table + HL-02 Core Reset 詳述 + HL-02-A 陪跑 Timeline + HL-03 PEARL+ 六珍珠 Card Gallery + CTA |
| `/sc` | 薩滿靈魂覺醒 | Hero + 薩滿三界世界觀（三界圖插畫）+ 核心服務 Feature Grid + SC 旅程 5 階段 Vertical Timeline + SC×HL 整合推薦 + 免責小叮嚀 + CTA |
| `/xia` | 夏＋玄路徑諮詢 | Hero + 指導靈宣言（玄天上帝教誨，水墨垂直排版）+ **7 情境對照表**（情境→建議服務）+ 決策路徑地圖 Flowchart（QI-OR→QI-CS→AS-C）+ 服務細項列表 + 諮詢規範 FAQ + 顧問介紹（夏子）+ CTA · 色系：#607866 / #212E27 |
| `/as` | 品牌認證考核 | Hero + 三階段養成路徑 Timeline + **AS 四大考核關卡** Step-by-step（AS-E / AS-P1 / AS-P2 / AS-S）+ 市場風格定錨服務介紹 + 證書效力對比表（修業證 vs 認證）+ 認證證書展示 + CTA |
| `/ts-pe` | 高階執業養成 | Hero + 執業精神說明 + TS 技術系列 Feature List（TS-01/02/03）+ PE 感知倫理系列 Feature List（PE-01 / PE-L）+ 雙軸修煉路徑圖（路徑A+B → PE 必修）+ 核心技術修業證說明 + CTA（入學評估）|
| `/as-c` | 品牌孵化實務 | Hero + 進入路徑 Step-by-step（AS-C-01→02or03，強制前置）+ **三大核心服務 Feature Grid**（AS-C-01/02/03 含價格）+ 技術規格警告（AS-C-02 純理性邏輯）+ FAQ + CTA |
| `/co` | 聯名企業合作 | Hero + 服務定位說明（大眾放鬆 vs 高階校準）+ **企業包場 CO-C 比較表**（C1/C2/C3）+ 團體微包場 CO-M 系列 + 聯名培訓授權 CO-L（L1/L2）+ 核心團隊聚會 CO-G + 合作三步驟流程圖 + 企業洽詢 CTA |
| `/about` | 關於森波 | Hero + 品牌緣起（ZENPPLE 意涵 + 三大支柱）+ Team Section（禿禿 / 夏子 / 雅妃老師）含 Pills 跳轉 + 品牌格言 + 致謝設計師 Joy + CTA |
| `/contact` | 聯繫森波 | Hero + LINE / IG / QR Code CTA + 預約四步驟卡片 + 台南 / 台北場地介紹（Google Map 嵌入）+ FAQ Accordion + Testimonial（品牌座右銘）|
| `/legal` | 執業規範與免責聲明 | Hero + **8 大執業紅線** Feature List + 非醫療聲明清單（技術規格說明）+ 誠實原則 5 步驟 + 能力邊界 FAQ Accordion（不碰、不扛、不逞強）+ CTA（導向 About）|

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