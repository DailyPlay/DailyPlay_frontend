import React, {ReactNode} from 'react';
import {css} from 'styled-components';
import styled from 'styled-components/native';

interface ITypoGraphy {
  fontSize: number;
  fontWeight?: string | number;
  color: string;
  children: ReactNode;
  lineHeight?: number;
}

type TOmitFontsize = Omit<ITypoGraphy, 'fontSize'>;

export const TypoGraphy = ({children, ...props}: ITypoGraphy) => {
  return <_TypoGraphy {...props}>{children}</_TypoGraphy>;
};

const _TypoGraphy = styled.Text<{
  fontSize: number;
  fontWeight?: string | number;
  color: string;
  lineHeight?: number;
}>`
  font-size: ${({fontSize}) => fontSize || '10'}px;
  font-weight: ${({fontWeight}) => fontWeight || 400};
  color: ${({color}) => color || 'black'};
  ${({lineHeight}) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
`;

export const DisplayLarge = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={58} lineHeight={64} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const DisplayMedium = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={44} lineHeight={52} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const DisplaySmall = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={36} lineHeight={44} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const HeadLineLarge = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={32} lineHeight={40} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const HeadLineMedium = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={28} lineHeight={36} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const HeadLineSmall = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={24} lineHeight={32} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const TitleLarge = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={22} lineHeight={28} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const TitleMedium = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={18} lineHeight={24} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const TitleSmall = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={14} lineHeight={20} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const LabelLarge = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={16} lineHeight={24} fontWeight={600}>
    {children}
  </TypoGraphy>;
};

export const LabelMedium = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={12} lineHeight={16} fontWeight={600}>
    {children}
  </TypoGraphy>;
};

export const LabelSmall = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={11} lineHeight={16} fontWeight={600}>
    {children}
  </TypoGraphy>;
};

export const BodyLarge = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={16} lineHeight={24} fontWeight={400}>
    {children}
  </TypoGraphy>;
};

export const BodyMedium = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={14} lineHeight={20} fontWeight={400}>
    {children}
  </TypoGraphy>;
};

export const BodySmall = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={12} lineHeight={16} fontWeight={400}>
    {children}
  </TypoGraphy>;
};

export const ButtonLarge = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={18} lineHeight={24} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const ButtonMedium = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={16} lineHeight={24} fontWeight={700}>
    {children}
  </TypoGraphy>;
};

export const ButtonSmall = ({children, ...props}: TOmitFontsize) => {
  <TypoGraphy {...props} fontSize={14} lineHeight={16} fontWeight={700}>
    {children}
  </TypoGraphy>;
};
