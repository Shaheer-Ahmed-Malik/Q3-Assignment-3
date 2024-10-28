import React from 'react';

const SkillsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center">Our Skills</h1>
      <ul className="mt-4 space-y-2">

        <li className="bg-white shadow-xl p-4 duration-500 rounded-xl transition-colors hover:bg-red-900 hover:text-white ">
          <h2 className="text-xl font-semibold">Web Development</h2>
          <p>Expertise in building responsive and user-friendly websites.</p>
        </li>

        <li className="bg-white shadow-xl p-4 duration-500 rounded-xl transition-all
          colors hover:bg-red-900 hover:text-white ">
          <h2 className="text-xl font-semibold">UI/UX Design</h2>
          <p>Crafting intuitive interfaces and experiences for users.</p>
        </li>

        <li className="bg-white shadow-xl p-4 duration-500 rounded-xl transition-all
          colors hover:bg-red-900 hover:text-white ">
          <h2 className="text-xl font-semibold">SEO Optimization</h2>
          <p>Improving website visibility and ranking in search engines.</p>
        </li>

      </ul>
    </div>
  );
};

export default SkillsPage;
