import React, { useState } from 'react';
import { List, Tag, Divider } from 'antd';

const blogData = [
  {
    title: '人生2度目のフラスタを立てました',
    link: 'https://note.com/yuumal/n/n57d9b08b26f6',
    tags: ['趣味'],
  },
  {
    title: '個人サイトを作ってみました(執筆中)',
    link: 'hogehoge',
    tags: ['技術'],
  },
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  const filteredBlogs = selectedTag
    ? blogData.filter((blog) => blog.tags.includes(selectedTag)) : blogData;

  return (
    <div>
      <h2>Blog</h2>
      <h5 style={{ marginBottom : '5px'}}>タグを選択して絞り込みができます。</h5>
      <div style={{ marginBottom: '10px' }}>
        {Array.from(new Set(blogData.flatMap(blog => blog.tags))).map((tag) => (
          <Tag
            key={tag}
            color={selectedTag === tag ? 'blue' : 'default'}
            onClick={() => handleTagClick(tag)}
            style={{ cursor: 'pointer' }}>
            {tag}
          </Tag>
        ))}
      </div>
      <Divider style={{marginBottom: '0px'}}></Divider>
      <List
        itemLayout="horizontal"
        dataSource={filteredBlogs}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <>
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                    {item.title}
                  </a>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Blog;