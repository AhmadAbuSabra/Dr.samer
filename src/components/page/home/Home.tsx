import React ,{useState,useRef } from 'react';

import { Badge, Button, Card, Col, Container, Row,Form } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import HomeHeader from '@/components/header/HomeHeader';
import Footer from '@/components/footer/Footer';
import { feedback, latestArticles } from '@/resources/demo-data';

import SimpleTestimonials from '@/components/section/testimonials/SimpleTestimonials';
import Testimonial from '@/components/section/testimonials/Testimonial';
import Benefits from '@/components/section/blurps/Benefits';
import SnippetCard from '@/components/section/snippets/SnippetCard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import YoutubeVideo from '@/pages/YoutubeVideo';
import LatestBlogPosts from '@/pages/LatestBlogPosts';
import PainDiagram from '@/pages/PainDiagram';


export default function Home() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const targetRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async () => {
    console.log('post')
    const dataToSend = {
      name,
      phone,
      email,
      status: 'جديد',
      description
    };

    try {
      console.log('try')
      toast.success(' تم ارسال الطلب');
        const response = await fetch('/api/postRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        const data = await response.json();
        if (response.ok) {
         
          // Handle successful POST result (e.g., updating state)
        } 
        console.log(data); // Process the response data as needed
    } catch (error) {
        console.error('Error while submitting:', error);
    }
};

  return (
    <>
       <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={2000} hideProgressBar={false} />

      <HomeHeader targetRef={targetRef} />
      <Benefits className="header-blurp" />
      <section className="my-5">
        <Container>
          {/* <Row>
            <Col>
              <h2 className="h4 text-uppercase d-flex flex-column align-items-center mb-5">
                <span className="mr-2 ti-comments-smiley mb-2 font-weight-bold text-danger" />
                دعني أقدم نفسي
              </h2>
            </Col>
          </Row> */}
          <Row className="gx-0">
            <Col lg={6}>
              {/* <Image
                layout="responsive"
                src="/images/annie-spratt-AkftcHujUmk-unsplash-resize.jpg"
                className="d-block flex-grow-0"
                objectFit="cover"
                loading="lazy"
                width={1920}
                height={1920}
                alt="Freelance Web Developer"
              /> */}
                <div>
      <h1>  تعرّف على الدكتور سامر عبدالعزيز </h1>
      <YoutubeVideo
        videoSrcURL="https://www.youtube.com/embed/weC6HrZF2cY"
        videoTitle="My Favorite Video"
      />
    </div>
            </Col>
            <Col lg={6}>
              <Card className="d-flex justify-content-start border-0 bg-transparent">
                <Card.Body className="flex-grow-0 px-4 ">

                  <Card.Text>الدكتور سامر عبدالعزيز ، حاصل على البورد الأمريكي في طب الألم و البورد الأمريكي في التخدير ، أتـمّ تخصصه في التخدير في جامعة اركنساس في الولايات المتحدة الأمريكية و من بعدها اتم تخصصه في طب الألم في جامعة ويسكنسن في الولايات المتحدة الأمريكية. عمل بعدها في طب الألم و هو حاليا رئيس قسم التخدير و طب الألم في ألمستد ميديكال سنتر في امريكا .

قبل تخصصه في التخدير و طب الألم عمل د. سامر في مجال الأبحاث العلمية في جامعة هارفرد في امريكا ، حيث ان له أبحاث في مجال التحفيز العصبي منها ما هو منشور في مجلات علمية عريقة (انظر قسم الابحاث). 

                  </Card.Text>

                  <Card.Text>
                  الدكتور سامر عبدالعزيز مختص في علاج حالات الألم عن طريق التداخلات المحدودة تحت الأشعة و ذلك باستخدام الإبر بدون جراحة. له اهتمام خاص بالعلاج بتقنية التردد الحراري لكيّ الأعصاب (Radio Frequency Ablation)   و تقنية التحفيز الكهربائي للنخاع الشوكي(Spinal cord stimulation)
                  </Card.Text>

                  <Card.Text>
                  بعيداً عن طب الألم ، د. سامر له نشاطات دعوية ، و يحب ممارسة الرياضة بأنواعها و قضاء الوقت مع عائلته .
                  </Card.Text>
                  <Card.Text>
                  يهدف  د سامر الى تخفيف الام مرضاه، ليزداد نشاطهم و قدرتهم على  انجاز ما يتطلعون له في حياتهم
                  </Card.Text>
                  {/* <Card.Text>
                    <small className="font-italic">
                      Note: The pic is a stock photo and this is a demo text
                    </small>
                  </Card.Text> */}
                  <Link href="/about">
                  <Button
  href="/about"
  style={{ backgroundColor: '#353929', color: '#ffffff', borderColor: '#353929', borderWidth: '1px', borderStyle: 'solid', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}
  className="text-uppercase fw-bold"
>
  تعرف على المزيد
</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row />
        </Container>
      </section>
      <Row>
            <PainDiagram />
       
          </Row>
      <section className="coming-soon">
        <div ref={targetRef} className="container py-5">
          <div className="row align-items-center justify-content-center pb-5">
          <div className="col-md-10">
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label style={{ color: '#ffffff' }}>الاسم</Form.Label>
            <Form.Control type="text"  
                value={name} 
                onChange={e => setName(e.target.value)} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label style={{ color: '#ffffff' }}>
        رقم الهاتف
            </Form.Label>
            <Form.Control type="text" 
               value={phone} 
               onChange={e => setPhone(e.target.value)} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: '#ffffff' }}>البريد الالكتروني</Form.Label>
            <Form.Control type="email" 
               value={email} 
               onChange={e => setEmail(e.target.value)} 
                />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label style={{ color: '#ffffff' }}>وصف الحالة</Form.Label>
            <Form.Control as="textarea" rows={3} 
                           value={description} 
                           onChange={e => setDescription(e.target.value)} 
            />
        </Form.Group>

        {/* <Button style={{ backgroundColor: '#353929',display: 'inline-block', color: '#ffffff', width: 'auto', borderColor: '#353929', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }} type="submit">
            ارسال
        </Button> */}
          <Button style={{ 
                backgroundColor: '#353929', 
                color: '#ffffff', 
                borderColor: '#353929', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                fontWeight: 'bold',
                display: 'inline-block', // Set display to inline-block
                width:'100%'
            }} type="submit">
                ارسال
            </Button>
    </Form>
</div>

            {/* <div className="col-md-4">
    <Card className="text-center" style={{ height: '400px' }}>
        <Card.Body>
            <Card.Title>تواصل معنا</Card.Title>
            <Card.Text>
            يمكنك استشارة د. سامر عبد العزيز اون لاين من بيتك في أي مكان في العالم دون الحاجة للقدوم الى عيادتنا 

               </Card.Text>
               - قم بتعبئة الطلب في الأسفل 

               <Card.Text>
               - سنقوم بالتواصل معك لحجز موعد اون لاين حيث ستقابل د. سامر عبر منصة Zoom  و سيقوم بالتحدث معك و مراجعة صور الأشعة و اعطاءك توصيته بالعلاج المناسب 

               </Card.Text>
               <Card.Text>
               - لن نقوم بإعطاءك وصفة طبية للدواء اذا كنت خارج الأردن ولكن نعطيك توصية بالعلاج المناسب و إسم الدواء، اذا كان هناك حاجة لإجراء تداخلي ستحتاج الى القدوم الى عيادتنا لإجرائه.
               </Card.Text>
        </Card.Body>
    </Card>
</div> */}
          </div>
        </div>
        {/* {feedback && (
          <SimpleTestimonials className="pt-5 bg-white shadow-sm">
            {feedback.map(({ photo, text, author }) => (
              <Testimonial
                key={author}
                photo={photo}
                feedback={text}
                author={author}
              />
            ))}
          </SimpleTestimonials>
        )} */}
      </section>

      <section className="my-5">
        <Container>
          {/* <Row>
            <Col>
              <h2 className="h4 text-uppercase d-flex flex-column align-items-center mb-5">
                <span className="mr-2 ti-pin-alt mb-2 font-weight-bold text-danger" />
                حالات الألم 
              </h2>
            </Col>
          </Row> */}
     
        </Container>
      </section>

      <Footer />
    </>
  );
}
