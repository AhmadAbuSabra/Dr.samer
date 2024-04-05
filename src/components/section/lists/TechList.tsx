import React from 'react';

export default function TechList() {
  return (
    <div className="features-tech-list mt-4 py-2">
      <div className="pointer position-relative rounded p-2  z-10">
        <div className="d-flex p-0  align-items-center">
          <img
            src="/images/reactjs.png"
            alt="React JS Library Logo"
            className="flex-shrink-0 me-3 rounded-circle"
          />

          <div>
            <p className="m-0 px-2">
              React: One of the coolest front-end libraries that will make your
              site alive
            </p>
          </div>
        </div>
      </div>

      <div className="pointer  position-relative p-2 z-20">
        <div className="d-flex p-0 align-items-center">
          <img
            src="/images/typescript.png"
            alt="React JS Library Logo"
            className="flex-shrink-0 me-3 rounded-circle"
          />
          <div>
            <p className="m-0 px-2">
              TypeScript: The best JavaScript dialect for writing scalable and
              stable code.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer sign-up-form-wrap position-relative  p-2 z-50">
        <div className="d-flex p-0 align-items-center">
          <img
            src="/images/nextjs.png"
            alt="React JS Library Logo"
            className="flex-shrink-0 me-3 rounded-circle"
          />
          <div>
            <p className="m-0 px-2">
              NextJs: An SEO-friendly framework for websites of any size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
