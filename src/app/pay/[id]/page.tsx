import React from "react";
import Image from "next/image";

import Logo from "@/assets/icons/Logo-main-white.png";
import Link from "next/link";

export default function CheckoutPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-black text-white p-8">
        <Link href="/dashboard">
          <Image src={Logo} alt="Logo" width={150} height={50} />
        </Link>
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Pay for Product Name</h1>
          <h2>ID: {params.id}</h2>
          <h2 className="text-2xl font-bold">Item: Product Name</h2>
          <p className="mt-4">
            Narration: Brief description of the product or service
          </p>
          <p className="mt-2">Type: Product/Service Category</p>
        </div>
      </div>

      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-6">Payment Details</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="currency" className="block mb-2">
              Currency
            </label>
            <select
              id="currency"
              className="w-full p-2 border rounded"
              required
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
