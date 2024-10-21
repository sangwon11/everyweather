import axios from 'axios';
import { useEffect, useState } from 'react';
import './NewsComponent.css';

const API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('경제');  // 기본 검색어를 'technology'로 설정

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.currentsapi.services/v1/latest-news`,  // Currents API 엔드포인트
          {
            params: {
              apiKey: API_KEY,  // API 키 포함
              language: 'ko',  // 뉴스 언어 설정
              category: query,  // 검색어에 맞는 카테고리 (예: technology, sports, business)
            },
          }
        );
        setArticles(response.data.news);  // 응답 데이터의 뉴스 기사 목록 저장
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [query]);

  return (
    <div className='news-container'>
      <h1>Search News</h1>

      {/* 검색어 입력 필드 */}
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="검색어를 입력하세요"
      />

      <ul>
        {articles.map((article, index) => (
          <li className='news-background' key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;

