import React from 'react';
import { render } from 'react-dom';

import {
    Row,
    Col,
    Button
} from 'antd'

import 'antd/dist/antd.less'

class App extends React.Component{

    render(){
        return(
            <div>
                <Row>
                    <Col span={10}>dsfs</Col>
                    <Col span={10}>dsaf</Col>
                    <Button type="primary">Primary</Button>
                </Row>
            </div>
        )  
    }
}

export default App