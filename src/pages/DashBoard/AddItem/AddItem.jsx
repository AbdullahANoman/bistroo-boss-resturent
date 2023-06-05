import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const notify = () => toast.success("Your Item Was Added");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    // console.log(data);
    const { category, name, recipe, price } = data || {};
    const imageFile = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData.data.display_url;
        const newItem = {
          name,
          category,
          recipe,
          price: parseFloat(price),
          image: imgUrl,
        };
        console.log(newItem);
        axiosSecure.post("/menu", newItem).then((data) => {
          const alert = data?.data?.insertedId;
          if (alert) {
            notify();
            reset();
          }
        });
        // fetch("http://localhost:5000/menu", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(newItem),
        // })
        //   .then((res) => res.json())
        //   .then((data) => console.log(data));
      });
    // reset();
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="w-4/5 bg-gray-200 px-10 py-20 rounded-xl">
      <Toaster></Toaster>
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
                <option disabled>Category</option>
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
              {...register("recipe", { required: true })}
              className="textarea textarea-primary w-full"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          {errors.recipe && (
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
              name="image"
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
