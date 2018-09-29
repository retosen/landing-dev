import React from 'react'

import classNames from 'classnames'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Icon from 'src/components/Icon'

import alert from 'src/_data/alert'

export default () => {
  const { message, type, link } = alert;
  return message && (
    <div className={classNames('alert', {[type]: !!type})}>
      <a href={link || "#"}>{ message }</a>
      <button className="closeAlert" onClick={() => console.log('clicked')}>
        <Icon icon={faTimes} />
      </button>
    </div>
  );
}
