import React from 'react';

export default ({ match }) => (
  <div>
    Product {match.params.id}
  </div>
);
