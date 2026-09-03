import { useState } from "react";

const features = [
  ["✦", "하루 3분 요약", "중요한 AI 소식과 실무 팁을 짧고 가볍게 정리해 매일 3분 안에 읽을 수 있게 구성합니다."],
  ["⚡", "코드 없이 바로 사용", "개발 지식이 없어도 되는 도구만 골라서, 즉시 업무에 적용할 수 있는 형태로 소개합니다."],
  ["◎", "비전문가 중심", "AI 연구자보다 마케터, 운영 담당자, 중간 관리자에게 실질적으로 필요한 정보를 중심으로 전달합니다."],
  ["▣", "실행 가능한 템플릿", "이메일 초안, 캠페인 문구, 보고서 작성까지 바로 복사해서 쓰는 템플릿을 함께 제공합니다."],
  ["◌", "업계 트렌드 반영", "변화하는 AI 시장의 핵심 흐름만 골라서, 업무에 필요한 정보만 예민하게 정리합니다."],
  ["↗", "무료와 광고 기반", "구독료 없이 광고를 기반으로 운영해, 누구나 부담 없이 빠르게 AI 정보를 접할 수 있게 합니다."],
];

const testimonials = [
  ["KR", "김다은", "마케팅 팀장", "매일 3분씩 읽고 나면 AI 도구를 어떤 상황에서 써야 하는지 자연스럽게 이해됩니다. 업무에 바로 적용할 수 있어서 좋습니다."],
  ["PD", "박준호", "운영 담당자", "복잡한 전문 용어 없이 실무에 쓰는 도구만 소개해서, 제게 딱 맞는 정보를 얻고 있습니다. 매일 습관처럼 읽고 있어요."],
  ["LS", "이서윤", "중간 관리자", "AI를 처음 접하는 사람도 쉽게 따라가게 만드는 방식이 가장 큰 장점입니다. 이메일로 받아보는 방식이 특히 편합니다."],
];

const plans = [
  ["Free", "₩0", "AI를 처음 접하는 사람에게 추천", ["매일 뉴스레터 발송", "핵심 도구 3개 추천", "실무용 템플릿 제공"], "무료 구독"],
  ["Pro", "₩9,900", "실무에 바로 적용하고 싶은 사람", ["프리미엄 AI 도구 큐레이션", "업무별 템플릿 라이브러리", "실전 사례 리포트", "우선 업데이트 알림"], "프로 시작", true],
  ["Enterprise", "맞춤", "팀 단위로 AI 활용 전략을 운영하는 조직", ["팀 커스터마이징", "관리자 대시보드", "팀 교육 콘텐츠", "전용 지원"], "문의하기"],
];

const faqs = [
  ["Daily AI는 누구를 위한 서비스인가요?", "마케터, 운영 담당자, 중간 관리자, 그리고 AI를 처음 접하는 실무자가 가장 많이 활용하는 서비스입니다."],
  ["기술 지식이 없어도 괜찮나요?", "네. Daily AI는 복잡한 기술 설명보다 실제 업무에 바로 적용 가능한 AI 활용법만 중심으로 다룹니다."],
  ["한국 시장에서도 가능한 구조인가요?", "네. 이 서비스의 핵심은 무료 + 실전형 + 짧은 읽기 시간이라는 구조이기 때문에 국내 콘텐츠 시장에서도 충분히 수용될 수 있습니다."],
  ["메일로만 구독하나요?", "기본적으로는 이메일 뉴스레터 중심으로 운영되며, 필요한 경우 웹 콘텐츠와 템플릿 페이지도 함께 제공합니다."],
];

function PreviewWindow() {
  return <div className="window">
    <div className="window-bar"><span /><span /><span /></div>
    <div className="window-body">
      <aside className="sidebar"><div className="sidebar-header">오늘의 추천</div><ul>{[["AI 도구", 12], ["실전 팁", 7], ["템플릿", 5]].map(([label, count], index) => <li className={index === 0 ? "active" : ""} key={label}><span>{label}</span><b>{count}</b></li>)}</ul></aside>
      <div className="mail-panel">
        <div className="mail-toolbar"><div className="mail-chip">오늘의 요약</div><div className="mini-actions"><span /><span /><span /></div></div>
        <div className="email-card featured"><div className="email-header"><div className="avatar small">AI</div><div><strong>오늘의 추천</strong><small>실무용 툴 3개</small></div><span className="tag">Hot</span></div><p>업무 속도 향상에 바로 쓰는 AI 도구를 한 번에 정리해 드립니다.</p><div className="actions-row"><button className="pill success" type="button">도구 열기</button><button className="pill neutral" type="button">저장</button></div></div>
        <div className="email-card"><div className="email-header"><div className="avatar">MK</div><div><strong>마케터 팁</strong><small>실무 적용</small></div><span className="tag muted">핵심</span></div><p>고객 반응을 분석해 이메일 문안을 3배 빠르게 개선하는 방법.</p></div>
      </div>
      <div className="detail-panel"><div className="detail-header"><span>오늘의 메일</span><span className="status">읽기 3분</span></div><div className="reply-box"><p>1. 콘텐츠 아이디어 5개 생성하기<br />2. 이메일 초안 자동 작성하기<br />3. 캠페인 성과 요약 리포트 만들기</p><p>이 세 가지만 익혀도 일상 업무 속도가 눈에 띄게 빨라집니다.</p></div><div className="suggestions"><span>비전문가용</span><span>실전형</span><span>코드 없음</span></div></div>
    </div>
  </div>;
}

function SectionHeading({ eyebrow, children, center = false }) { return <div className={`section-heading${center ? " center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{children}</h2></div>; }

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  return <div className="page-shell">
    <header className="site-header"><div className="container nav"><a href="#" className="brand" aria-label="Daily AI home"><span className="brand-mark">D</span><span>Daily AI</span></a><nav className="main-nav" aria-label="Main navigation"><a href="#features">핵심 기능</a><a href="#workflow">왜 지금 필요한가</a><a href="#customers">사용자 후기</a><a href="#pricing">구독</a><a href="#faq">FAQ</a></nav><div className="nav-actions"><a href="#" className="text-link">로그인</a><a href="#pricing" className="btn btn-primary">무료 구독</a></div></div></header>
    <main>
      <section className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">매일 3분, 실행 가능한 AI 인사이트</span><h1>코드 없이도 되는 <span className="highlight">AI 활용법을 매일 받아보세요.</span></h1><p className="lead">Daily AI는 마케터, 운영자, 중간 관리자까지 누구나 실무에 바로 사용할 수 있는 AI 도구와 활용법을 매일 정리해 무료로 전해드립니다. 복잡한 기술 용어는 줄이고, 실제 업무에 바로 쓰는 팁만 담습니다.</p><div className="hero-actions"><a href="#pricing" className="btn btn-primary">무료 구독하기</a><a href="#features" className="btn btn-secondary">핵심 기능 보기</a></div><div className="social-proof">{[["3.2만+", "누적 구독자"], ["3분", "하루 한 번 읽기"], ["무료", "광고 기반 운영"]].map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div><div className="hero-visual" aria-label="Product preview"><PreviewWindow /></div></div></section>
      <section className="logos-strip" aria-label="Customer logos"><div className="container logos">{["마케팅", "운영", "브랜드", "영업", "고객지원", "PM"].map((item) => <span key={item}>{item}</span>)}</div></section>
      <section className="features container" id="features"><SectionHeading eyebrow="AI가 어렵지 않은 이유">비전문가도 바로 써먹는 실전형 AI 인사이트를 매일 제공합니다.</SectionHeading><div className="feature-grid">{features.map(([icon, title, text]) => <article className="feature-card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="stats-section" id="workflow"><div className="container stats-grid"><div className="stats-copy"><span className="eyebrow">왜 지금 필요한가</span><h2>AI를 잘 쓰는 사람은 많아졌지만, 실제로 쓰는 사람은 아직 적습니다.</h2><p>많은 사람은 AI를 알지만, 어떤 도구를 써야 하고 어디에 적용해야 하는지 몰라서 결국 흘려보냅니다. Daily AI는 그 간극을 줄입니다.</p></div><div className="metrics">{[["3분", "매일 읽는 적당한 분량"], ["0원", "구독료 없는 접근성"], ["실전형", "바로 업무에 적용 가능한 팁"]].map(([value, label]) => <div className="metric-card" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>
      <section className="showcase container" id="customers"><SectionHeading eyebrow="사용자 반응" center>업무에 바로 쓰는 정보가 쌓일수록 습관이 생깁니다.</SectionHeading><div className="showcase-layout"><div className="showcase-panel"><div className="mini-window"><div className="mini-header"><span className="dot" /><span className="dot" /><span className="dot" /></div><div className="mini-body"><div className="mini-row"><span className="label">오늘의 추천</span><span className="value">3개 도구</span></div><div className="mini-list">{[1, 2, 3].map((item) => <div className={`mini-item${item === 3 ? " active" : ""}`} key={item}><div className="line" /><div className="line short" /></div>)}</div></div></div></div><div className="showcase-copy"><div className="check-list">{["매일 3분이면 AI 도구와 활용법을 자연스럽게 익힐 수 있습니다.", "복잡한 기술 설명 대신 실제 팀 업무에 필요한 내용을 중심으로 전달합니다.", "AI를 전문가 문제가 아니라 우리 일에 쓰는 도구로 바꿉니다."].map((text) => <div className="check-row" key={text}><span className="check">✓</span><p>{text}</p></div>)}</div></div></div></section>
      <section className="testimonials"><div className="container"><div className="testimonial-grid">{testimonials.map(([initials, name, role, quote]) => <article className="quote-card" key={name}><div className="stars">★★★★★</div><p>“{quote}”</p><div className="person"><div className="avatar">{initials}</div><div><strong>{name}</strong><small>{role}</small></div></div></article>)}</div></div></section>
      <section className="pricing container" id="pricing"><SectionHeading eyebrow="무료로 시작" center>AI 정보를 더 쉽게 접할 수 있는 구독 구조를 만듭니다.</SectionHeading><div className="pricing-grid">{plans.map(([name, price, description, items, action, featured]) => <article className={`pricing-card${featured ? " featured-plan" : ""}`} key={name}><span className="plan-name">{name}</span><h3>{price}{name === "Pro" && <span>/월</span>}</h3><p>{description}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><a href="#" className={`btn ${featured ? "btn-primary" : "btn-secondary"} full`}>{action}</a></article>)}</div></section>
      <section className="faq container" id="faq"><SectionHeading eyebrow="FAQ" center>자주 묻는 질문</SectionHeading><div className="faq-list">{faqs.map(([question, answer], index) => <article className={`faq-item${openFaq === index ? " active" : ""}`} key={question}><button className="faq-question" type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}</button><div className="faq-answer" style={openFaq === index ? { maxHeight: "200px" } : undefined}><p>{answer}</p></div></article>)}</div></section>
      <section className="cta-section"><div className="container cta-box"><div><span className="eyebrow">매일 한 번의 변화</span><h2>AI를 어렵게 느끼는 대신, 오늘 업무에서 바로 써보세요.</h2></div><a href="#pricing" className="btn btn-primary">무료 구독 시작</a></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-wrap"><div className="brand"><span className="brand-mark">D</span><span>Daily AI</span></div><div className="footer-links"><a href="#">서비스</a><a href="#">보안</a><a href="#">회사</a><a href="#">리소스</a></div><p>© {new Date().getFullYear()} Daily AI. All rights reserved.</p></div></footer>
  </div>;
}

export default App;
