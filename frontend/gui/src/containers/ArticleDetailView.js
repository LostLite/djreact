import React from 'react';
import axios from 'axios';

import {Card} from 'antd';
//import { Link }  from 'react-router-dom'


class ArticleDetailView extends React.Component{

    state = {
        article:{}
    }

    //When component is mounted, fetch the data from server and then update the state
    //This method is called whenever the component is mounted
    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/articles/${articleID}/`)
            .then(response => {
                this.setState({
                    article: response.data
                })
            })
    }

    render(){
        return(
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}

export default ArticleDetailView;