import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FULL-STACK DEVELOPMENT',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Responsive Design', 'REST API Design'],
    },
    {
      title: 'AI & MACHINE LEARNING',
      skills: ['Generative AI APIs', 'Prompt Engineering', 'TensorFlow', 'Model Optimization', 'Flask'],
    },
    {
      title: 'CORE FOUNDATIONS',
      skills: ['Java', 'Python', 'Data Structures & Algorithms', 'Operating Systems', 'DBMS'],
    },
    {
      title: 'DATABASE & TOOLS',
      skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="w-full bg-background relative py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="label block mb-4 tracking-[4px]">EXPERTISE ✦</span>
          <h2 className="text-textMain">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="skill-card group"
            >
              <h3 className="skill-title">
                {category.title}
              </h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(201, 168, 76, 0.1);
          border-radius: 24px;
          padding: 40px 32px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          backdrop-filter: blur(10px);
        }
        .skill-card:hover {
          background: rgba(201, 168, 76, 0.04);
          border-color: rgba(201, 168, 76, 0.3);
          transform: translateY(-5px);
        }
        .skill-title {
          color: #C9A84C;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 500;
          margin-bottom: 24px;
          opacity: 0.8;
          line-height: 1.4;
        }
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .skill-item {
          display: flex;
          items-center;
          gap: 12px;
          color: #F5F0E8;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.3s ease;
        }
        .skill-item:hover {
          color: #C9A84C;
        }
        .skill-dot {
          width: 4px;
          height: 4px;
          background: #C9A84C;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(201, 168, 76, 0.5);
        }
      `}} />
    </section>
  );
};

export default Skills;
