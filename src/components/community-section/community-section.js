import React from 'react';
import CommunityButton from './community-button/community-button';
import CommunityDescription from './community-description/community-description';
import PhotoSlider from './photo-slider/photo-slider';
import circleWidget from '../../images/widgets/circle.svg'
import squareWidget from '../../images/widgets/square.svg'
import './community-section.css'

const CommunitySection = () => {
  const photos = [
    {
      name: 'photo1',
      photoURL:
        'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
    },
    {
      name: 'photo2',
      photoURL:
        'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
    },
    {
      name: 'photo3',
      photoURL:
        'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    },
    {
      name: 'photo4',
      photoURL:
        'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
    },
    {
      name: 'photo5',
      photoURL:
        'https://i.picsum.photos/id/864/598/386.jpg?hmac=DOo0-DGwCVWdAnQAN_IHDZ2kKK_t10AGle49ztEbyYM',
    },
  ];
  return (
    <div className="community-section ec-container">
      <div className="section-block slider">
        <PhotoSlider photos={photos} />
      </div>
      <div className="section-block info">
        <ul className="headings">
          <li className="heading-item-title">
            <h3 className="heading title">Comunidad</h3>
          </li>
          <li className="heading-item-subtitle">
            <h4 className="heading subtitle">Javascript del Ecuador</h4>
          </li>
        </ul>
        {/*
         */}
        <CommunityDescription />
        <div className="call-to-action">
          <CommunityButton type="secondary">
            Conocer a la Comunidad
          </CommunityButton>
          <CommunityButton type="secondary">Cómo ayudar?</CommunityButton>
          <CommunityButton type="primary">Código de Conducta</CommunityButton>
        </div>
      </div>
      <img className="widget circle" src={circleWidget}  />
      <img className="widget square" src={squareWidget}  />
    </div>
  );
};

export default CommunitySection;
