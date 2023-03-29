import React from "react";

const Profile = () => {
  return (
    <section className=" bg-orange-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr,2fr] xl:grid-cols-[1fr,3fr] gap-4">
        <div className="bg-green-400 h-28"></div>
        <div className="p-12">
          <h4 className="text-2xl font-semibold text-orange-500 mb-4">
            Personal Information
          </h4>
          <p className="my-6">
            Manage your personal information icluding your phone number, address
            and name . So that you can be contacted. <br />
            !!! Please note that Email can not be changed
          </p>

          {/* user info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white px-6 py-12 border border-orange-500 rounded">
            {/* user name */}
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="inline-block w-[100px]">
                Name :
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded w-full"
              />
            </div>

            {/* user email */}
            <div className="flex justify-between items-center">
              <label htmlFor="email" className="inline-block w-[100px]">
                Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled
                className="rounded w-full bg-orange-50"
              />
            </div>

            {/* user phone */}
            <div className="flex justify-between items-center">
              <label htmlFor="phone" className="inline-block w-[100px]">
                Phone :
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="rounded w-full"
              />
            </div>

            {/* user address */}
            <div className="flex justify-between items-center">
              <label htmlFor="address" className="inline-block w-[100px]">
                Address :
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="rounded w-full"
              />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Update Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
