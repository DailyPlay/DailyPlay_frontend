import React, {useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

// import local
import * as s from './style';
import {loginStackMenu} from 'constants/navigation';

// import Component
import KakaoLoginButton from './components/KakaoLogin';
import {BodyLarge, HeadLineSmall, TitleSmall} from 'components/atom/TypoGraphy';

// import type
import {ILoginStackParamList} from 'navigation/type';

const Introduction = () => {
  const navigation =
    useNavigation<NavigationProp<ILoginStackParamList, 'introduction'>>();

  const [imgHeight, setImgHeight] = useState(0);

  const backgroundImage = require('@assets/images/introductionBackground.png');
  const {width} = Dimensions.get('window');
  const imgProps = Image.resolveAssetSource(backgroundImage);

  useEffect(() => {
    setImgHeight(imgProps.height * (width / imgProps.width));
  }, [imgProps.width, imgProps.height, width]);

  return (
    <s.Container>
      <s.TextWrapper>
        <HeadLineSmall>
          {`오늘 하루를 대표하는 노래는\n어떤 노래인가요?`}
        </HeadLineSmall>
        <BodyLarge>
          {`하루 일기를 작성하면\n일기와 어울리는 노래를 추천해드려요.`}
        </BodyLarge>
      </s.TextWrapper>

      {/* 배경 이미지 */}
      <s.ImageWrapper source={{uri: imgProps.uri, height: imgHeight}} />

      {/* 로그인/회원가입 */}
      <s.IconWrapper>
        <s.LoginIcon bgColor="white" border={true} />
        <s.LoginIcon bgColor="black" />
        <KakaoLoginButton />
      </s.IconWrapper>
      <s.GuestTextBox
        onPress={() => navigation.navigate(loginStackMenu.setNotiTime.name)}>
        <TitleSmall color="#667580">또는 게스트로 시작하기</TitleSmall>
      </s.GuestTextBox>
    </s.Container>
  );
};

export default Introduction;
