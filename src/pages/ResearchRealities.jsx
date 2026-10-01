import React from 'react';
import Resources from './Resources.jsx';
import Stories from './Stories.jsx';

export default function ResearchRealities() {
  return (
    <div className="research-realities-page" style={{ paddingTop: '76px' }}>
      <Resources embedded />
      <Stories embedded />
    </div>
  );
}
