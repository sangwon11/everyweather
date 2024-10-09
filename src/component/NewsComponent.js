import axios from 'axios';
import { useEffect, useState } from 'react';
import './NewsComponent.css';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;  // .env에서 API 키 가져오기

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('business');  // 기본 카테고리를 'business'로 설정

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines`,
          {
            params: {
              category: category,  // 선택된 카테고리를 요청에 포함
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
  }, [category]);  // 카테고리가 변경될 때마다 뉴스 다시 가져오기

  return (
    <div className='news-container'>
      <h1>Top News</h1>

      {/* 카테고리 선택 드롭다운 */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
        <option value="entertainment">Entertainment</option>
        <option value="science">Science</option>
      </select>

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
