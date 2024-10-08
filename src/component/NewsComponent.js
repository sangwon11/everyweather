import axios from 'axios';
import { useEffect, useState } from 'react';
import './NewsComponent.css';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;  // .env에서 API 키 가져오기

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines`,
          {
            params: {
              country: 'us',  // 원하는 국가 설정 (예: 'kr'은 한국)
              category: 'sports',  // 카테고리 설정 (예: 'technology', 'sports' 등)
              apiKey: API_KEY,  // API 키 포함
            },
          }
        );
        setArticles(response.data.articles);  // 응답 데이터의 기사 목록 저장
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='news-container'>
      <h1>Top News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {article.urlToImage && <img src={article.urlToImage} width={500} alt={article.title} />} {/* 이미지 표시 */}
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
