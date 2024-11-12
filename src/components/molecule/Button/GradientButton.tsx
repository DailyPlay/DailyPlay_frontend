import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {color} from 'styles/color';
import {ButtonLarge} from 'components/atom/TypoGraphy';

import {IButtonProps} from 'components/molecule/Button';

const Gradient = (props: IButtonProps) => {
  const {label, disabled, onPress} = props;

  return (
    <TouchableOpacity
      className="rounded-[10px]"
      activeOpacity={disabled ? 1 : 0}
      onPress={disabled ? undefined : onPress}>
      <GradientBox
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          disabled
            ? [color.neutral500, color.neutral500]
            : [color.blue500, color.black]
        }>
        <ButtonLarge color={color.white}>{label}</ButtonLarge>
      </GradientBox>
    </TouchableOpacity>
  );
};

export const GradientBox = styled(LinearGradient)`
  padding: 19px 0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export default React.memo(Gradient);
