// pages/HipPainInfoPage.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import { IoMdCheckmark } from "react-icons/io";
import { useRouter } from 'next/router';


const HeadachesPainInfoPage: React.FC = () => {
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
        <title>Leg Pain Information</title>
        <meta name="description" content="Learn about hip pain causes and treatments" />
      </Head>

      <main>
        <div style={styles.row}>
          <div style={styles.textContainer}>
            <div style={{...styles.title}}>  آلام الرأس و الوجه</div>
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
            <img src="/images/Headaches-Migraines-treatment-2.svg" alt="Hip Pain Diagram" style={styles.image} />
          </div>
        </div>
        <p style={styles.description}>
        آلام الرأس و الوجه متعددة الأسباب، من أكثرها شيوعاً  الصداع النصفي ( الشقيقة )، حيث ان حوالي 12% من الناس يعانون من الصداع النصفي (الشقيقة). 
                           </p>

        <p style={styles.description}>
        -	ما هي الشقيقة ؟ 
            </p>       

          <p style={styles.description}>
          -	ما هي الشقيقة ؟ 
            </p>      

            <ul>
  <li>•	شديد في حدّته. </li>
  <li>•	يزداد مع الحركة.  </li>
  <li>•	يكون في جهة واحدة من الرأس.</li>
  <li>•	يحس به كنبضات في الرأس.</li>
</ul>
<p style={styles.description}>

إذا كان الصداع يتصف بصفتين من هذه الأربعة و كان يزداد مع الصوت أو الضوء، أو كان مصحوباً بالغثيان فيمكن تشخيصه على أنه شقيقة بعد استثناء أي أسباب أخرى للصداع. 
</p>
<p style={styles.description}>
-	كيف يمكن تجنب الشقيقة ؟ 
</p>
<p style={styles.description}>
الشقيقة تتغذى على التغير في الروتين اليومي،  فتغيرعادات النوم، أو الأكل أو التمرين في وقت مختلف عن المعتاد قد يؤدي الى صداع، لذلك حاول المحافظة على روتين ثابت يومياً، كالنوم أو الإستيقاظ في موعد محدد، و الأكل و التمرين في أوقات ثابته . 
    
</p>
       
                  <ul>
  <li>العلاجات</li>
</ul>

<ul>
  <li>•	إذا كان الصداع متكرر، يصيب المريض أكثر من 6 أيام في الشهر، نركز في علاجنا على دواء مانع للصداع (Preventive Medication).</li>
  <li>•	كما أننا نتأكد من أن عند المريض دواء واقف الصداع فعال (Abortive Medication) يستخدمه لوقف الصداع عند حدوثه .   </li>
  <li>•	في الحالات التي تكون فيها الإستجابة للأدوية ضعيفة نلجأ للإجراءات التداخلية.</li>
</ul>
<p style={styles.description}>
-	من الإجراءات التداخلية التي نقوم بها في العيادة لعلاج آلام الرأس و الوجه
 
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
              حقن البوتكس لعلاج ألم الشقيقة المزمنة  
(Botox Injections PREEMPT Protocol)

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
              التردد الحراري لعلاج آلام الرأس الصادرة من الرقبة 
(C2-C3 & Third Occipital Nerve Radiofrequency Ablation)


 
</td>
              <td style={styles.tableCell}></td>
            </tr>
            {/* Add more rows as needed */}
    

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
          </tbody>
        </table>
        <p style={styles.description}>
        * معتمدون لدى الكثير من شركات التأمين في الأردن و نحرص على تغطية تكلفة الإجراء من التأمين إن أمكن. 
    </p>
      </main>
    </div>
  );
};

export default HeadachesPainInfoPage;
