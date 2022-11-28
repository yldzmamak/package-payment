import React from 'react';

import './package-label.scss';

const PackageLabel = ({ packageDetail }) => {
  const { amount, currency, name } = packageDetail;

  return (
    <div className="package-label-container">
      <span>{name}</span>
      <span>
        {amount} {currency}
      </span>
    </div>
  );
};

export default PackageLabel;
