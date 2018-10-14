import React from 'react';
import axios from 'axios';

import { Button, Row, Col, Card } from 'antd';
import CustomForm from '../components/Form';


class ArticleDetailView extends React.Component {

    state = {
        article: {}
    }

    //When component is mounted, fetch the data from server and then update the state
    //This method is called whenever the component is mounted
    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/articles/${articleID}/`)
            .then(response => {
                this.setState({
                    article: response.data
                })
            })
    }

    handleDelete = (event) => {
        //delete article
        axios.delete(`http://127.0.0.1:8000/api/articles/${this.props.match.params.articleID}/`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card title={this.state.article.title}>
                            <p>{this.state.article.content}</p>
                        </Card>
                    </Col>
                    <Col span={12} style={{ padding: '20px' }}>
                        <h2>Edit Article</h2>
                        <CustomForm
                            requestType="put"
                            btnText="Save"
                            articleID={this.props.match.params.articleID}
                            title={this.state.article.title}
                            content={this.state.article.content} />
                        <form onSubmit={this.handleDelete}><Button type="danger" htmlType="submit" >Delete</Button></form>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ArticleDetailView;