import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Newsletter = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Newletter Subscription successfull!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    console.log(e);
  };
  return (
    <section className="bg-gray-100 rounded-lg font-roboto mt-16 py-12">
      <div className="container  grid grid-cols-2 gap-4  ">
        <div>
          <h1 className="text-2xl font-bold">Sign up for newsletter</h1>
          <p className="pt-6 text-gray-800 max-w-md">
            Sign up now and be the first to know about exclusive offers, latest
            fashion news & style tips!
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex justify-center items-center"
        >
          <input
            type="email"
            required
            className="border flex-1 py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white font-roboto uppercase py-2 px-8 rounded-r-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
