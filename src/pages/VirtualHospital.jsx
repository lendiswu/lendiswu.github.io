import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, AlertCircle, Monitor, Users, Glasses, CheckCircle2, Globe, HeartPulse, GraduationCap, Shield } from 'lucide-react';

export default function VirtualHospital() {
  return (
    <div className="page-container bg-bg-light min-h-screen pb-20">
      <nav className="navbar scrolled shadow-sm">
        <div className="nav-content">
          <Link to="/" className="text-gray-600 hover:text-teal font-semibold flex items-center gap-2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <ArrowLeft size={20} /> 回到首頁
          </Link>
          <div className="text-teal font-bold text-xl">專案專區</div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        {/* Hero Section */}
        <div className="section-header text-center" style={{ marginBottom: '80px' }}>
          <div className="flex-center justify-center" style={{ marginBottom: '24px' }}>
            <div style={{ padding: '24px', backgroundColor: 'var(--color-bg-teal-50)', borderRadius: '50%' }}>
              <Building size={56} className="text-teal" />
            </div>
          </div>
          <h1 className="section-title">北醫大虛擬醫院建構<br/><span className="text-teal-gradient">重構未來的醫療學習</span></h1>
          <div className="title-underline mx-auto"></div>
          <p className="text-gray-800 font-bold" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
            Reconstructing Learning for the Future of Healthcare
          </p>
          <p className="text-gray-500 mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
            精通科技，實踐以心為本的照護 (Mastering Technology, Practicing Heart-Centered Care)
          </p>
        </div>

        {/* Section 1: 初衷與挑戰 */}
        <section style={{ marginBottom: '100px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2" style={{ marginBottom: '40px' }}>
            <AlertCircle className="text-teal" /> 為什麼我們需要虛擬醫院？
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 className="font-bold text-gray-800" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                教育與臨床的斷層 (Clinical Shock)
              </h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                學生在轉換過程中的不確定性，以及面對真實病人的決策癱瘓，導致無法順利將所學知識應用於臨床情境。
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 className="font-bold text-gray-800" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                傳統模擬教育的資源困境
              </h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                高成本、空間場域限制、師生比門檻高等因素，導致多數學生缺乏大量的「刻意練習」機會。
              </p>
            </div>
            
            <div className="glass-card hover-lift" style={{ padding: '40px', backgroundColor: 'var(--color-bg-teal-50)', borderColor: 'var(--color-bg-teal-100)' }}>
              <h3 className="font-bold text-teal" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                提前負責與賦能
              </h3>
              <p className="text-gray-800" style={{ lineHeight: '1.8' }}>
                提前讓學員暴露醫療照護環境中，使他們能夠在安全狀態下提前負責及賦能，積累承擔決策後果的經驗。
              </p>
            </div>
            
            <div className="glass-card hover-lift" style={{ padding: '40px', backgroundColor: 'var(--color-bg-teal-50)', borderColor: 'var(--color-bg-teal-100)' }}>
              <h3 className="font-bold text-teal" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                新時代的資源最佳化解方
              </h3>
              <p className="text-gray-800" style={{ lineHeight: '1.8' }}>
                將昂貴的實體模擬中心 (SBL) 保留給最關鍵的臨床整合，而將 80% 的常態化決策練習交由虛擬醫院完成。
              </p>
            </div>
            
          </div>
        </section>

        {/* Section 2: 核心架構 */}
        <section style={{ marginBottom: '100px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2" style={{ marginBottom: '40px' }}>
            <Globe className="text-teal" /> 安全、可重複、高度整合的臨床學習生態系
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            <div className="glass-card hover-lift" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Monitor size={48} className="text-teal" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>擬真醫療資訊系統 (HIS)</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                從單純的「案例討論」轉向真實的「決策負責」。包含學習梳理混亂病歷、正確查閱數據，以及開立具備邏輯的醫令。
              </p>
            </div>
            
            <div className="glass-card hover-lift" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Users size={48} className="text-teal" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>虛擬病人 (Virtual Patients)</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                無風險的溝通同理實驗室，學員能夠練習問診、病史搜集、共享決策 (SDM) 及面對壞消息告知的高張力應對。
              </p>
            </div>
            
            <div className="glass-card hover-lift" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Glasses size={48} className="text-teal" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>擴增實境 (VR & XR)</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                在沉浸式空間中練習理學檢查、處置程序，建立精準的程序化直覺與跨領域團隊的協作默契。
              </p>
            </div>
            
          </div>
        </section>

        {/* Section 3: 教與學的翻轉 */}
        <section style={{ marginBottom: '100px' }}>
          <div className="glass-card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              
              <div style={{ padding: '48px', backgroundColor: 'var(--color-bg-light)', borderRight: '1px solid var(--color-border)' }}>
                <div className="badge">過去模式</div>
                <h3 className="font-bold text-gray-800" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>知識學習者</h3>
                <blockquote style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  "I am learning from the care."
                </blockquote>
                <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                  被動吸收正確答案，等待被考核。在受保護的環境下觀察，身分為醫療場景中的「客體」。
                </p>
              </div>
              
              <div style={{ padding: '48px', backgroundColor: 'var(--color-bg-teal-50)' }}>
                <div className="badge" style={{ backgroundColor: 'var(--color-primary)', color: 'white', borderColor: 'var(--color-primary-dark)' }}>現在的翻轉</div>
                <h3 className="font-bold text-teal" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>臨床代理人</h3>
                <blockquote style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--color-primary-dark)', marginBottom: '24px' }}>
                  "I am participating the care."
                </blockquote>
                <p className="text-gray-800" style={{ lineHeight: '1.8' }}>
                  主動代理決策，在系統中承擔責任。思考如何與病人溝通、與團隊協調，從參與中學習解決問題。
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* Section 4: 落地課程範例 */}
        <section style={{ marginBottom: '100px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2" style={{ marginBottom: '40px' }}>
            <GraduationCap className="text-teal" /> 落地課程『範例』 (3-Week Integrated CBL Path)
          </h2>
          <div className="roadmap-container glass-card" style={{ padding: '40px' }}>
            <p className="text-gray-600 mb-8 text-center" style={{ fontSize: '1.1rem' }}>
              虛擬醫院系統導入 CBL (Case-Based Learning) 課程流程範例
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Week 1 • 資訊搜集與假設</span>
                  <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>虛擬病人問診練習</h3>
                  <div className="text-gray-600" style={{ lineHeight: '1.8' }}>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                      <li>簡介病人樣貌及主訴，進行虛擬病人問診。</li>
                      <li>觀看系統提供的身體檢查訊息。</li>
                      <li>小組討論初步鑑別診斷與後續該詢問的病史。</li>
                    </ul>
                    <p style={{ fontWeight: '600', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-bg-teal-50)', padding: '12px', borderRadius: '8px' }}>
                      🌟 回家作業：完成 Admission Note，蒐集背景知識。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Week 2 • 決策與檢驗計畫</span>
                  <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>開立檢查與醫病溝通</h3>
                  <div className="text-gray-600" style={{ lineHeight: '1.8' }}>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                      <li>報告初步鑑別診斷，並向虛擬病人解釋診斷與後續安排。</li>
                      <li>在虛擬系統中開立檢驗與檢查選項。</li>
                      <li>對照系統紀錄，檢視與實際開立項目的落差。</li>
                    </ul>
                    <p style={{ fontWeight: '600', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-bg-teal-50)', padding: '12px', borderRadius: '8px' }}>
                      🌟 回家作業：針對檢查及治療設計 PICO 原則，形成實證醫學議題。
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Week 3 • 驗證與方針建立</span>
                  <h3 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>醫令開立與治療目標設定</h3>
                  <div className="text-gray-600" style={{ lineHeight: '1.8' }}>
                    <ul style={{ paddingLeft: '24px', marginBottom: '8px' }}>
                      <li>上台報告 EBM (實證醫學) 作業內容。</li>
                      <li>操作 One Page 系統開立相關治療醫屬。</li>
                      <li>建立最終治療方針與目標，並學習如何確認治療成效。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: 願景與核心價值 */}
        <section style={{ marginBottom: '80px' }}>
          <h2 className="text-2xl font-bold flex-center gap-2 justify-center" style={{ marginBottom: '40px' }}>
            <HeartPulse className="text-teal" /> 迎向人機協作的新常態
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            <div className="glass-card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
              <Shield size={40} className="text-teal mx-auto" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.15rem', marginBottom: '16px' }}>安全支持下的刻意練習</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                提供零風險的避風港，讓學員在決策、處置與團隊合作中反覆進行高品質的演練。
              </p>
            </div>
            
            <div className="glass-card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
              <Building size={40} className="text-teal mx-auto" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.15rem', marginBottom: '16px' }}>提早為未來模式準備</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                不只是工具學習，更是提早熟悉與 AI 系統、數位平台深度共存的「人機協作」照護模式。
              </p>
            </div>
            
            <div className="glass-card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
              <AlertCircle size={40} className="text-teal mx-auto" style={{ marginBottom: '24px' }} />
              <h3 className="font-bold" style={{ fontSize: '1.15rem', marginBottom: '16px' }}>價值認同為核心</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                科技僅是手段。打造出能發揮同理心與建立信任的學習體驗，才是醫療教育真正的核心與邊界。
              </p>
            </div>
            
          </div>
        </section>

      </div>
    </div>
  );
}
