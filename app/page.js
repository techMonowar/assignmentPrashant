"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/header';
import { fetchCourseSeries, fetchFaqs, fetchTags } from '@/app/lib/api';

export default function Home() {
  const [courseSeries, setCourseSeries] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const imgDomain = "https://cimg.acharyaprashant.org/";

  function formatHours(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h} Hours ${m} Minutes`;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [courseSeriesData, faqsData, tagsData] = await Promise.all([
          fetchCourseSeries('course-series-eeb9d3'),
          fetchFaqs('english'),
          fetchTags(),
        ]);
        setCourseSeries(courseSeriesData);
        setFaqs(faqsData);
        setTags(tagsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    }

    fetchData();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!courseSeries) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">{courseSeries.details.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
      <Image
  src={`${imgDomain}${courseSeries.details.thumbnail.basePath}/10/image.jpg`}
  alt={courseSeries.title}
  layout="responsive"
  width={100}
  height={56.25} // Adjust height according to the aspect ratio of the image
  className="rounded-lg mb-4"
/>
        <div>
        <h1 className="text-3xl font-bold my-4">{courseSeries.details.subtitle}</h1>
        <p className="text-lg mb-8">{courseSeries.details.description}</p>
        </div>
        </div>



        <section>
          <h2 className="text-2xl font-semibold mb-4">Video series ({courseSeries.details.coursesCount})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseSeries.courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.slug}`} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
             
              <h3 className="text-xl font-medium">{course.title}</h3>
              <p className="text-gray-600">{course.subtitle}</p>
              <p className="text-gray-600">{formatHours(course.courseHours)}</p>
              <p className="text-gray-600">  Contribution: ₹{course.amount} <span className="line-through">₹{course.originalAmount}</span></p>
              <p className="text-gray-600">{course.language}</p>
              
            </Link>
            ))}
          </div>
        </section>





        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <ul className="list-disc list-inside">
            {faqs.map((faq) => (
              <li key={faq.id}>{faq.question}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Tags</h2>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag.id} className="bg-gray-200 rounded-full px-3 py-1">
                {tag.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}