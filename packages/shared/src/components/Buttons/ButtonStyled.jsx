import React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import PropTypes from 'prop-types';
import '../../styles/buttons/ButtonStyle.css';

export default function ButtonStyled({
  text,
  alt,
  type,
  design,
  onclick,
  icon,
  align,
}) {
  const justifycontent = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }[align];
  return (
    <ButtonUnstyled
      className={`buttonaction button${design}`}
      onClick={() => onclick()}
      type={type}
      justifycontent={justifycontent}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon && (
          <span className="icon" style={{ marginRight: '5px' }}>
            {icon}
          </span>
        )}
        <span className="text">{text}</span>
      </div>
      <span className="text">{text}</span>
      <span>{alt}</span>
    </ButtonUnstyled>
  );
}

ButtonStyled.defaultProps = {
  onclick: () => {},
  design: 'normal',
  type: 'button',
  align: 'left',
  icon: null,
};

ButtonStyled.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  type: PropTypes.string,
  align: PropTypes.string,
  design: PropTypes.string,
  onclick: PropTypes.func,
  icon: PropTypes.element,
};
