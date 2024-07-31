import React from 'react';
import settingsData from '../data/settingsData';
import SettingsItem from './SettingsItem';
import './SettingsList.css'; 

const SettingsList = () => {
  return (
    <div className="settings-list">
      {settingsData.map((item) => (
        <SettingsItem
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default SettingsList;
