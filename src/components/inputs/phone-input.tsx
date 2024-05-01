import { PatternFormat, PatternFormatProps } from 'react-number-format'

import { Input } from '../ui'

export const PhoneInput = (props: Partial<PatternFormatProps>) => {
  return (
    <PatternFormat
      {...props}
      format="(##) #####-####"
      customInput={Input}
      placeholder="(99) 99999-9999"
    />
  )
}
