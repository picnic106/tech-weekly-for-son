import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CategorizedNewsletterPreview = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: '1000px',
    backgroundColor: '#f8f9fa',
    color: '#333',
  };

  const titleStyle = {
    color: '#2c3e50',
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '40px',
    fontWeight: '300',
  };

  const tabsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  };

  const tabStyle = (isActive) => ({
    padding: '10px 20px',
    marginRight: '10px',
    backgroundColor: isActive ? '#3498db' : '#e0e0e0',
    color: isActive ? 'white' : '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const issueStyle = {
    backgroundColor: 'white',
    marginBottom: '20px',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  };

  const issueTitleStyle = {
    marginTop: 0,
    color: '#3498db',
    fontSize: '1.4em',
    fontWeight: '500',
  };

  const issueDescStyle = {
    color: '#555',
    fontSize: '1em',
  };

  const issueLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '500',
    marginTop: '15px',
    transition: 'color 0.3s ease',
  };

  const renderIssues = (category) => {
    const issues = {
      tech: [
        { title: "AI 革新医疗诊断", desc: "本周，我们探讨了AI如何在医疗诊断领域取得突破性进展，预测罕见疾病的早期症状。" },
        { title: "量子计算的最新进展", desc: "量子计算机的发展可能彻底改变密码学和数据安全领域，我们深入分析了其潜在影响。" }
      ],
      sports: [
        { title: "奥运会筹备最新动态", desc: "2024年巴黎奥运会的筹备工作正如火如荼，我们带来了最新的场馆建设和赛事安排信息。" },
        { title: "电子竞技成为正式比赛项目", desc: "随着电子竞技被纳入多项国际赛事，我们讨论了其对传统体育的影响和未来发展。" }
      ],
      finance: [
        { title: "全球经济复苏态势", desc: "后疫情时代，全球经济呈现出新的复苏态势，我们分析了主要经济体的最新数据和政策走向。" },
        { title: "加密货币市场动荡", desc: "加密货币市场经历了剧烈波动，我们深入探讨了背后的原因和对传统金融体系的影响。" }
      ]
    };

    return issues[category].map((issue, index) => (
      <div key={index} style={issueStyle} className="hover:shadow-lg">
        <h2 style={issueTitleStyle}>{issue.title}</h2>
        <p style={issueDescStyle}>{issue.desc}</p>
        <a href="#" style={issueLinkStyle} className="hover:text-blue-600">
          阅读更多 <ChevronRight size={20} />
        </a>
      </div>
    ));
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>小明的多元周刊</h1>
      
      <div style={tabsContainerStyle}>
        <button 
          style={tabStyle(activeTab === 'tech')} 
          onClick={() => setActiveTab('tech')}
          className="hover:bg-blue-500"
        >
          科技
        </button>
        <button 
          style={tabStyle(activeTab === 'sports')} 
          onClick={() => setActiveTab('sports')}
          className="hover:bg-blue-500"
        >
          体育
        </button>
        <button 
          style={tabStyle(activeTab === 'finance')} 
          onClick={() => setActiveTab('finance')}
          className="hover:bg-blue-500"
        >
          财经
        </button>
      </div>

      {renderIssues(activeTab)}
    </div>
  );
};

export default CategorizedNewsletterPreview;