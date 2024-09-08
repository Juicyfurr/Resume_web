import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
    <div className="container1">
        <div className="tab-view1">
            <div className="tabs1">
                <button
                className={activeTab === 1 ? 'active' : ''}
                onClick={() => handleTabClick(1)}
                >
                <h6>Programming languages</h6>
                </button>
                <button
                className={activeTab === 2 ? 'active' : ''}
                onClick={() => handleTabClick(2)}
                >
                <h6>Spoken Languages</h6>
                </button>
                <button
                className={activeTab === 3 ? 'active' : ''}
                onClick={() => handleTabClick(3)}
                >
                <h6>Tools</h6>
                </button>
            </div>
        </div> 
          
        
    </div>
    <div className="tab-content1">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
    </div>
    </>
  );
};

export default Skills;



