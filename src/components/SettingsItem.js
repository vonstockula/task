import React from 'react';
import settingsData from '../data/settingsData';
import Card from './Card'; 
import './SettingsList.css'; 

const SettingsList = () => {
  return (
    <div className="settings-list">
      {settingsData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          backgroundColor={item.backgroundColor} 
        />
      ))}
    </div>
  );
};

export default SettingsList;
