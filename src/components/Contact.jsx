import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ModalComponent from "./ModalComponent";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          to_name: "Deepthi Purijala",
          from_email: values.email,
          to_email: "deepthipurijala@gmail.com",
          message: values.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setIsSuccess(true);
          setModalIsOpen(true);
          resetForm();
        },
        (error) => {
          setLoading(false);
          setIsSuccess(false);
          setModalIsOpen(true);
          console.error(error);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='mt-12 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <Field
                  type='text'
                  name='name'
                  placeholder="What's your good name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
                <ErrorMessage name='name' component='div' className='text-red-500' />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your email</span>
                <Field
                  type='email'
                  name='email'
                  placeholder="What's your web address?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
                <ErrorMessage name='email' component='div' className='text-red-500' />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <Field
                  as='textarea'
                  rows={7}
                  name='message'
                  placeholder='What you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
                <ErrorMessage name='message' component='div' className='text-red-500' />
              </label>

              <button
                type='submit'
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                disabled={isSubmitting}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      <ModalComponent isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} isSuccess={isSuccess} />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");