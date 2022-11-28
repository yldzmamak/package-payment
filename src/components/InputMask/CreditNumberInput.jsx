import InputMask from 'react-input-mask';
import { Input } from '../../components';

const CreditNumberInput = props => {
  return (
    <InputMask mask="9999 9999 9999 9999" value={props.value} onChange={props.onChange}>
      {inputProps => <Input {...inputProps} size={'large'} />}
    </InputMask>
  );
};

export default CreditNumberInput;
