import React from 'react';

export default function ContactDataFree() {  
    return (
      <div style={{
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#ffffff', // Changed to white background
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Added shadow for box-like appearance
        maxWidth: '600px', // Set a max width for the box
        marginLeft: 'auto', // Center the box by using auto margins
        marginRight: 'auto',
      }}>
        <p>يمكنك استشارة د. سامر عبد العزيز اون لاين من بيتك في أي مكان في العالم دون الحاجة للقدوم الى عيادتنا</p>
        <ul>
          <li>قم بتعبئة الطلب</li>
          <li>سنقوم بالتواصل معك لحجز موعد اون لاين حيث ستقابل د. سامر عبر منصة Zoom و سيقوم بالتحدث معك و مراجعة صور الأشعة و اعطاءك توصيته بالعلاج المناسب</li>
          <li>لن نقوم بإعطاءك وصفة طبية للدواء اذا كنت خارج الأردن ولكن نعطيك توصية بالعلاج المناسب و إسم الدواء، اذا كان هناك حاجة لإجراء تداخلي ستحتاج الى القدوم الى عيادتنا لإجرائه.</li>
        </ul>
      </div>
    );
}
