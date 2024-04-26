var tipuesearch = {"pages":[{"title":"2024 Spring 課程w9","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同產品設計實習的專案實習, 透過 ChatGPT、Gemini 1.5 Pro 與 Claude 3 的協助下進行. 協同資料處理 請各班各組根據 2a_cd2024_midterm.csv, 以及 2b_cd2024_midterm.csv 中的學號、Github 帳號與組別, 設法在各組員與分組網站中, 列出各學員的 cd2024 倉儲、網站, 以及各班各組的期中報告倉儲與網站連結. 過程中, 請詳細說明各組及學員的倉儲與網站中的連結資料如何建立? 手動輸入? 利用程式進行處理? 或者採分工合作方式建立? 2b step1 取出資料放入數列 鋼球平衡台 PID 控制與模擬 請下載 cd2024_ball_balancing_platform_control_ref.7z, 閱讀後請將摘要內容放入個人與分組網誌中. 對 Gemini 1.5 Pro 提問: 以下為利用 PID 控制 CoppeliaSim 鋼球平衡台場景的 ZMQ RemoteAPI Python 程式, 請利用 Python 模組將系統控制過程, 鋼球在平衡台上的 x 方向座標與 y 方向, 利用 matplotlib 畫出來. \"這裡附上原本的 PID 控制程式碼\"","tags":"w9","url":"./2024-Spring-W9-blog-tutorial.html"},{"title":"2024 Spring 課程w8","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 cd2024 2a w8 產品協同架構說明 協同產品設計實習課程使用網際內容管理系統, 採 Github Classroom 建立分組倉儲, 並由學員自行利用 cmsimde_site 作為 Github 倉儲的引擎目錄, 利用 Python 執行網頁編輯. 之後再轉檔為靜態網頁, 以便利用 Github Pages 所提供的 WWW 伺服器呈現協同產品設計過程的相關多媒體內容. 除了章節式的網站外, cmsimde_site 還額外利用 Pelican 管理使用者所建立的網誌, 以及利用 Reveal 管理使用者所建立的網際簡報. 在使用者每週的內容管理過程, 由於必須採用 Python 執行網頁編輯, cd2024 課程採用了四種不同的方法進行, 其中包括 Replit、Codespaces、Gitpod 以及 localhost. 由於前三者屬於雲端作業, 各有不同的使用規定與免費使用權限, 對於多人協同的產品設計團隊而言, 可以根據各自的喜好與環境選擇合用的網頁編輯工具, 且在多方了解下也可透過實際使用發展中的雲端 IDE 環境, 一窺未來可能的 AI 導引前景. 從協同設計的架構上, 個人與分組的倉儲中, 總共設計了以下幾種內容的協同模式: 分組網站內容的協同 - 其中包括章節式的網站內容與網誌內容, 可以透過 Python 程式方法整合各學員子模組中的 config/content.htm 以及 markdown/*.md 檔案至分組網站中 分組報告內容的協同 - 採用的是 Github Actions 與近端 MikTeX 中的 xelatex 將 .tex 轉為 pdf 的整合過程 分組產品設計的 PLM 協同 - 採用的是 Odoo PLM 模組, 讓各分組可以將網站內容、報告內容視為產品, 從協同架構的訂定作為起點, 完成資料展示作為終點, 逐一將過程的協調、派任與執行方法納入 PLM 系統管理 分組零組件設計的協同 - 分別採用 Solvespace 作為鋼球平衡台範例, 讓學員使用 Siemens NX 1872 進行協同零組件繪圖設計, 並將各零件的 .prt 檔案納入各學員的倉儲進行組立, 以便找出最佳的設計分工以及零組件轉檔流程 分組模擬場景設計的協同 - 當各分組順利完成鋼球平衡台的零組件轉檔後, 一旦進入 CoppeliaSim 場景後, 必須逐一配置感測器 (Sensors)、致動器 (Actuators) 以及 ZMQ RemoteAPI Python程式, 主要探討如何將此一場景模擬過程在 CoppeliaSim XML 檔案格式與 Siemens NXOpen Python 零件程式檔案間, 找到合用或最佳的協同產品設計模式. 分組專案簡報設計的協同 - 在上述各產品設計階段所累積的各種資料, 該如何有效整合到專案完成後必須進行的網際簡報中. 分組網站內容的協同","tags":"w8","url":"./2024-Spring-W8-blog-tutorial.html"},{"title":"2024 Spring 課程w6","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同產品設計實習的第六週, 說明協同 NX 零組件繪圖以及 CoppeliaSim 場景模擬相關檔案格式. 註記: 以下教學影片雖經過除噪音處理, 但效果仍不好, 可能之後必須重新錄影. Github Actions 帶有子模組的 main.yml 設定 加入取子模組內容的 main.yml 設定","tags":"w6","url":"./2024-Spring-W6-blog-tutorial.html"},{"title":"2024 Spring 課程w5","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同產品設計實習的第五週, 教學內容為先前影片整理、分組網誌的統整與 NX 零組件繪圖. cd2024 2a w5 1 組員在 Replit 以 SSH 設定管理分組倉儲的權限 ODOO PLM 論文中英並列任務 教學影片分組整理並自評 如何統整組員子模組中的協同設計網誌","tags":"w5","url":"./2024-Spring-W5-blog-tutorial.html"},{"title":"2024 Spring 課程w4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時可導入 SourceTree 協助各組員更清楚看到倉儲改版歷程, 另外 Git Branch 的應用, 也可減少各學員階段性改版內容完成之前, 推向 Github 分組倉儲過程的合併次數. 教學影片分組整理並自評 w4 2a 分組任務 Github 個人與分組倉儲的維護方式","tags":"w4","url":"./2024-Spring-W4-blog-tutorial.html"},{"title":"2024 Spring 課程w3","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 列出期中分組倉儲與網站 cd2024 期中分組倉儲與網站 使用 Gitpod 維護倉儲與網站 將組員的個人倉儲設為分組倉儲子模組 利用可攜程式編譯 LaTeX","tags":"w3","url":"./2024-Spring-W3-blog-tutorial.html"},{"title":"2024 Spring 課程w2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. ODOO 參考資料 https://www.google.com/search?q=sap+vs+odoo (與 SAP 及 ODOO 有關的搜尋) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)","tags":"w2","url":"./2024-Spring-W2-blog-tutorial.html"},{"title":"2024 Spring 課程w1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. 2a 建個人課程倉儲 將個人倉儲 import 至 Replit 設定 Github 帳號的雙重認證 下載可攜套件檔案 如何 import 倉儲至 Replit 進行改版 設定網誌 Odoo PLM 功能","tags":"w1","url":"./2024-Spring-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統3 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};