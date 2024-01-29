import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="bg-gray-300 grid grid-cols-2 p-6 gap-5  ">
        <label className="text-grey-700 text-sm font-semibold">
          Adults
          <input
            type="number"
            min={1}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("adultCount", { required: "This field is required" })}
          ></input>
          {errors.adultCount?.message && (
            <span className="text-red-500 text-sm folt-bold">
              {errors.adultCount.message}
            </span>
          )}
        </label>
        <label className="text-grey-700 text-sm font-semibold">
          Children
          <input
            type="number"
            min={0}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("childCount", { required: "This field is required" })}
          ></input>
          {errors.childCount?.message && (
            <span className="text-red-500 text-sm folt-bold">
              {errors.childCount.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
