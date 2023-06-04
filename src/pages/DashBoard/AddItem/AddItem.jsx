import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="w-4/5 bg-gray-200 px-10 py-20 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* register your input into the hook by invoking the "register" function */}

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </label>
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="flex gap-2">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <label className="input-group">
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full"
              />
            </label>
            {errors.price && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <label className="input-group">
              <select
                {...register("category", { required: true })}
                className="w-full py-3"
              >
                <option value="salads">Salads</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {errors.category && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <label className="input-group">
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-primary w-full"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          {errors.details && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <label className="input-group">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </label>
          {errors.image && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="flex justify-center">
          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="add Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
