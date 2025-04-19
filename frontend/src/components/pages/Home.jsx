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
        <div className="border-2 bg-gray-950 opacity-50">
          <h1 className="text-3xl font-bold text-center">
            What&apos;s on Your Mind? Let&apos;s Bring it To Reality
          </h1>
          <h1 className="text-2xl font-bold text-center">
            Hey there, I&apos;m{" "}
            <span className="underline text-[#4ce19e;]">Frank Obika</span> and I
            do everything frontend.
          </h1>
          <Button className="mt-4">Explore Now</Button>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="bg-gray-800">
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
      </section>

      <section className="p-4 space-y-12">
        <h2 className="text-3xl font-bold text-center">Training Price Plan</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingPlans.map((plan) => (
            <Card key={plan.title} className="">
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">
                  {plan.price}
                  <span className="text-lg">/hour</span>
                </p>
                {plan.features.map((feature, idx) => (
                  <ul key={idx} className="space-y-2 mt-4">
                    &#10004; {feature}
                  </ul>
                ))}
              </CardContent>
              <Button className="w-full mt-4 bg-yellow-500 text-black">
                ORDER NOW
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-4 space-y-12">
        <h2 className="text-3xl font-bold text-center">Recommendations</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((test, idx) => (
            <Card
              key={test.name}
              className="bg-gray-800 text-white border-none p-6"
            >
              <div className="">
                {/* <img src="/avatar1.jpg" className="w-12 h-12 rounded-full" alt="John Smith" /> */}

                <div>
                  <h3 className="font-bold">{test.name}</h3>
                  <p className="text-sm italic">{test.role}</p>
                </div>
                <CardContent>
                  <p className="mt-4">{test.message}</p>
                </CardContent>
                <div className="flex mt-4 bg-gray-950 w-[60%] px-6 rounded-4xl gap-1">
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

      <section id="" className="text-6xl text-center p-8">
        Space for Logos
      </section>

      <Footer />
    </HomeLayout>
  );
};

export default Home;
