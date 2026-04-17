import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Target, BookOpen, BarChart } from 'lucide-react';

export default function SpeakUpResearch() {
  return (
    <div className="page-container bg-bg-light min-h-screen pb-20">
      <nav className="navbar scrolled shadow-sm">
        <div className="nav-content">
          <Link to="/" className="text-gray-600 hover:text-teal font-semibold flex items-center gap-2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <ArrowLeft size={20} /> 回到首頁
          </Link>
          <div className="text-teal font-bold text-xl">Speak Up 研究</div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        <div className="section-header text-center mb-12">
          <h1 className="section-title">Speak Up 發聲行為系列研究</h1>
          <div className="title-underline mx-auto"></div>
          <p className="section-desc mx-auto" style={{ maxWidth: '800px' }}>
            建立安全的醫療環境，從勇敢發聲開始。本系列研究致力於揭開醫療場域中「不敢說」的真相，並透過實證找出改變行為的關鍵解方。
          </p>
        </div>

        {/* 研究脈絡圖 Roadmap */}
        <div className="roadmap-container glass-card mb-16 p-8">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Target className="text-teal" /> 研究脈絡與藍圖
          </h2>
          <div className="timeline">
            {/* Timeline: 比較早的放在最上面 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2021-2022 • 探索期</span>
                <h3 className="font-bold text-lg mb-2">釐清障礙與個人化訓練初探</h3>
                <p className="text-gray-600 text-sm">初步發掘影響醫學生發聲的相關因素，並驗證個人化訓練（Personalized Training）的初步成效與學員反應。</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2023-2024 • 實證與轉化期</span>
                <h3 className="font-bold text-lg mb-2">跨專業整合與模擬訓練深化</h3>
                <p className="text-gray-600 text-sm">透過護理領域的系統性文獻回顧建立堅實基礎，並證明了「模擬情境 + 個人化回饋」能有效轉換並提升醫學生指出醫療錯誤的意願及技巧。</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2025 • 深入反思期</span>
                <h3 className="font-bold text-lg mb-2">破解沈默密碼與長期趨勢</h3>
                <p className="text-gray-600 text-sm">針對「未來醫師越來越沉默」的下降趨勢進行現象剖析，並統整出驅動與阻礙發聲的深層心理與系統環境因素。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 論文介紹區塊 */}
        <h2 className="text-2xl font-bold mb-8">重點文獻解析 (依時序，最新在最上方)</h2>
        <div className="articles-grid space-y-8">

          {/* Article 1: 2025.11 (最新的排在最上面) */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2025.11</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">未來醫師的沉默：發聲行為下降趨勢實證研究</h3>
            <p className="text-gray-500 italic mb-6">Future doctors silence: An empirical study of declining speaking-up behavior among medical students</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">隨著時代演進，新生代醫護人員在面對醫療錯誤時選擇「沉默」的機率正在攀升。這是一個需要醫療教育系統高度關注的警訊。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">本研究跨年度分析醫學生在遇到醫療危機時的反應，證實了整體發聲行為的滑落趨勢，敲響了醫學教育必須加速介入與改革的警鐘。</p>
              </div>
            </div>
          </article>

          {/* Article 2: 2025.08 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2025.08 • Medical Education</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">打破沉默：揭露醫學生發聲的驅力與障礙</h3>
            <p className="text-gray-500 italic mb-6">Breaking the silence: Revealing drivers and barriers to medical students speaking up</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">發聲不僅是個人勇氣的展現，更高度受到心理安全感、層級文化壓力與自我效能等系統性障礙影響。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">透過深度分析，本研究建立了一份發聲阻力與驅力的核心地圖。詳細列出了在臨床最前線阻擋醫學生發聲的各種障礙因素，以及能賦權給他們的關鍵驅動力。</p>
              </div>
            </div>
          </article>

          {/* Article 3: 2024.08 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2024.08 • Medical Teacher</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">轉化發聲行為：模擬與個人化回饋的強大影響</h3>
            <p className="text-gray-500 italic mb-6">Transforming medical students speaking-up behaviors in medical errors: The impact of simulation and personalized debriefing</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">「針對個體表現的回饋 (Personalized debriefing)」比「一般性群體教學」更能實質轉化行為模式。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BarChart size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">實驗組學生在面臨模擬醫療錯誤後，接受了專屬的個人化討論。後續追蹤證實，他們再面臨挑戰時，不僅發聲頻率大幅增加，溝通清晰度也顯著提升。</p>
              </div>
            </div>
          </article>

          {/* Article 4: 2023.04 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2023.04 • Nurse Education Today</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">護理人員發聲行為之系統性文獻回顧與統合分析 (ACT nursing SR meta)</h3>
            <p className="text-gray-500 italic mb-6">ACT nursing SR meta</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">統整全球護理領域研究，歸納出護理團隊在維護病人安全時採取發聲行動的共通模式與挑戰。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BookOpen size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">本篇為大規模的 Systematic Review 與 Meta-Analysis。探討教學介入 (ACT - Assertive Communication Training 等) 是否能穩定改善護理人員在臨床上的自信、態度與行為轉換。</p>
              </div>
            </div>
          </article>

          {/* Article 5: 2022.10 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2022.10 • Medical Teacher</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">醫學生的現場反應探索及個人化訓練的成效評估</h3>
            <p className="text-gray-500 italic mb-6">Exploration of students reaction in medical error events and the impact of personalized training on the speaking up behavior in medical error events</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">當第一次親臨醫療錯誤情境時，學員最真實的反應往往是錯愕與猶豫。個人化的針對性訓練能賦予他們行動的框架。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><FileText size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">透過探索性研究深入還原醫學生在犯錯現場的壓力迴圈，並實證單次且高強度的個人化溝通指引，能幫助他們踏出打破沉默的第一步。</p>
              </div>
            </div>
          </article>

          {/* Article 6: 2021.09 */}
          <article className="glass-card p-8 article-card mb-8">
            <div className="article-badge mb-4">2021.09 • Medical Teacher</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">影響醫學生對醫療錯誤發聲之前導因素研究</h3>
            <p className="text-gray-500 italic mb-6">Factors associated with medical students speaking up about medical errors</p>
            
            <div className="article-content-grid">
              <div className="content-box bg-teal-50">
                <h4 className="flex items-center gap-2 text-teal font-semibold mb-2"><Target size={18} /> 核心訊息</h4>
                <p className="text-sm text-gray-700">建立後續一系列 Speak Up 研究的基礎，明確指出了階級文化對溝通意願的初期抑制力。</p>
              </div>
              <div className="content-box">
                <h4 className="flex items-center gap-2 text-gray-800 font-semibold mb-2"><BarChart size={18} /> 重點內容摘要</h4>
                <p className="text-sm text-gray-600">這是一份奠基型的評估報告。分析了性別、年級、以往臨床經驗等變項，如何直接與間接地決定一個醫學生在目睹不安全行為時，是否願意挺身而出。</p>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}
