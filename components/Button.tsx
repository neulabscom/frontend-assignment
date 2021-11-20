import DefaultBtn from '../public/svg/DefaultBtn.svg';
import SelectedBtn from '../public/svg/SelectedBtn.svg';
import { CustomButtonProps } from '../interfaces';

const Button = ({ isSelected, onClick }: CustomButtonProps) => {
  return <>{!isSelected ? <DefaultBtn onClick={onClick} /> : <SelectedBtn />}</>;
};

export default Button;
