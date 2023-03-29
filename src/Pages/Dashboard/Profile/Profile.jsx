import React from "react";

const Profile = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr,2fr] xl:grid-cols-[1fr,3fr] gap-4">
      <div className="bg-green-400 h-28"></div>
      <div className="">
        <h4 className="text-2xl font-semibold text-orange-500 mb-4">
          Personal Information
        </h4>

        {/* user info */}
        <div></div>
      </div>
    </section>
  );
};

export default Profile;
