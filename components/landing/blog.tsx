"use client";

import { blogPosts } from "@/constants/blogs";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function useIntersectionVisible() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible] as const;
}

const Blogs = () => {
  const [containerRef, isVisible] = useIntersectionVisible();

  return (
    <div className="bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-6xl mx-auto py-12 md:py-24 px-6 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-slate-900">
              Blogs
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Carry Dashen Super App with you wherever you go. Our mobile app
              provides a smooth and secure banking experience.
            </p>
          </div>
          <Link
            href={"/features"}
            className="flex text-primary font-medium text-sm items-center gap-1 border py-3 px-6 rounded-full hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 group whitespace-nowrap bg-white shadow-xs"
          >
            See All Blogs{" "}
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Blogs Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-9 gap-6 mt-12"
        >
          {blogPosts.map((blog, index) => (
            <Link
              href={blog.url}
              key={blog.title}
              className={`group bg-white p-4 border border-slate-100 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-5 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-200/60 transition-all duration-500 ease-out select-none col-span-1 md:col-span-6 ${
                index === 0 || index === 3 ? "lg:col-span-5" : "lg:col-span-4"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg sm:h-full min-h-45 sm:min-h-0">
                <Image
                  alt={blog.title}
                  src={blog.image}
                  fill
                  className="object-cover rounded-lg transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight text-slate-900 line-clamp-2 transition-colors duration-300 group-hover:text-[#0D39A5]">
                  {blog.title}
                </h3>
                <p className="text-xs line-clamp-3 sm:line-clamp-5 text-zinc-500 leading-relaxed">
                  {blog.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4 sm:mt-auto pt-4 border-t border-slate-50">
                  <p className="text-[10px] text-slate-500 flex items-center gap-1.5">
                    <Calendar size={14} className="text-slate-400" />
                    {blog.date}
                  </p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-400" />
                    {blog.readTime}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
