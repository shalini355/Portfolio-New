import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const item = {
    year: "2023 – 2027",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Pranveer Singh Institute of Technology, Kanpur",
    grade: "CGPA: 7.6 (till 5th Sem)"
  };

  return (
    <section id="education" className="w-full min-h-[60vh] bg-background flex flex-col items-center justify-center relative py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto mb-16 text-center">
        <span className="label block mb-4 tracking-[4px]">ACADEMIC JOURNEY ✦</span>
        <h2 className="text-textMain">Education</h2>
      </div>

      <div className="relative w-full flex items-center justify-center px-6">
        {/* Horizontal Line with Diamond */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-full h-[1px] bg-[rgba(201,168,76,0.25)]" />
          <div className="text-[#C9A84C] text-xl bg-background px-4 z-10">◆</div>
          <div className="w-full h-[1px] bg-[rgba(201,168,76,0.25)]" />
        </div>

        {/* Centered Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="edu-card-center z-20"
        >
          <div className="edu-year-large">{item.year}</div>
          <div className="edu-degree-large">{item.degree}</div>
          <div className="edu-field-large">{item.field}</div>
          <div className="edu-institution-large">{item.institution}</div>
          <div className="edu-grade-pill">{item.grade}</div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .edu-card-center {
          background: rgba(10, 10, 8, 0.95);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: 8px;
          padding: 48px;
          width: 500px;
          max-width: 100%;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .edu-year-large {
          color: #C9A84C;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .edu-degree-large {
          color: #F5F0E8;
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          line-height: 1.2;
          margin-bottom: 8px;
        }
        .edu-field-large {
          color: #8A8070;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .edu-institution-large {
          color: #8A8070;
          font-size: 14px;
          margin-bottom: 24px;
        }
        .edu-grade-pill {
          display: inline-block;
          border: 1px solid rgba(201, 168, 76, 0.4);
          color: #C9A84C;
          font-size: 12px;
          padding: 6px 16px;
          border-radius: 4px;
          letter-spacing: 1px;
        }
        @media (max-width: 640px) {
          .edu-card-center {
            padding: 32px 24px;
          }
          .edu-degree-large {
            font-size: 24px;
          }
        }
      `}} />
    </section>
  );
}
