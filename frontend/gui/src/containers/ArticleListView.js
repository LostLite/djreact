import React from 'react';
import axios from 'axios'
import ArticleList from '../components/ArticleList'

class ArticleListView extends React.Component{

    state = {
        articleList:[]
    }

    //When component is mounted, fetch the data from server and then update the state
    //This method is called whenever the component is mounted
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    articleList: response.data
                })
            })
    }

    render(){
        return(
            <ArticleList data={this.state.articleList}/>
        )
    }
}

export default ArticleListView;