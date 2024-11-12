import React from 'react';
import styled from 'styled-components/native';

import {color} from 'styles/color';
import {ButtonLarge} from 'components/atom/TypoGraphy';

import {IButtonProps} from 'components/molecule/Button';

const Default = (props: IButtonProps) => {
  const {label, disabled, onPress} = props;

  return (
    <ButtonContainer
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0}
      onPress={disabled ? undefined : onPress}>
      <ButtonLarge color={disabled ? color.neutral500 : color.white}>
        {label}
      </ButtonLarge>
    </ButtonContainer>
  );
};

export const ButtonContainer = styled.TouchableOpacity<{disabled?: boolean}>`
  border-radius: 10px;
  padding: 19px 0;
  background-color: ${({theme, disabled}) =>
    disabled ? theme.neutral200 : theme.blue900};
  justify-content: center;
  align-items: center;
`;

export default React.memo(Default);
