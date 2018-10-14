import React from 'react';
import axios from 'axios'
import ArticleList from '../components/ArticleList';
import CustomForm from '../components/Form';
import { Row, Col } from 'antd';

class ArticleListView extends React.Component {

    state = {
        articleList: []
    }

    //When component is mounted, fetch the data from server and then update the state
    //This method is called whenever the component is mounted
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/articles/')
            .then(response => {
                this.setState({
                    articleList: response.data
                })
            })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <h2>Add new article</h2>
                        <CustomForm
                            requestType="post"
                            btnText="Create"
                            articleID={null}
                            title={null}
                            content={null} />
                    </Col>
                </Row>
                <br /><hr />
                <ArticleList data={this.state.articleList} />
            </div>
        )
    }
}

export default ArticleListView;