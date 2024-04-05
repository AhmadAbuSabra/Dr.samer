import React, { useState } from 'react';
import { Button, Col, ListGroup, Row, Form } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


export default function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('post');
    const dataToSend = {
      name,
      phone,
      email,
      status: 'جديد',
      description,
    };

    try {
      console.log('try');
       toast.success('تم ارسال الطلب'); // Uncomment when toast is properly set up
      const response = await fetch('/api/postRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Response OK');
        router.push('/');
        // Handle successful POST result (e.g., updating state, showing success message)
      } else {
        console.log('Response Error', data);
        // Handle response error (e.g., showing error message)
      }
      console.log(data); // Process the response data as needed
    } catch (error) {
      console.error('Error while submitting:', error);
      // Handle submission error (e.g., showing error message)
    }
  };

  return (
    <>
      <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={2000} hideProgressBar={false} />

    <div className="py-4 px-3 contacts-form shadow-sm">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>الاسم</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>البريد الالكتروني</Form.Label>
          <Form.Control
            type="email"
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>وصف الحالة</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="secondary"
          
          type="submit"
          className="w-100 mt-3 text-uppercase"
          style={{backgroundColor:'#353929',
          color: '#ffffff',}}
        >
          ارسال
        </Button>
      </Form>
      <hr className="mt-4" />
      <div>
        <h6 style={{ textAlign: 'center' }} className="mb-3 mt-2">معلومات التواصل</h6>
        <ListGroup horizontal="md">
          <ListGroup.Item style={{ marginLeft: '40px' }} className="border-0 bg-transparent p-0 mb-3 me-5 d-flex align-items-center">
            <span className="ti-mobile me-3 font-weight-bold" />
            <p className="d-inline-block p-0 m-0 text-info text">
              790922204 00962
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 bg-transparent p-0">
            <span className="ti-email me-3 font-weight-bold" />
            <span className="text-info">azizpainclinic@gmail.com</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
    </>
  );
}
