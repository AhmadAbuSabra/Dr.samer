// pages/HipPainInfoPage.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import { IoMdCheckmark } from "react-icons/io";
import { useRouter } from 'next/router';


const InterventionalProcedures: React.FC = () => {
  // State to handle hover effect
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '1200px',
      margin: 'auto',
      padding: '80px',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start', // Align items to the start of the flex container
      justifyContent: 'center', // Center items horizontally
      gap: '100px', // Spacing between columns
    },
    imageContainer: {
      maxWidth: '30%', // Limiting the size to 30% of the parent
    },
    image: {
      width: '100%', // Make image responsive to container width
      height: 'auto', // Keep aspect ratio of image
    },
    textContainer: {
      flex: '1', // Take up remaining space
      maxWidth: '70%', // Limiting the size to 70% of the parent
      textAlign: 'left', // Align text to the left
      marginTop:'10px',
    },
    title: {
      fontSize: '34px',
      fontWeight: 'bold',
      color: '#353929',
      marginBottom: '0.5em',
      textAlign:'center'
    },
    subtitle: {
      fontSize: '18px',
      color: '#666',
      marginBottom: '1em',
    },
    button: {
      backgroundColor: isButtonHovered ? '#4e503b' : '#353929', // Change color on hover
      color: 'white',
      padding: '10px 20px',
      fontSize: '18px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
  
    },
    description: {
      marginTop: '2em', // Space between button and description
      fontSize: '20px',
      textAlign: 'right', // Align text to the right for RTL languages
      direction: 'rtl', // Right-to-left text direction
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      direction: 'rtl', // Added for RTL table text direction
    },
    tableRow: {
      borderBottom: '1px solid #ddd',
    },
    tableCell: {
      padding: '8px',
      textAlign: 'right', // Align text to the right for RTL languages
      direction: 'rtl', // Right-to-left text direction
    },
    tableHeader: {
      fontWeight: 'bold',
      backgroundColor: '#353929', // Light grey background for header
      color:'#fff',
      textAlign: 'right', // Align text to the right for RTL languages
      direction: 'rtl', // Right-to-left text direction

    },
  };
  const router = useRouter();

  // Function to handle routing
  const handleNavigate = () => {
    router.push('/contacts?showComponent=2'); // Replace '/your-target-path' with the actual path you want to route to
  };


  return (
    <div style={styles.container}>
      <Head>
        <title>Leg Pain Information</title>
        <meta name="description" content="Learn about hip pain causes and treatments" />
      </Head>

      <main>
        <div style={styles.row}>
          <div style={styles.textContainer}>
            <div style={{...styles.title}}>  الإجراءات التداخلية  </div>
          
            <button
              style={styles.button}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onClick={handleNavigate} // Adding the onClick event handler

            >
             احجز موعدك الآن
            </button>
          </div>
          <div style={styles.imageContainer}>
            {/* <img src="/images/leg-pain-treatment.svg" alt="Hip Pain Diagram" style={styles.image} /> */}
          </div>
        </div>

        <p style={styles.description}>
        - نقوم في عيادتنا بإجراءات تداخلية محدودة تحت الأشعة لعلاج الألم . 

        </p>
        <p style={styles.description}>
        - نحن معتمدون لدى الكثير من شركات التأمين في الأردن و نحرص على تغطية تكلفة الإجراء من التأمين إن أمكن. 

        </p>
<p style={styles.description}>
- المرضى الذين ليس لديهم تأمين يغطي تكلفة الإجراء، يمكنهم الدفع بشكل مباشر حسب الأسعار الموضحة في الأسفل. 

</p>
<p style={styles.description}>
- أصحاب الدخل المحدود يدفعون حسب قدرتهم، فنحن نحرص على أن لا يخرج أي مريض من عندنا خائباً، فهدفنا تخفيف آلامكم ليزداد نشاطكم. 

</p>
      
    <p style={styles.description}>
    الإجراءات التداخلية لعلاج آلام الظهر 
    </p>
    <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>الإجراء</th>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>التكلفة*</th>
            </tr>
          </thead>
          <tbody>
          <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              التردد الحراري  لعلاج الألم الصادرمن مفاصل العمود الفقري (Facet Joints)   
(Lumbar Radiofrequency Ablation)
   

</td>
              <td style={styles.tableCell}></td>
            </tr>

          <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن المفصل العجزي بالكورتيزون 
(Sacroiliac Joint Steroid Injection)


</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              التردد الحراري لعلاج الألم الصادر من الجزء الخلفي من المفصل العجزي
(Sacroiliac Joint Radiofrequency Ablation)



</td>
              <td style={styles.tableCell}></td>
            </tr>

            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن الكورتيزون حول النخاع الشوكي لعلاج الألم الناتج عن تضيق قناة العمود الفقري 
(Lumbar Epidural Steroid Injection)

</td>
              <td style={styles.tableCell}></td>
            </tr>
          
            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              زراعة جهاز التحفيز الكهربائي للنخاع الشوكي
                                          <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Spinal Cord Stimulator Trial)</li>
  <li>-	زراعة الجهاز بشكل دائم (Spinal Cord Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>



        <p style={styles.description}>
        الإجراءات التداخلية لعلاج آلام الرقبة و الذراع و الرأس و الوجه
            </p>
    <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>الإجراء</th>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>التكلفة*</th>
            </tr>
          </thead>
          <tbody>
          <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              التردد الحراري لعلاج الألم الصادر من مفاصل الرقبة 
(Cervical Radiofrequency Ablation)

</td>
              <td style={styles.tableCell}></td>
            </tr>

          <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن الكورتيزون حول النخاع الشوكي لعلاج آلام الذراع الناتجة عن ديسك أو تضيق في الرقبة  
(Cervical Epidural Steroid Injection)

</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن الأعصاب في مؤخرة الرأس 
(Occipital Nerve Block)

</td>
              <td style={styles.tableCell}></td>
            </tr>

            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن البوتكس لعلاج ألم الشقيقة المزمنة  
(Botox Injections PREEMPT Protocol)

</td>
              <td style={styles.tableCell}></td>
            </tr>

            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن العصب الخامس لعلاج ألم العصب الخامس 
(Trigeminal Nerve Block)

</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              لعلاج آلام الوجه و الرأس غير التقليديةSphenopalatine Block  

</td>
              <td style={styles.tableCell}></td>
            </tr>
            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              زراعة جهاز التحفيز الكهربائي للنخاع الشوكي لعلاج آلام اليد الناتجة عن تلف الأعصاب أو الخلل في عملها
(Cervical Spinal Cord Stimulation to Treat Complex Regional Pain Syndrome or Neuropathic Upper Extremity Pain)

                                          <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Spinal Cord Stimulator Trial)</li>
  <li>-	زراعة الجهاز بشكل دائم (Spinal Cord Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>


        <p style={styles.description}>
	 الإجراءات التداخلية التي نقوم بها في العيادة لعلاج آلام الساق 
</p>
    <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>الإجراء</th>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>التكلفة*</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      		حقن الكورتيزون حول جذر العصب أو النخاع الشوكي لعلاج ألم عرق النسا 
(Lumbar Epidural Steroid Injection)
</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>			    	حقن العصب المسؤول عن الإحساس بالجزء الجانبي من الفخذ لعلاج Meralgia Paresthetica
(Lateral Femoral Cutaneous Nerve Block)
 
</td>
              <td style={styles.tableCell}></td>
            </tr>
            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              زراعة جهاز التحفيز الكهربائي للنخاع الشوكي  لعلاج آلام القدم السكرية أو آلام الساق العصبية المزمنة الناتجة عن تلف في الأعصاب أو بعد الجراحة
                            <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Spinal Cord Stimulator Trial)</li>
  <li>- 	زراعة الجهاز بشكل دائم (Spinal Cord Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>



        <p style={styles.description}>
        الإجراءات التداخلية لعلاج آلام الركبة 
        </p>
    <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>الإجراء</th>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>التكلفة*</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      		
              حقن الكورتيزون في مفصل الركبة بدقة تحت الأشعة
(Knee steroid injection)


</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>			    	
              حقن المادة الهلامية في مفصل الركبة بدقة تحت الأشعة  
(Viscosupplementation Knee Injection)

 
</td>
              <td style={styles.tableCell}></td>
            </tr>

            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>			    	
              حقن المادة الهلامية و الكورتيزون في مفصل الركبة بدقة تحت الأشعة  
(Viscosupplementation + Steroid Knee Injection)

 
</td>
              <td style={styles.tableCell}></td>
            </tr>


            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>			    	
              التردد الحراري لإتلاف بعض الأعصاب المسؤولة عن الإحساس بالركبة 
(Genicular Nerves Radiofrequency Ablation)

</td>
              <td style={styles.tableCell}></td>
            </tr>
            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      

              التحفيز الكهربائي لعلاج ألم الركبة بعد تبديل مفصل الركبة 
                                          <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Spinal Cord Stimulator Trial)</li>
  <li>-	زراعة الجهاز بشكل دائم (Spinal Cord Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>


        <p style={styles.description}>
        الإجراءات التداخلية لعلاج آلام الورك
        </p>
    <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>الإجراء</th>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>التكلفة*</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      		
              حقن الكورتيزون في مفصل الورك بدقة تحت الأشعة
              <ul>
  <li>-	(Intra-articular Hip Steroid Injection)</li>
  <li>-	(Trochanteric Bursa Steroid Injection)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>			    	
              التردد الحراري لإتلاف بعض الأعصاب المسؤولة عن الإحساس بمفصل الورك 
(Radiofrequency Ablation of the Articular Branches of the Femoral and Obturator Nerves)

</td>
              <td style={styles.tableCell}></td>
            </tr>


            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      

              التحفيز الكهربائي لعلاج ألم الورك بعد تبديل مفصل الورك 
              
                                                        <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Spinal Cord Stimulator Trial)</li>
  <li>-	زراعة الجهاز بشكل دائم (Spinal Cord Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>

        <p style={styles.description}>
        الإجراءات التداخلية لعلاج آلام الكتف

        </p>
    <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>الإجراء</th>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>التكلفة*</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      		
              حقن الكورتيزون في مفصل الكتف بدقة تحت الأشعة
(Intra-articular Shoulder Steroid Injection)

</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>			    	
              حقن العصب في الكتف
(Suprascapular Nerve Injection)


</td>
              <td style={styles.tableCell}></td>
            </tr>


            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      

              التحفيز الكهربائي للعصب في الكتف (Peripheral Nerve Stimulation)              
                                                        <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Peripheral Nerve Stimulator Trial)</li>
  <li>-	زراعة الجهاز بشكل دائم (Peripheral Nerve Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>

        <p style={styles.description}>
-	من الإجراءات التداخلية التي نقوم بها لعلاج آلام البطن و الحوض المزمنة: 
</p>
    <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>الإجراء</th>
              <th style={{ ...styles.tableCell, ...styles.tableHeader }}>التكلفة*</th>
            </tr>
          </thead>
          <tbody>
          <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن الأعصاب المسؤولة عن الإحساس بجدار البطن 
                            <ul>
  <li>-	(TAP Block)</li>
  <li>-	(Ilioinguinal Nerve Block)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>

            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              حقن الأعصاب المسؤولة عن الإحساس في منطقة الحوض  
                            <ul>
  <li>-	(Ganglion Impar Block) </li>
  <li>-	(Pudendal Nerve Block)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	      
              التحفيز الكهربائي لجذور الأعصاب (Dorsal Root Ganglion Stimulation)
                            <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Dorsal Root Ganglion Stimulator Trial)</li>
  <li>-	زراعة الجهاز بشكل دائم (Dorsal Root Ganglion Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>





      </main>
    </div>
  );
};

export default InterventionalProcedures;
