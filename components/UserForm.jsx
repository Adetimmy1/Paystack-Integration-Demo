import Image from "next/image";
import logo from "@/public/360 logo.jpg";
import { PaystackButton } from "react-paystack";
import { useState } from "react";

const UserForm = () => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    amount: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY;

  const paystackProps = {
    reference: new Date().getTime().toString(),
    email: form.email,
    amount: form.amount * 100,
    metadata: {
      name: form.name,
      phone: form.phone,
    },
    publicKey,
    text: "Donate",
    onSuccess: (reference) => console.log(reference),
    // onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="h-[400px] min-w-[380px] bg-slate-400 rounded-2xl flex flex-col p-5">
        <div className="w-full flex justify-center">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={logo}
              alt="logo"
              className="object-cover aspect-square"
            />
          </div>
        </div>

        <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col">
            <label htmlFor="name">Full Name:</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={form.name}
              className="rounded h-8 text-black indent-2 focus:outline-green-700"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="mail">Email:</label>
            <input
              required
              type="email"
              id="mail"
              name="email"
              value={form.email}
              className="rounded h-8 text-black indent-2 focus:outline-green-700"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tel">Phone Number:</label>
            <input
              required
              type="tel"
              id="tel"
              name="phone"
              value={form.phone}
              className="rounded h-8 text-black indent-2 focus:outline-green-700"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="amt">Amount:</label>
            <input
              required
              type="amt"
              id="amt"
              name="amount"
              value={form.amount}
              className="rounded h-8 text-black indent-2 focus:outline-green-700"
              onChange={onChange}
            />
          </div>

          <div className="w-full flex justify-center mt-2">
            <button className=" rounded-3xl bg-blue-600 py-2 px-3.5">
              <PaystackButton className="paystack-button" {...paystackProps} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserForm;
