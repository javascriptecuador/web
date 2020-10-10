import React from 'react';
import CommunityDescription from './communityDescription';
import SocialNetworks from './socialNetworks';
import Community from './community';

export default function homeSection() {
  return (
    <div className='ec-container home-section-container'>
      <CommunityDescription />
      <SocialNetworks />
      <Community />
    </div>
  );
}
