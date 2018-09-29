import React from 'react';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ className, ...props }) => (
  <FontAwesomeIcon className={classNames('icon', { [className]: !!className })} {...props} />
);
