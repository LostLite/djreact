import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;
const { TextArea } = Input;

class CustomForm extends React.Component {
    state = {
        content: this.props.content
    }
    handleFormSubmit = (event, requestType, articleID) => {
        //prevent form from submitting and causing the page to reload
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {
            case 'post':
                //submit create details
                return axios.post('http://127.0.0.1:8000/api/articles/', { title: title, content: content })
                    .then(response => {
                        window.location = "";
                    })
                    .catch(err => console.error(err));
            case 'put':
                //submit edit form details
                return axios.put(`http://127.0.0.1:8000/api/articles/${articleID}/`, { title: title, content: content })
                    .then(response => {
                        window.location = "";
                    })
                    .catch(err => console.error(err));
            default:
                break;
        }
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
                <FormItem label="Title">
                    <Input name="title" placeholder="Put title here..." defaultValue={this.props.title} />
                </FormItem>
                <FormItem label="Content">
                    <TextArea name="content" rows={4} placeholder="Put content here..." defaultValue={this.state.content} />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        {this.props.btnText}
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default CustomForm;