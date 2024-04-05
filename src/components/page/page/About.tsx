import React from 'react';
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Image from 'next/image';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Footer from '@/components/footer/Footer';
import BenefitsWidget from '@/components/section/sidebar/BenefitsWidget';
import PostsListWidget from '@/components/section/sidebar/PostsListWidget';
import PostsListExpanded from '@/components/section/sidebar/PostsListExpanded';
import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import {
  latestArticles,
  popularArticles,
  projects,
} from '@/resources/demo-data';
import AsideTitle from '@/components/section/sidebar/AsideTitle';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function About() {

  const router = useRouter();

  const navigate = () => {
      router.push('http://localhost:3001/contacts?showComponent=1');
  };

  const frontend = [
    { name: 'React + Redux', value: 75 },
    { name: 'TypeScript', value: 70 },
    { name: 'HTML5', value: 80 },
    { name: 'CSS3', value: 80 },
    { name: 'JavaScript (ES6)', value: 75 },
    { name: 'jQuery', value: 70 },
    { name: 'Bootstrap 4', value: 80 },
  ];

  const backend = [
    { name: 'TypeScript', value: 70 },
    { name: 'Node Js', value: 70 },
    { name: 'Express.js', value: 80 },
    { name: 'MySQL', value: 70 },
    { name: 'Mongo', value: 70 },
    { name: 'OOP / Design Patterns', value: 60 },
  ];

  return (
    <>
      {/* <InnerPageHeader headline="About">
      
      </InnerPageHeader> */}

      <section className="my-5">
        <Container>
          <Row>
          <Col lg={4}>
          <div className="shadow-sm bg-white">
          <Image
                  width='100%'
                  height={100}
                  layout="responsive"
                  src="/images/annie-spratt-AkftcHujUmk-unsplash-resize.png"
                  objectFit="contain"
                  loading="lazy"
                />
             
               
</div>
<Button             onClick={navigate}
 style={{ 
                backgroundColor: '#353929', 
                color: '#ffffff', 
                borderColor: '#353929', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                marginTop:'10px',
                fontWeight: 'bold',
                display: 'inline-block', // Set display to inline-block
                width:'100%'
            }} >
        
                احجز موعدك الآن
            </Button>
          </Col>
            <Col lg={8}>
              <div className="shadow-sm bg-white">
              
                <div className="px-3 py-3">
                  <p>
                  الدكتور سامر عبدالعزيز ، حاصل على البورد الأمريكي في طب الألم و البورد الأمريكي في التخدير ، أتـمّ تخصصه في التخدير في جامعة اركنساس في الولايات المتحدة الأمريكية و من بعدها اتم تخصصه في طب الألم في جامعة ويسكنسن في الولايات المتحدة الأمريكية. عمل بعدها في طب الألم و هو حاليا رئيس قسم التخدير و طب الألم في ألمستد ميديكال سنتر في امريكا .

                  </p>
                  <p>
                  قبل تخصصه في التخدير و طب الألم عمل د. سامر في مجال الأبحاث العلمية في جامعة هارفرد في امريكا ، حيث ان له أبحاث في مجال التحفيز العصبي منها ما هو منشور في مجلات علمية عريقة (انظر قسم الابحاث). 
                  </p>
                  <p>
                  لدكتور سامر عبدالعزيز مختص في علاج حالات الألم عن طريق التداخلات المحدودة تحت الأشعة و ذلك باستخدام الإبر بدون جراحة. له اهتمام خاص بالعلاج بتقنية التردد الحراري لكيّ الأعصاب (Radio Frequency Ablation)   و تقنية التحفيز الكهربائي للنخاع الشوكي(Spinal cord stimulation)

                  </p>
                  <p>
                  بعيداً عن طب الألم ، د. سامر له نشاطات دعوية ، و يحب ممارسة الرياضة بأنواعها و قضاء الوقت مع عائلته .

                  </p>
                  <p>
                  يهدف  د سامر الى تخفيف الام مرضاه، ليزداد نشاطهم و قدرتهم على  انجاز ما يتطلعون له في حياتهم

                  </p>
                  <h4>الأبحاث :</h4>
                 
<p>
أبحاث الدكتور سامر عبد العزيز و منشوراته العلمية

</p>
<p>
الفصول في الكتب:
</p>
<p style={{ textAlign: 'left' }}>
Book: Principles and Practice of Hospital Medicine, 2nd edition. Chapter: Pain. Samer Abdel-Aziz and Meredith Adams.12/2016 
</p>
<p style={{ textAlign: 'left' }}>
Book: Essentials of Pain Medicine, 4th edition. 
Chapter: Postural Puncture Headache and Spontaneous Intracranial Hypotension. Samer Abdel-Aziz, Honorio Benzon and Robert Hurley. 12/2017 
</p>
<p>
الأوراق في المجلات و المؤتمرات العلمية:
</p>
<p style={{ textAlign: 'left' }}>
Temporally Coordinated Deep Brain Stimulation in the Dorsal and Ventral Striatum Synergistically Enhances Associative Learning. Husam Katnani, Shaun Patel, Churl Kwon, Samer Abdel-Aziz, John Gale, Emad Eskandar. Publication, Nature Scientific Reports 01/2016. Vol 6. Article number: 18806 
</p>
<p style={{ textAlign: 'left' }}>
Cervical Spinal Cord Stimulation for the Management of Pain from Brachial Plexus Avulsion. Samer Abdel-Aziz, Ahmed Ghaleb. Publication, Pain Medicine Journal 04/2014. Vol 15. Issue 4. P:712-714. 

</p>
<p style={{ textAlign: 'left' }}>
Change in Impedance with Change in Posture During Spinal Cord Stimulator Placement. Samer Abdel-Aziz, Ahmed Ghaleb. Publication, Pain Studies and Treatment Journal 04/2014. Vol 2. No 2. P:70-72 
</p>
<p style={{ textAlign: 'left' }}>Combined Sacral Nerve Roots Stimulation and Low Thoracic Spinal Cord Stimulation for the Treatment of Chronic Pelvic Pain. Samer Abdel-Aziz, Ahmed Ghaleb. Publication, Pain Studies and Treatment Journal 04/2014. Vol 2. No 2. P:86-90. 
</p>
<p style={{ textAlign: 'left' }}>Methemoglobinemia With the Use of Benzocaine Spray for Awake Fiberoptic Intubation. Samer Abdel-Aziz, Nazish Hashmi, Sabina Khan, Mohamed Ismaeil. Publication, Middle East Journal of Anesthesiology 10/2013. Vol 22. No 3. 
</p>
<p style={{ textAlign: 'left' }}>
Electrolyte Disturbances in Neurosurgical Patients: Essentials for Anesthesiologists. Samer Abdel-Aziz, Esamelden Abdelnaem, Sushma Thapa, Yasser Salem, Mohamed Ismaeil. Publication, Contemporary Neurosurgery 08/2013. Vol 35. No.17. 

</p>
<p style={{ textAlign: 'left' }}>
Anaphylactoid Shock with Infusion of 5% Albumin in a Patient under General Anesthesia. Samer Abdel-Aziz, Esamelden Abdelnaem, Neeraj Kumar, Mohamed Ismaeil. Publication, Open Journal of Anesthesiology11/2012.Vol2 No.5 

</p>
<p style={{ textAlign: 'left' }}> 
Anesthetic Management of a Patient With Intermittent Wolf Parkinson White Syndrome. Samer Abdel-Aziz, Thea Rosenbaum. Poster, ASA (10/2013) 

</p>
<p style={{ textAlign: 'left' }}>
Prolonged Effect of Non-Depolarizing Muscle Relaxants in a Patient with Multiple Sclerosis. Samer Abdel-Aziz, Mathew Spond. Poster, PGA (12/2012). 

</p>
<p style={{ textAlign: 'left' }}>
Anesthetic Management for Carotid Body Tumor Excision in a Patient with Bilateral Carotid Body Tumors. Samer Abdel-Aziz, Mohamed Ismaeil. Poster, PGA (11/2012) 

</p>
<p style={{ textAlign: 'left' }}>
Selective enhancement of associative learning by microstimulation of the anterior striatum. Churl Su Kwon, Shaun Patel, Samer Abdel-Aziz, John Gale, Emad Eskandar. Poster, Neuroscience (11/2011). 

</p>
<p style={{ textAlign: 'left' }}>
Deep brain stimulation of the nucleus accumbens facilitates behavioral performance. John Gale, Clarissa Martinez-Rubio, Scott Arfin, Samer Abdel-Aziz, Robert Sarpeshkar, Emad Eskandar. Poster, Neuroscience (11/2010) 

</p>
<p style={{ textAlign: 'left' }}>
The Role of Beta-Band Activity in the Normal Primate Basal Ganglia, Shaun Patel, Samer Abdel-Aziz, Sameer Sheth, Emad Eskandar, John Gale. Poster, The Congress of Neurological Surgeons Annual Meeting (10/2010) 

</p>
<p style={{ textAlign: 'left' }}>Dynamic Control of Motivation Using Deep Brain Stimulation, John Gale, Clarissa Martinez-Rubio, Samer Abdel-Aziz, Emad Eskandar. Poster, The 63rd annual meeting of the MGH scientific committee (02/2010)
</p>
              
                </div>
              </div>
            </Col>
          
           
        
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
