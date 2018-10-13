import React from 'react';
import {Route} from 'react-router-dom';

import ArticleListView from './containers/ArticleListView';
import ArticleCreateView from './containers/ArticleCreateView';
import ArticleDetailView from './containers/ArticleDetailView';
import ArticleEditView from './containers/ArticleEditView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleListView}/>
        <Route exact path='/articles/create/' component={ArticleCreateView}/>
        <Route exact path='/articles/:articleID' component={ArticleDetailView}/>
        <Route exact path='/articles/edit/:articleID' component={ArticleEditView}/>
    </div>
);

export default BaseRouter;