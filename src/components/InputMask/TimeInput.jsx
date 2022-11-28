import InputMask from 'react-input-mask';
import { Input } from '../../components';

const TimeInput = props => {
  let mask = 'mM/YY';
  let formatChars = {
    Y: '[0-9]',
    m: '[0-1]',
    M: '[0-2]',
    d: '[0-3]',
    D: '[1-9]',
  };

  let beforeMaskedValueChange = (newState) => {
    let { value } = newState;

    let dateParts = value.split('-');
    let yearPart = dateParts[0];
    let monthPart = dateParts[1];
    let dayPart = dateParts[2];

    if (monthPart?.startsWith('1')) formatChars['M'] = '[0-2]';
    else formatChars['M'] = '[1-9]';

    if (!yearPart?.includes('_') && !monthPart?.includes('_')) {
      let endOfMonth = new Date(`${yearPart}-01-01`);
      endOfMonth.setMonth(parseInt(monthPart));
      endOfMonth.setDate(0);
      let lastDayOfMonth = endOfMonth.getDate().toString();

      formatChars['d'] = `[0-${lastDayOfMonth[0]}]`;

      if (dayPart?.startsWith(lastDayOfMonth[0])) formatChars['D'] = `[0-${lastDayOfMonth[1]}]`;
      else if (dayPart?.startsWith('0')) formatChars['D'] = '[1-9]';
      else formatChars['D'] = '[0-9]';
    }

    return { value, selection: newState.selection };
  };
  return (
    <InputMask
      placeholder="MM/YY"
      mask={mask}
      value={props.value}
      onChange={props.onChange}
      formatChars={formatChars}
      beforeMaskedValueChange={beforeMaskedValueChange}
    >
      {inputProps => <Input {...inputProps} size={'large'} />}
    </InputMask>
  );
};

export default TimeInput;
