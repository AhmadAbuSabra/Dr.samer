import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface PainArea {
  id: string;
  name: string;
  imageSrc: string; // Added imageSrc to the interface
  description: string;
}
const textStyle = {
    minHeight: '3rem', // Adjust the value based on your longest text
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem 0',
    textAlign: 'center'
  };

// Define your pain areas with corresponding image sources
const painAreas: PainArea[] = [
  {
    id: 'back',
    name: 'آلام الظهر',
    imageSrc: '/images/back-pain-treatment.svg', // Assuming the SVG file is named 'back-pain.svg' and located in the 'public' directory
    description: 'Learn more about back pain',
  },
  {
    id: 'upper-limb-neck',
    name: 'آلام الرقبة و الذراع ',
    imageSrc: '/images/neck-pain-treatment.svg',
    description: 'Learn more about pain in the upper limbs and neck',
  },
  {
    id: 'headaches-migraines',
    name: ' آلام الرأس و الوجه',
    imageSrc: '/images/Headaches-Migraines-treatment-2.svg',
    description: 'Learn more about headaches and migraines',
  },
  {
    id: 'leg',
    name: 'آلام الساق',
    imageSrc: '/images/leg-pain-treatment.svg',
    description: 'Learn more about leg pain',
  },
  {
    id: 'foot',
    name: 'آلام القدم',
    imageSrc: '/images/foot-pain-treatment.svg',
    description: 'Learn more about foot pain',
  },
  {
    id: 'hip',
    name: ' آلام الركبة أو الورك أو الكتف  ',
    imageSrc: '/images/hip-pain-treatment.svg',
    description: 'Learn more about hip pain',
  },

  {
    id: 'pelvic',
    name: ' آلام البطن و الحوض المزمنة',
    imageSrc: '/images/Pelvic-Pain-treatment-2.svg',
    description: 'Learn more about pelvic pain',
  },
 
  // Add more pain areas if necessary
];

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem', // You can adjust this value as needed
    justifyContent: 'center',
    alignItems: 'start',
    padding: '1rem'
  };
  
  const gridItemStyle = {
    display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '1rem'
  };
  const buttonStyle = {
    backgroundColor: '#353929',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    marginTop: 'auto', // Pushes the button to the bottom of the container
    width: '100%',
    maxWidth: '200px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const buttonHoverStyle = {
    backgroundColor: '#4b4f30', // A darker color for hover
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' // Slightly larger shadow on hover
  };

  const textContainerStyle = {
    minHeight: '3rem', // Adjust the value based on your longest text
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem 0',
    textAlign: 'center'
  };
  

const PainDiagram: React.FC = () => {
  const [activePainArea, setActivePainArea] = useState<string | null>(null);
  const router = useRouter();

  const handlePainAreaClick = (painAreaId: string) => {
    setActivePainArea(painAreaId);

    if(painAreaId ==='hip')
    router.push('/painTreatments/HipPainInfoPage');
  else if (painAreaId==='foot')
  router.push('/painTreatments/footPainInfoPage');
else if (painAreaId ==='leg')
router.push('/painTreatments/LegPainInfoPage');
else if (painAreaId ==='back')
router.push('/painTreatments/BackPainInfoPage');
else if (painAreaId ==='upper-limb-neck')
router.push('/painTreatments/NeckPainInfoPage');
else if (painAreaId ==='headaches-migraines')
router.push('/painTreatments/HeadachesPainInfoPage');
else if (painAreaId ==='pelvic')
router.push('/painTreatments/PelvicPainInfoPage');
  };

  return (
    <div style={{ padding: '2rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem',color:'#5e7140' }}>                حالات الألم </h3>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem',color:'#747576' }}>
      استكشف خيارات العلاج بناءً على حالة الألم لديك      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {painAreas.map((area) => (
          <div key={area.id} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Aligns children with space between
            backgroundColor: 'white', // Card background set to white
            borderRadius: '8px',
            padding: '1rem',
            minHeight: '360px' // Ensures that all cards are the same height
          }}>
            <div> {/* Container for image and text, allowed to grow */}
              <Image 
                src={area.imageSrc}
                alt={area.name}
                width={200}
                height={200}
                layout='responsive'
              />
              <h6 style={{ textAlign: 'center', margin: '1rem 0' ,color:'#5e7140'}}>{area.name}</h6>
            </div>
            <button
              onClick={() => handlePainAreaClick(area.id)}
              style={{
                backgroundColor: '#353929',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s, box-shadow 0.3s',
                width: '100%', // Button fills card width
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4b4f30';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#353929';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              تفاصيل
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainDiagram;