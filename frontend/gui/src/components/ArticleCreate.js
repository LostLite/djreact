import React from 'react'
import axios from 'axios'
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class ArticleCreate extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('http://127.0.0.1:8000/api/articles/create/', values)
          .then(response => {
            window.location = "/"
          })
      }
    });
  }

  render() {
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
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Content"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Please input article content!' }],
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

const WrappedApp = Form.create()(ArticleCreate);

export default WrappedApp