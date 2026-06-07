import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { DateObject } from "react-multi-date-picker";

interface DatePickerFieldProps {
  label?: string;
  data?: Date | DateObject | null;
  date?: Date | DateObject | null;
  setDate: (date: DateObject | null) => void;
}

function DatePickerField({ data, date, setDate }: DatePickerFieldProps) {
  const value = date ?? data;

  return (
    <div className="border border-secondery-400 p-2 rounded-sm w-full">
      <DatePicker
        placeholder="زمان ایده آل"
        containerClassName="w-full "
        inputClass="textfield__input"
        calendarPosition="bottom-center"
        value={value}
        onChange={(d) => setDate(d as DateObject | null)}
        format="YYYY-MM-DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
