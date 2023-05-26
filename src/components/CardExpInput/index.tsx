import { ErrorMessage } from "formik";
import { FormItem, DatePicker } from "formik-antd";

interface CardExpInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
}

const CardExpInput: React.FC<CardExpInputProps> = ({
  label,
  placeholder,
  name,
}) => (
  <FormItem name={name} label={label}>
    <div className="w-full h-[50px] pl-[0.8rem] bg-[#f6fafd] border border-[#d9d9d9] rounded-[8px]">
      <DatePicker
        bordered={false}
        picker="month"
        name={name}
        suffixIcon=""
        format="MM/YY"
        placeholder={placeholder}
      />
    </div>
    <ErrorMessage
      render={(msg: string) => (
        <div className="text-red-700 text-xs mt-1">{msg}</div>
      )}
      name={name}
    />
  </FormItem>
);

export default CardExpInput;
