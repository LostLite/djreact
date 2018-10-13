import React from 'react';
import Article from '../components/ArticleCreate'

class ArticleCreateView extends React.Component{

    state = {
        article:{}
    }

    render(){
        return(
            <Article/>
        )
    }
}

export default ArticleCreateView;