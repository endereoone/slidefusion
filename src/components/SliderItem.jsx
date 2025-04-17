import React from 'react';

const SliderItem = ({ img, index }) => {
  const isActive = index === 1;

  return (
    <div className="item" style={{ backgroundImage: `url(${img.url})` }}>
      <div className="content" style={{ display: isActive ? 'block' : 'none' }}>
        <div className="title">SLIDER</div>
        <div className="name">{img.name}</div>
        <div className="des">{img.description}</div>
        <div className="btn">
          <button>See More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
