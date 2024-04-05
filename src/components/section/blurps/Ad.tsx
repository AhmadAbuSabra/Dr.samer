import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';


export default function Ad() {
  const googleMapsUrl = "https://maps.app.goo.gl/8pwrS5yJkoHGTezU7?g_st=iw";

  return (
    <div
      className="mt-3 p-3 text-center d-none d-md-block"
      style={{ border: '2px dashed #adadad' }}
    >
عمان - الشميساني - مقابل المستشفى التخصصي - مجمع الحسيني 1 - الطابق السادس 
     <br />
      {`>>`}
      <a href="https://maps.app.goo.gl/8pwrS5yJkoHGTezU7?g_st=iw" target="_blank" rel="noreferrer" className="mx-2">
      <FaMapMarkerAlt />

      </a>
      {`<<`}
    </div>
  );
}
