import React, { useState } from 'react';
import { Tabs, message, Button, Form, Row, Col, Input, DatePicker, Cascader, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// Form1 Component
const Form1 = ({ onNext }) => {
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleUploadChange = ({ fileList }) => {
        setFileUploaded(fileList.length > 0);
    };

    const onFinish = (values) => {
        onNext(values);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div className='mt-[120px] mb-[20px]'>
            <Form layout="vertical" onFinish={onFinish} style={{ minWidth: 300 }}>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter your first name!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter your last name!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="Father Name" name="fatherName" rules={[{ required: true, message: 'Please enter your father’s name!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="CNIC" name="cnic" rules={[{ required: true, message: 'Please enter your CNIC!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item label="DOB" name="dob" rules={[{ required: true, message: 'Please select your date of birth!' }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your address!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item label="State/Province" name="stateProvince" rules={[{ required: true, message: 'Please select your state/province!' }]}>
                            <Cascader
                                options={[
                                    { value: 'punjab', label: 'Punjab' },
                                    { value: 'sindh', label: 'Sindh' },
                                    { value: 'khyber_pakhtunkhwa', label: 'Khyber Pakhtunkhwa' },
                                    { value: 'balochistan', label: 'Balochistan' },
                                    { value: 'gilgit_baltistan', label: 'Gilgit-Baltistan' },
                                    { value: 'islamabad', label: 'Islamabad Capital Territory' },
                                ]}
                                showSearch={{ filter: (inputValue, path) => path.some(option => option.label.toLowerCase().includes(inputValue.toLowerCase())) }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please select your city!' }]}>
                            <Cascader
                                options={[
                                    { value: 'karachi', label: 'Karachi' },
                                    { value: 'lahore', label: 'Lahore' },
                                    { value: 'rawalpindi', label: 'Rawalpindi' },
                                    { value: 'islamabad', label: 'Islamabad' },
                                    { value: 'faisalabad', label: 'Faisalabad' },
                                    { value: 'multan', label: 'Multan' },
                                    { value: 'peshawar', label: 'Peshawar' },
                                    { value: 'quetta', label: 'Quetta' },
                                    { value: 'sialkot', label: 'Sialkot' },
                                    { value: 'bahawalpur', label: 'Bahawalpur' },
                                ]}
                                showSearch={{ filter: (inputValue, path) => path.some(option => option.label.toLowerCase().includes(inputValue.toLowerCase())) }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="Postal Code" name="postalCode" rules={[{ required: true, message: 'Please enter your postal code!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item
                            label="Upload Image"
                            name="img"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            // rules={[{ required: true, message: 'Please upload your CV!' }]}
                        >
                            <Upload
                                action="/upload.do"
                                listType="picture-card"
                                onChange={handleUploadChange}
                            >
                                {!fileUploaded && (
                                    <div>
                                        <PlusOutlined />
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </div>
                                )}
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item className='text-right'>
                    <Button type="primary" htmlType="submit">Next</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

// Form2 Component
const Form2 = ({ onNext }) => {
    const onFinish = (values) => {
        onNext(values);
    };

    return (
        <div className='mt-[120px] mb-[20px]'>
            <Form layout="vertical" onFinish={onFinish} style={{ minWidth: 300 }}>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Matric Passing Year" name="matricPassingYear" rules={[{ required: true, message: 'Please Add Date!' }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Matric Marks" name="matricMarks" rules={[{ required: true, message: 'Please enter your Marks!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="School Name" name="school" rules={[{ required: true, message: 'Please enter your School name!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Inter Passing Year" name="interPassingYear" rules={[{ required: true, message: 'Please Add Date!' }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Inter Marks" name="interMarks" rules={[{ required: true, message: 'Please enter your Marks!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="College Name" name="college" rules={[{ required: true, message: 'Please enter your College name!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item label="Bachelor Passing Year" name="bachelorPassingYear" rules={[{ required: true, message: 'Please Add Date!' }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item label="GPA" name="gpa" rules={[{ required: true, message: 'Please enter your GPA!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item label="University Name" name="university" rules={[{ required: true, message: 'Please enter your University name!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item className='text-right'>
                    <Button type="primary" htmlType="submit">Next</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

// Form3 Component
const Form3 = ({ onSubmit }) => {
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleUploadChange = ({ fileList }) => {
        setFileUploaded(fileList.length > 0);
    };

    const onFinish = (values) => {
        onSubmit(values);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div className='mt-[120px] mb-[20px]'>
            <Form layout="vertical" onFinish={onFinish} style={{ minWidth: 300 }}>
                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item
                            label="Select Application"
                            name="application"
                            rules={[{ required: true, message: 'Please select an application!' }]}
                        >
                            <Cascader
                                options={[
                                    { value: 'application1', label: 'Application 1' },
                                    { value: 'application2', label: 'Application 2' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item
                            label="Previous Experience"
                            name="experience"
                            rules={[{ required: true, message: 'Please enter your Experience!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item
                            label="Company Name"
                            name="comName"
                            rules={[{ required: true, message: 'Please enter your Previous Company Name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item
                            label="Previous Salary"
                            name="salary"
                            rules={[{ required: true, message: 'Please enter your Salary!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item
                            label="Expected Salary"
                            name="newSalary"
                            rules={[{ required: true, message: 'Please enter your Expected Salary!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24}>
                        <Form.Item
                            label="Upload CV"
                            name="cv"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            // rules={[{ required: true, message: 'Please upload your CV!' }]}
                        >
                            <Upload
                                action="/upload.do"
                                listType="picture-card"
                                onChange={handleUploadChange}
                            >
                                {!fileUploaded && (
                                    <div>
                                        <PlusOutlined />
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </div>
                                )}
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item className='text-right'>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

// MultiStepForm Component
const MultiStepForm = () => {
    const [activeKey, setActiveKey] = useState("1");
    const [formData, setFormData] = useState({});

    const handleNext = (values) => {
        setFormData(prevData => ({ ...prevData, ...values }));
        const nextKey = (parseInt(activeKey) + 1).toString();
        setActiveKey(nextKey);
    };

    const handleSubmit = (values) => {
        const finalData = { ...formData, ...values };
        console.log("Final Data:", finalData);
        message.success('Application submitted successfully!');
    };

    return (
        <Tabs activeKey={activeKey} onChange={setActiveKey}>
            <Tabs.TabPane tab="Step 1" key="1">
                <Form1 onNext={handleNext} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Step 2" key="2">
                <Form2 onNext={handleNext} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Final Step" key="3">
                <Form3 onSubmit={handleSubmit} />
            </Tabs.TabPane>
        </Tabs>
    );
};

// Main App Component
const App = () => {
    return (
        <div>
            {/* <h1>Multi-Step Application Form</h1> */}
            <MultiStepForm />
        </div>
    );
};

export default App;
