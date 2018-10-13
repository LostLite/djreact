import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { Link }  from 'react-router-dom'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ArticleList = (props) =>{
    return (
        <div>
            <Link to="articles/create" type="primary" icon="plus" size="large">Add Article</Link>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 10,
                }}
                dataSource={props.data}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={`articles/${item.id}`}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />
        </div>
    );
}

export default ArticleList;