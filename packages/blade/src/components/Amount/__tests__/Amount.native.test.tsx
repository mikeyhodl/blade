import { setState } from '@razorpay/i18nify-js';
import type { AmountProps } from '../Amount';
import { Amount, formatAmountWithSuffix } from '../Amount';

import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<Amount />', () => {
  it('should render Amount with default props', () => {
    const { toJSON } = renderWithTheme(<Amount value={1000} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should throw an error when a string is passed', () => {
    // @ts-expect-error testing failure case when value is passed as a string
    expect(() => renderWithTheme(<Amount value="10000" />)).toThrow(
      '[Blade: Amount]: `value` prop must be of type `number` for Amount.',
    );
  });

  it('should throw an error when invalid type and size is passed', () => {
    // @ts-expect-error testing failure case when value is passed as a string
    expect(() => renderWithTheme(<Amount value={1000} type="display" size="2xlarge" />)).toThrow(
      '[Blade: Amount]: size="2xlarge" is not allowed with type="display"',
    );
    // @ts-expect-error testing failure case when value is passed as a string
    expect(() => renderWithTheme(<Amount value={1000} type="heading" size="xsmall" />)).toThrow(
      '[Blade: Amount]: size="xsmall" is not allowed with type="heading"',
    );

    // @ts-expect-error testing failure case when value is passed as a string
    expect(() => renderWithTheme(<Amount value={1000} type="body" size="2xlarge" />)).toThrow(
      '[Blade: Amount]: size="2xlarge" is not allowed with type="body"',
    );
  });

  it('should accept testID', () => {
    const { getByTestId } = renderWithTheme(<Amount value={10000} testID="amount-test" />);
    expect(getByTestId('amount-test')).toBeTruthy();
  });

  it('should render all sizes of Amount', () => {
    const { toJSON } = renderWithTheme(
      <>
        <Amount type="body" size="medium" value={1000} />
        <Amount type="body" size="medium" weight="semibold" value={1000} />
        <Amount type="body" size="small" value={1000} />
        <Amount type="body" size="small" weight="semibold" value={1000} />
        <Amount type="heading" size="large" value={1000} />
        <Amount type="heading" size="large" weight="semibold" value={1000} />
        <Amount type="heading" size="small" value={1000} />
        <Amount type="heading" size="small" weight="semibold" value={1000} />
        <Amount type="display" size="medium" value={1000} />
      </>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render amount with Decimal value', () => {
    const { toJSON } = renderWithTheme(
      <Amount type="heading" size="small" suffix="decimals" value={1000.22} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render amount with Humanize value', () => {
    const { toJSON } = renderWithTheme(
      <Amount type="heading" size="small" suffix="humanize" value={1000.22} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render isStrikethrough={true}', () => {
    const { toJSON } = renderWithTheme(<Amount isStrikethrough={true} value={1000} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render currencyIndicator="currency-symbol"', () => {
    const { toJSON } = renderWithTheme(<Amount currencyIndicator="currency-symbol" value={1000} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render currencyIndicator="currency-code"', () => {
    const { toJSON } = renderWithTheme(<Amount currencyIndicator="currency-code" value={1000} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render positive intent Amount ', () => {
    const { toJSON } = renderWithTheme(
      <Amount color="feedback.text.positive.intense" value={1000} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render information intent Amount ', () => {
    const { toJSON } = renderWithTheme(
      <Amount isAffixSubtle={false} color="feedback.text.information.intense" value={1000} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  for (const currency of ['USD', 'MYR', 'AED']) {
    it(`should render ${currency} currency Amount`, () => {
      const { toJSON } = renderWithTheme(
        <Amount currency={currency as AmountProps['currency']} value={1000} />,
      );
      expect(toJSON()).toMatchSnapshot();
    });
  }

  it('should check if formatAmountWithSuffix is returning the right value for humanize decimals and none', () => {
    setState({ locale: 'en-IN' });
    expect(formatAmountWithSuffix({ value: 1000.22, suffix: 'humanize' })).toEqual({
      formatted: '1T',
    });
    expect(formatAmountWithSuffix({ value: 1000000.0, suffix: 'decimals' })).toEqual({
      decimal: '.',
      formatted: '10,00,000.00',
      fraction: '00',
      integer: '10,00,000',
      isPrefixSymbol: false,
      rawParts: [
        { type: 'integer', value: '10' },
        { type: 'group', value: ',' },
        { type: 'integer', value: '00' },
        { type: 'group', value: ',' },
        { type: 'integer', value: '000' },
        { type: 'decimal', value: '.' },
        { type: 'fraction', value: '00' },
      ],
    });
    expect(formatAmountWithSuffix({ value: 10000000, suffix: 'none' })).toEqual({
      formatted: '1,00,00,000',
    });
    // Related issue - https://github.com/razorpay/blade/issues/1572
    expect(formatAmountWithSuffix({ value: 2.07, suffix: 'decimals' })).toEqual({
      decimal: '.',
      formatted: '2.07',
      fraction: '07',
      integer: '2',
      isPrefixSymbol: false,
      rawParts: [
        { type: 'integer', value: '2' },
        { type: 'decimal', value: '.' },
        { type: 'fraction', value: '07' },
      ],
    });
    expect(formatAmountWithSuffix({ value: 2.077, suffix: 'decimals' })).toEqual({
      decimal: '.',
      formatted: '2.08',
      fraction: '08',
      integer: '2',
      isPrefixSymbol: false,
      rawParts: [
        { type: 'integer', value: '2' },
        { type: 'decimal', value: '.' },
        { type: 'fraction', value: '08' },
      ],
    });
    expect(formatAmountWithSuffix({ value: 2.3, suffix: 'decimals' })).toEqual({
      decimal: '.',
      formatted: '2.30',
      fraction: '30',
      integer: '2',
      isPrefixSymbol: false,
      rawParts: [
        { type: 'integer', value: '2' },
        { type: 'decimal', value: '.' },
        { type: 'fraction', value: '30' },
      ],
    });
  });
});
