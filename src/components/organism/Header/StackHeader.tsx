import React from 'react';
import * as s from './headerStyle';
import ArrowIcons from '@assets/icons/arrow';
import DefaultIcons from '@assets/icons/default';
import {IStackHeaderProps} from './headerType';
import {ButtonLarge} from 'components/atom/TypoGraphy';

const StackHeader = (props: IStackHeaderProps) => {
  const {isBackBtn, isCloseBtn, title} = props;
  const {onBackPress, onClosePress} = props;

  const goBack = () => {
    if (onBackPress) {
      onBackPress();
    }
    props.navigation.goBack();
  };

  return (
    <s.HeaderContainer>
      {!!isBackBtn && (
        <s.BackButtonBox onPress={goBack}>
          <ArrowIcons.NarrowLeft />
        </s.BackButtonBox>
      )}
      <ButtonLarge>{title || ''}</ButtonLarge>
      {!!isCloseBtn && (
        <s.CloseButtonBox onPress={onClosePress}>
          <DefaultIcons.Close />
        </s.CloseButtonBox>
      )}
    </s.HeaderContainer>
  );
};

export default StackHeader;
