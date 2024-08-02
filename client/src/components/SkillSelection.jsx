import React, { useState } from 'react';
// import './SkillSelection.css'; // Optional if you have additional custom styles

const initialSkillsList = [
  'MERN Stack',
  'Python',
  'Java',
  'C++',
  'JavaScript',
  'React',
  'Node.js',
  'Data Science',
  'Machine Learning',
  'UI/UX Design',
];

const SkillSelection = ({ onSkillsChange }) => {
  const [skillsList, setSkillsList] = useState(initialSkillsList);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prevSkills) => {
      if (prevSkills.includes(skill)) {
        return prevSkills.filter((s) => s !== skill);
      } else {
        return [...prevSkills, skill];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSkillsChange(selectedSkills);
  };

  const handleAddNewSkill = (e) => {
    e.preventDefault();
    if (newSkill && !skillsList.includes(newSkill)) {
      setSkillsList([...skillsList, newSkill]);
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill('');
      setShowOtherInput(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Select Your Skills</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsList.map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSkills.includes(skill)}
                onChange={() => handleSkillToggle(skill)}
                className="form-checkbox text-blue-600"
              />
              <span className="text-gray-700">{skill}</span>
            </label>
          ))}
          <label className="flex items-center space-x-2 font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={showOtherInput}
              onChange={() => setShowOtherInput(!showOtherInput)}
              className="form-checkbox text-blue-600"
            />
            <span>Other</span>
          </label>
        </div>
        {showOtherInput && (
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter new skill"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleAddNewSkill}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add Skill
            </button>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Skills
        </button>
      </form>
    </div>
  );
};

export default SkillSelection;
