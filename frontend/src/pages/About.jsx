import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        
        This is a Blogging platform.Welcome to Mind Mosaic Blog, a space where thoughts, creativity, and inspiration come together like pieces of a beautiful mosaic. 
      We share insights on travel, books, personal growth, devotion, and motivation, bringing diverse perspectives to enrich your mind. 
      Our goal is to inspire, educate, and spark meaningful conversations through engaging and thought-provoking content. Whether you're seeking wisdom, adventure, or self-discovery, you'll find something here that resonates with you. 
      Join us on this journey of exploration and expression. Let's weave ideas into a masterpiece, one blog at a time! :)
      </p>
      <h2 className="font-semibold text-yellow-300 text-xl">
      A Tapestry of Thoughts & Ideas
      </h2>
      <p>
      Mind Mosaic Blog is a creative space where diverse ideas, experiences, and inspirations come together like pieces of a beautiful mosaic. 
      We aim to provide thought-provoking content that resonates with every reader.
      From Travel & Experiences to Books & Literature, from Personal Growth & Mindfulness to Inspiration & Motivation, our blog covers a wide range of topics to spark curiosity and encourage self-reflection.
      </p>
      <h2 className="font-semibold text-yellow-300 text-xl">
      Inspiring and Engaging Content
      </h2>
      <p>
      Our goal is to inspire, educate, and entertain by sharing stories, reflections, and expert insights.
       Whether you're looking for motivation, self-improvement, or simply an interesting read, we have something for you.
       Mind Mosaic Blog is more than just a collection of articles—it's a community where like-minded individuals come together to share thoughts, engage in discussions, and inspire one another.
      </p>
      
      <h2 className="font-semibold text-yellow-300 text-xl">
      Join the Journey
      </h2>
      <p>
      Explore our blogs, share your thoughts, and be part of this ever-growing mosaic of creativity and wisdom. 
      Let’s weave our ideas into a masterpiece—one blog at a time!
      </p>
    </div>
  );
}

export default About;
