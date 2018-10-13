import React from 'react';
import Article from '../components/ArticleEdit'

class ArticleEditView extends React.Component{

    state = {
        article:{}
    }

    render(){
        return(
            <Article/>
        )
    }
}

export default ArticleEditView;