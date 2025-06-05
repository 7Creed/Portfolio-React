import React from "react";
import LeftSideBar from "../LeftSideBar";
import RightSideBar from "../RightSideBar";
import HomeLayout from "@/layouts/HomeLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "../ui/button";
import { pricingPlans, services, testimonials } from "@/data/data";
import { Star } from "lucide-react";
import Footer from "../Footer";
import { useState } from "react";

import profilePic2 from "../../assets/images/profilePics2.png";
import TajNetwork from "../../assets/images/TajNetworkLogo.png";
import AxiaAfrica from "../../assets/images/AxiaLogo.png";
import AKA from "../../assets/images/AKALogo.jpg";
import Kodecamp from "../../assets/images/kodecampLogo.jpg";
import GreenLight from "../../assets/images/GreenLightLogo.png";

const Home = () => {
  // const rating = testimonials.map((test) => test.rating);
  const stars = [];
  console.log(testimonials);

  // console.log(rating);

  for (let i = 1; i <= 5; i++) {
    console.log(testimonials[i]);
    // if (testimonials[i])
  }

  return (
    <HomeLayout>
      <section className="py-10">
        <div className="flex border-2 border-green-400 bg-gray-950 bg-opacity-50 text-white">
          <div className="flex flex-col justify-center items-center pl-10 relative z-10">
            <h1 className="text-4xl font-black text-center">
              What&apos;s on Your Mind? Let&apos;s Bring it To Reality
            </h1>
            <h1 className="text-3xl font-black text-center">
              Hey there, I&apos;m{" "}
              <span className="underline text-[#4ce19e]">Frank Obika</span> and
              I do everything frontend.
            </h1>
            <Button className="mt-4">Explore Now</Button>
          </div>
          <div className="-ml-5">
            <img
              className="w-[250px] bg-blend-lighten"
              src={profilePic2}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-5 mt-5 mb-15 text-white">
        <div className="flex items-center bg-gray-950 bg-opacity-50 px-4 py-2 gap-2 rounded-3xl">
          <h1 className="text-2xl text-green-400 font-bold">3+</h1>
          <p className="font-bold">Years Experience</p>
        </div>
        <div className="flex items-center bg-gray-950 bg-opacity-50 px-4 py-2 gap-2 rounded-3xl">
          <h1 className="text-2xl text-green-400 font-bold">14</h1>
          <p className="font-bold">Completed Projects</p>
        </div>
        <div className="flex items-center bg-gray-950 bg-opacity-50 px-4 py-2 gap-2 rounded-3xl">
          <h1 className="text-2xl text-green-400 font-bold">45</h1>
          <p className="font-bold">Happy customers</p>
        </div>
        <div className="flex items-center bg-gray-950 bg-opacity-50 px-4 py-2 gap-2 rounded-3xl">
          <h1 className="text-2xl text-green-400 font-bold">5</h1>
          <p className="font-bold">Honors and Awards</p>
        </div>
      </section>

      <section className="">
        <h2 className="text-3xl font-bold text-center text-white">
          My Services
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card key={service.id} className="bg-slate-950">
              <CardHeader>
                <CardTitle className="text-gray-100">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
                <Button variant="link" className="mt-2 text-yellow-500">
                  Order Now →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-4 space-y-5 my-15">
        <h2 className="text-3xl font-bold text-center text-white">
          Training Price Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingPlans.map((plan) => (
            <Card key={plan.title} className="bg-slate-950">
              <CardHeader>
                <CardTitle className="text-gray-100">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="text-4xl font-bold text-gray-50">
                  {plan.price}
                  <span className="text-lg">/hour</span>
                </p>
                {plan.features.map((feature, idx) => (
                  <ul key={idx} className="space-y-2 mt-4 text-gray-100">
                    &#10004; {feature}
                  </ul>
                ))}
              </CardContent>
              <Button className="w-[80%] mx-auto mt-4 bg-yellow-500 text-black">
                ORDER NOW
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-4 space-y-5 mb-15">
        <h2 className="text-3xl font-bold text-center text-white">
          Recommendations
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((test, idx) => (
            <Card
              key={test.name}
              className="bg-slate-950 border-none rounded-xl p-6"
            >
              <div className="">
                {/* <img src="/avatar1.jpg" className="w-12 h-12 rounded-full" alt="John Smith" /> */}

                <div>
                  <h3 className="font-bold text-gray-100">{test.name}</h3>
                  <p className="text-sm italic text-gray-100">{test.role}</p>
                </div>
                <CardContent>
                  <p className="mt-4 text-gray-300">{test.message}</p>
                </CardContent>
                <div className="flex mt-4 bg-gray-950 w-[60%] px-4 rounded-4xl gap-1">
                  {
                    Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={
                          idx < test.rating
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }
                        fill={idx < test.rating ? "yellow" : "none"}
                      />
                    ))

                    // [...Array(5)].map((_, idx) => (
                    // ))
                  }
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="" className="text-6xl text-center p-12">
        Space for Logos
        <div className="flex flex-wrap justify-between items-center gap-4 w-[75%] mx-auto">
          <img src={Kodecamp} alt="" className="rounded-2xl w-[80px]" />
          <img src={TajNetwork} alt="" className="rounded-2xl w-[80px]" />
          <img src={AKA} alt="" className="rounded-2xl w-[80px]" />
          <img src={GreenLight} alt="" className="rounded-2xl w-[80px]" />
          <img src={AxiaAfrica} alt="" className="rounded-2xl w-[80px]" />
        </div>
      </section>

      <Footer />
    </HomeLayout>
  );
};

export default Home;
