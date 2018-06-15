import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome, {Icons} from 'react-native-fontawesome';
//import FAIcon from 'react-native-vector-icons/FontAwesome';

import getIconType from '../helpers/getIconType';

const CheckBoxIcon = ({
  checked,
  onIconPress,
  onLongIconPress,
  size,
  checkedIcon,
  uncheckedIcon,
  iconType,
  checkedColor,
  uncheckedColor,
}) => {
  if (checked && React.isValidElement(checkedIcon)) {
    return checkedIcon;
  }

  if (!checked && React.isValidElement(uncheckedIcon)) {
    return uncheckedIcon;
  }


  return (
    <TouchableOpacity onLongPress={onLongIconPress} onPress={onIconPress}>
      <FontAwesome
        style={{
          color: checked ? checkedColor : uncheckedColor,
          fontSize: size || 24,
          minWidth: size || 24
        }}>
        {checked ? Icons.checkSquareO : Icons.squareO }
      </FontAwesome>
    </TouchableOpacity>
  );
};

CheckBoxIcon.propTypes = {
  checked: PropTypes.bool,
  onIconPress: PropTypes.func,
  onLongIconPress: PropTypes.func,
  size: PropTypes.number,
  checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  uncheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconType: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
};

export default CheckBoxIcon;
