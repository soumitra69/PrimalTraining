import { useFormik } from "formik";
import { useState } from "react";
import emailjs from "emailjs-com";
import { signupshema } from "../Schemas";

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

  return (
    <div className="isolate bg-gray-900 px-6 py-24">
      <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
        {/* First Name */}
        <input
          name="firstname"
          placeholder="First Name"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
        />
        {errors.firstname && touched.firstname && (
          <p className="text-red-500 text-sm">{errors.firstname}</p>
        )}

        {/* Last Name */}
        <input
          name="lastname"
          placeholder="Last Name"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
        />
        {errors.lastname && touched.lastname && (
          <p className="text-red-500 text-sm">{errors.lastname}</p>
        )}

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}

        {/* Country */}
        <input
          name="country"
          placeholder="Country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
        />
        {errors.country && touched.country && (
          <p className="text-red-500 text-sm">{errors.country}</p>
        )}

        {/* Phone */}
        <input
          name="phonenumber"
          placeholder="Phone Number"
          value={values.phonenumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
        />
        {errors.phonenumber && touched.phonenumber && (
          <p className="text-red-500 text-sm">{errors.phonenumber}</p>
        )}

        {/* Message */}
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
        />
        {errors.message && touched.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-indigo-500 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Sending..." : "Let's talk"}
        </button>

        {/* Success Message */}
        {success && (
          <div className="rounded-md bg-green-600/20 p-3 text-green-400">
            {success}
          </div>
        )}
      </form>
    </div>
  );
}
