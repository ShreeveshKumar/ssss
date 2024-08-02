import React from 'react';
import SkillSelection from './SkillSelection';

const Skill = () => {
  const handleSkillsChange = (selectedSkills) => {
    console.log('Selected skills:', selectedSkills);
    // Here you can update your app's state or send the data to your backend
  };

  return (
    <div className="app">
      <h1>My Skill Assessment App</h1>
      <SkillSelection onSkillsChange={handleSkillsChange} />
    </div>
  );
};

export default Skill;