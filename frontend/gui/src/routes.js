import React from 'react';
import { Route } from 'react-router-dom';

import ArticleListView from './containers/ArticleListView';
import ArticleDetailView from './containers/ArticleDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleListView} />
        <Route exact path='/articles/:articleID' component={ArticleDetailView} />
    </div>
);

export default BaseRouter;