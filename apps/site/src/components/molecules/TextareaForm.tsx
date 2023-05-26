import { ErrorMessage } from '@hookform/error-message'
import * as Form from '@radix-ui/react-form'
import { useFormContext } from 'react-hook-form'

import { Text } from '../atoms/Text'
import { TextareaProps, Textarea } from '../atoms/Textarea'

type TextareaForm = Omit<TextareaProps, 'name'> & {
  name: string
  label?: string
}

const TextareaForm = ({ name, label, required, ...rest }: TextareaForm) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <Form.FormField
      className="[user-select: none] flex w-full flex-col text-xs text-gray-50"
      name={name}
    >
      <div className="flex items-baseline justify-between">
        <Form.Label className="mb-1 font-bold" htmlFor={name}>
          {label && (
            <Text asChild size="md" weight="semibold">
              <span>{label}</span>
            </Text>
          )}
        </Form.Label>
        <Form.Message match="valueMissing" asChild>
          <Text type="error" size="sm" asChild>
            <span>Campo obrigatório</span>
          </Text>
        </Form.Message>
        <Form.Message match="typeMismatch">
          <Text type="error" size="sm" asChild>
            <span>Campo inválido</span>
          </Text>
        </Form.Message>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <Form.Message asChild match="badInput" forceMatch>
              <Text type="error" size="xs" asChild>
                <span>{message}</span>
              </Text>
            </Form.Message>
          )}
        />
      </div>
      <Form.Control asChild>
        <Textarea id={name} {...rest} {...register(name, { required })} />
      </Form.Control>
    </Form.FormField>
  )
}

export { TextareaForm }
