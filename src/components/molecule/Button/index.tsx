import Default from './DefaultButton';
import Gradient from './GradientButton';

export interface IButtonProps {
  label: string | string[];
  disabled?: boolean;
  onPress: () => void;
}

export default {Default, Gradient};
