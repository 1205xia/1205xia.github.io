import { StrictMode, useEffect, useState } from 'react'
import lottie from 'lottie-web'
import { createRoot } from 'react-dom/client'
import { Flower2 } from 'lucide-react'
import './styles.css'

const sections = [{ id: 'about', label: '关于我' }, { id: 'projects', label: '项目经历' }, { id: 'strengths', label: '工作方式' }, { id: 'contact', label: '联系我' }]
function App() {
  const [entered, setEntered] = useState(false)
  const [opening, setOpening] = useState(false)
  const [section, setSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const el = document.querySelector('.lottie-bg'); if (!el) return; const anim = lottie.loadAnimation({ container: el as HTMLElement, renderer: 'svg', loop: true, autoplay: true, path: '/heartbeat.json' }); return () => anim.destroy() }, [])
  useEffect(() => { const t = setTimeout(() => setMounted(true), 120); return () => clearTimeout(t) }, [])
  if (!entered) return <main className={`gate ${opening ? 'is-opening' : ''}`}>
    <div className="gate-ambient" aria-hidden="true" />
    <div className="gate-frame" aria-hidden="true"><div className="gate-light" /></div>
    <button className="gate-door" onClick={() => { if (!opening) { setOpening(true); window.setTimeout(() => setEntered(true), 2500) } }} aria-label="进入夏瑶雯的个人作品集">
      <span className="door-panel" />
      <span className="door-edge" />
      <b>{opening ? 'OPENING' : '点击进入'}</b>
    </button>
    <div className="entry-flash" aria-hidden="true" />
    <p>夏瑶雯 <i>/</i> PERSONAL ARCHIVE</p>
  </main>
  return <main className="portfolio"><video className="portfolio-video-bg" src="/microvisuals-bg.mp4" autoPlay muted loop playsInline aria-hidden="true" /><header className="portfolio-top"><button onClick={() => setSection('home')} className="portfolio-brand"><i>夏</i><span>夏瑶雯</span></button><button className="reenter" onClick={() => { setEntered(false); setOpening(false) }}>再次入场</button><small>PERSONAL PORTFOLIO / 2026</small></header><div className="portfolio-liquid" /><div className="lottie-bg" aria-hidden="true" />
    {section === 'home' && <section className={`portfolio-page portfolio-home ${mounted ? 'is-ready' : ''}`}><small>A QUIET COLLECTION OF REAL WORK</small><h1>把复杂的事，<br />做成<em>清晰的成果</em>。</h1><p>我是夏瑶雯。喜欢把真实的观察、零散的信息和具体的行动，整理成别人能够理解、使用和记住的东西。</p><div className="home-links">{sections.map(item => <button key={item.id} onClick={() => setSection(item.id)}><small>{item.id.toUpperCase()}</small><strong>{item.label}</strong><b>展开 ↗</b></button>)}</div></section>}
    {section === 'about' && <section className="portfolio-page about-page"><button className="return" onClick={() => setSection('home')}>← 返回封面</button><div className="about-intro"><h2>About <em>me</em></h2><p>我不把自己包装成“什么都会”，而是展示一条正在变扎实的路径：从真实项目出发，把信息、工具和表达连接起来。</p></div><div className="content-grid"><div><h3>我是夏瑶雯，正在学习成为一个能把 <em>数据、工具与人的需求</em> 连起来的人。</h3><p>我就读于西安明德理工学院数据科学与大数据技术专业。我的优势不只在于会使用某个工具，而在于愿意把一个模糊任务拆开：先确认目标，再整理资料，最后把结果做成别人看得懂、接得住的内容。</p><p>在北辰青年项目中，我参与了大学生课外实践活动调研，整理 93 份有效问卷，并参与调研报告、汇报 PPT 和招募长海报。这个过程让我更清楚地理解了数据工作和内容工作的共同点：准确、协作、交付，缺一不可。</p><p>我也持续练习 Excel、SQL、Pandas 与 AI 工具，让数据清洗、指标拆解、基础可视化和表达能力逐步形成连接。</p><div className="about-stats"><span><b>93</b><small>份<br />有效问卷整理与分析参与</small></span><span><b>3</b><small>类<br />报告、汇报 PPT、招募海报交付</small></span><span><b>6+</b><small>项<br />Excel、SQL、Pandas 与 AI 工具实践</small></span></div></div><aside className="field-note"><span>data / ai / visual</span><div className="field-orbit" /><div className="field-core" /><small>A PERSONAL FIELD NOTE</small></aside></div></section>}
    {section === 'projects' && <section className="portfolio-page"><button className="return" onClick={() => setSection('home')}>← 返回封面</button><h2>Selected <em>work</em></h2><p className="section-lead">不把练习项目写成成熟商业案例，按真实投入、使用工具和可见产出呈现。</p><div className="hero-metrics"><div><small>DOUYIN / PEAK REACH</small><b>12.4 万</b><span>最高播放量 · 点赞 4.1 万</span></div><div><small>XIAOHONGSHU / PEAK REACH</small><b>5.6 万</b><span>最高播放量 · 点赞 1.5 万</span></div></div>{[['北辰青年 / 校园行动合伙人','参与大学生课外实践活动需求调研，完成问卷资料整理与分析，协作产出调研报告、汇报 PPT 和招募长海报。重点经验是把多人协作中的零散信息，整理成可以汇报和交付的结果。','使用：问卷数据整理 · 信息归纳 · 报告结构 · PPT 表达 · 视觉排版 · 93 份问卷 · 3 类交付'],['内容运营 / 双平台数据复盘','围绕游戏、二次元与 Cosplay 内容，参与选题、制作、发布和数据复盘，用平台反馈迭代内容方向。最高表现内容：抖音最高播放量 12.4 万、点赞 4.1 万；小红书最高播放量 5.6 万、点赞 1.5 万。','使用：内容选题 · 平台数据观察 · 数据复盘 · 视觉素材与剪辑工具 · 抖音 12.4 万 · 小红书 5.6 万'],['数据分析学习项目','围绕销售、用户增长和行为数据练习分析流程：明确问题、清洗数据、拆解指标、完成查询或计算，再输出结论和建议。当前重点是让基础能力变得稳定，而不是堆砌工具名称。','使用：Excel · SQL · Pandas · 基础可视化 · 指标拆解 · 能力建设中'],['个人 AI 工具探索','尝试使用知识库、提示词和本地工具改善日常工作流，包括资料整理、任务拆解和内容生成。它是辅助效率的探索，目前不把它包装成已经完成的 AI 产品。','使用：知识库 · Prompt · 本地工具 · 工作流设计 · 探索阶段']].map(([title, copy, tools], i) => <article className="project" key={title}><i>0{i + 1}</i><div><h3>{title}</h3><p>{copy}</p><strong>{tools}</strong></div></article>)}</section>}
    {section === 'strengths' && <section className="portfolio-page method-page"><button className="return" onClick={() => setSection('home')}>← 返回封面</button><div className="method-heading"><div><h2>My <em>method</em></h2><p>我的工作方式不是一句口号，而是一套可以被复盘、被验证、也能持续改进的动作。</p></div></div><div className="method-grid">{[['先找问题','从目标开始拆解','先确认要回答什么问题、最后要交付什么，再决定该看哪些资料、指标和信息。','项目体现：把调研需求转成问卷和分析方向','DEFINE / QUESTION'],['再做结构','把混乱变成路径','面对大量资料和协作任务，建立清晰的表格、目录或步骤，让团队知道下一步做什么。','项目体现：整理 93 份问卷并参与报告结构梳理','ORGANIZE / SYSTEM'],['最后交付','让结果能被使用','不止停留在“做过”，而是把分析结论、汇报页面或视觉内容整理到可以阅读、沟通和复用。','项目体现：参与报告、PPT 与招募海报交付','DELIVER / IMPACT']].map(([label,title,copy,evidence,english], i) => <article key={title}><b>0{i + 1} / {label}</b><h3>{title}</h3><p>{copy}</p><strong>{evidence}</strong><small>{english}</small></article>)}</div></section>}
    {section === 'contact' && <section className="portfolio-page contact-page"><button className="return" onClick={() => setSection('home')}>← 返回封面</button><div className="contact-layout"><div><small>LET'S TALK</small><h2>如果你在意<br /><em>真实的完成度</em>。</h2><p className="contact-hook">数据能说明结果，过程能说明一个人。</p></div><div className="contact-card"><h3>夏瑶雯</h3><strong>项目执行 / 数据分析学习者</strong><p>擅长把调研、信息整理和视觉表达接成一个完整交付。</p><div className="contact-numbers"><b>93</b><span>问卷</span><b>3</b><span>类交付</span></div><a href="mailto:18991739840@163.com">18991739840@163.com ↗</a></div></div></section>}
    <nav className="portfolio-nav">{sections.map(item => <button key={item.id} onClick={() => setSection(item.id)}>{item.label}<b>↗</b></button>)}</nav>
  </main>
}
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
