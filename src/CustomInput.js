import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="text-black font-medium leading-4">{label}</label>
      <input
      className=""

        {...field}
        {...props}
        // className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;