import React from 'react';
import axios from 'axios'
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item

class ArticleEdit extends React.Component{

    state = {
        article:{}
    }
    
    //load component data
    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/articles/edit/${articleID}`)
            .then(response => {
                this.setState({
                    article: response.data
                })
            })
    }

    //Handle button submit
    handleSubmit = (e) => {
        e.preventDefault();
        const articleID = this.props.match.params.articleID;
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            axios.put(`http://127.0.0.1:8000/api/articles/edit/${articleID}`, values)
                .then(response => {
                  window.location = "/"
                })
          }
        });
    }

    //render the component
    render(){
        const { getFieldDecorator } = this.props.form;
        const { TextArea } = Input;
        return (
        <Form onSubmit={this.handleSubmit}>
            <FormItem
            label="Title"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            >
            {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input article title!' }],
                InitialValue: this.state.article.title,
            })(
                <Input/>
            )}
            </FormItem>
            <FormItem
            label="Content"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            >
            {getFieldDecorator('content', {
                rules: [{ required: true, message: 'Please input article content!' }],
                InitialValue: this.state.article.content,
            })(
                <TextArea rows={4} />
            )}
            </FormItem>
            <FormItem
            wrapperCol={{ span: 12, offset: 5 }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </FormItem>
        </Form>
        );
    }
}

const WrappedApp = Form.create()(ArticleEdit);

export default WrappedApp