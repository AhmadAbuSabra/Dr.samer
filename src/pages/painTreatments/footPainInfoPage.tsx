// pages/HipPainInfoPage.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import { IoMdCheckmark } from "react-icons/io";
import { useRouter } from 'next/router';


const HipPainInfoPage: React.FC = () => {
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
        <title>Hip Pain Information</title>
        <meta name="description" content="Learn about hip pain causes and treatments" />
      </Head>

      <main>
        <div style={styles.row}>
          <div style={styles.textContainer}>
            <div style={{...styles.title}}>آلام القدم</div>
            <div style={{...styles.subtitle}}>العلاجات الرائدة   <IoMdCheckmark />  </div>
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
            <img src="/images/foot-pain-treatment.svg" alt="Hip Pain Diagram" style={styles.image} />
          </div>
        </div>
        <p style={styles.description}>
        هناك أسباب متعددة لآلام القدم، منها الوقوف أو المشي لساعات طويلة، أو لبس أحذية غير مناسبة. كما أن آلام القدم قد تكون ناتجة عن مشاكل في مرابط القدم، أو كسور في العظام أو تآكل في المفاصل، و غيرها. من الأفضل زيارة طبيب عظام مختص في علاج القدم لعلاج هذه المشكلات. 
              </p>
        <p style={styles.description}>
        نحن في عيادتنا مختصون بعلاج آلام القدم الناتجة عن مشاكل في الأعصاب، كتلف الأعصاب الطرفية بسبب مرض السكري (Painful Diabetic Neuropathy) أو ألم القدم الناتج عن تلف في الأعصاب أو خلل في عملها بعد الجراحة أو بسبب إصابة أو حادث (Complex Regional Pain Syndrome) (Neuropathic Foot Pain).
                  </p>
                  <ul>
  <li>العلاجات</li>
</ul>

<ul>
  <li>نعالج آلام القدم الناتجة عن مشاكل في الأعصاب بأدوية مناسبة و العلاج الطبيعي بدايةً.</li>
  <li>في الحالات التي لا تستجيب بشكل كافي للأدوية و العلاج الطبيعي، نلجأ الى الإجراءات التداخلية.</li>
</ul>
<p style={styles.description}>
-	من الإجراءات التداخلية التي نقوم بها لعلاج آلام القدم : 
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
              <td style={styles.tableCell}>	      	(Lumbar Sympathetic Nerve Block) 

</td>
              <td style={styles.tableCell}></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>			حقن كورتيزون في مفاصل القدم أوالكاحل
(Tibiotalar, Subtalar, Talonavicular Joint Injection)


</td>
              <td style={styles.tableCell}></td>
            </tr>
            {/* Add more rows as needed */}
        
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>	       زراعة جهاز التحفيز الكهربائي للنخاع الشوكي  لعلاج آلام القدم السكرية أو آلام القدم العصبية المزمنة الناتجة عن تلف في الأعصاب أو بعد الجراحة
              <ul>
  <li>-	تجربة الجهاز لمدة أسبوع (Spinal Cord Stimulator Trial)</li>
  <li>- زراعة الجهاز بشكل دائم (Spinal Cord Stimulator Implant)</li>
</ul>

</td>
              <td style={styles.tableCell}></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.description}>
        * معتمدون لدى الكثير من شركات التأمين في الأردن و نحرص على تغطية تكلفة الإجراء من التأمين إن أمكن. 
    </p>
      </main>
    </div>
  );
};

export default HipPainInfoPage;
