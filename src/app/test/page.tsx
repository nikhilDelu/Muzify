"use client";

const page = () => {
  return <div>{JSON.stringify(process.env.TOAPI)}</div>;
};

export default page;
