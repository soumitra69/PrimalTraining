import { useFormik } from "formik";
import { useState } from "react";
import emailjs from "emailjs-com";
import { signupshema } from "../Schemas";
import Reveal from "./Reveal";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  country: "",
  phonenumber: "",
  message: "",
};

export default function ContactForm() {
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupshema,
      onSubmit: (values, actions) => {
        setLoading(true);

        emailjs
          .send(
            "service_au7r4zp", // ✅ Service ID
            "template_ngeaxrf", // ✅ Template ID
            values, // ✅ Form data
            "sVSfrWxPvHB6bSBOK" // ✅ Public Key
          )
          .then(() => {
            setSuccess("✅ Message sent successfully!");
            actions.resetForm();
          })
          .catch(() => {
            setSuccess("❌ Failed to send message. Try again!");
          })
          .finally(() => {
            setLoading(false);
            setTimeout(() => setSuccess(""), 3000);
          });
      },
    });

  const inputClass =
    "w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-gray-400 hover:bg-white/10 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-[#808CFD] focus:border-transparent focus:bg-white/10 transition-all duration-300";

  return (
    <div
      id="contact"
      className="isolate bg-gray-900 px-6 py-20"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <Reveal variant="fade-up">
        <div className="mx-auto max-w-xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
            GET IN <span className="text-[#808CFD]">TOUCH</span>
          </h2>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Ready to start your fitness journey? Drop us a message below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
          {/* First Name */}
          <div>
            <input
              name="firstname"
              placeholder="First Name"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass}
            />
            {errors.firstname && touched.firstname && (
              <p className="text-red-400 text-sm mt-1">{errors.firstname}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              name="lastname"
              placeholder="Last Name"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass}
            />
            {errors.lastname && touched.lastname && (
              <p className="text-red-400 text-sm mt-1">{errors.lastname}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass}
            />
            {errors.email && touched.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <input
              name="country"
              placeholder="Country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass}
            />
            {errors.country && touched.country && (
              <p className="text-red-400 text-sm mt-1">{errors.country}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              name="phonenumber"
              placeholder="Phone Number"
              value={values.phonenumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass}
            />
            {errors.phonenumber && touched.phonenumber && (
              <p className="text-red-400 text-sm mt-1">{errors.phonenumber}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass}
            />
            {errors.message && touched.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[#808CFD] hover:bg-[#6875f7] py-3 font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#808CFD]/30 active:translate-y-0 active:scale-[0.99] transition-all duration-300 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Sending..." : "Let's talk"}
          </button>

          {/* Success Message */}
          {success && (
            <div className="rounded-md bg-green-600/20 border border-green-500/30 p-3 text-green-400 text-center transition-all duration-300">
              {success}
            </div>
          )}
        </form>
      </Reveal>
    </div>
  );
}
