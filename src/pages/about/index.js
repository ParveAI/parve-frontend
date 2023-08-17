import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | ParveAI</title>
      </Head>
      <div className="w-full min-h-full mt-[120px] flex flex-col items-center justify-center">
        {/* TODO: Rewrite all of this. */}
        <br />
        <br />
        <div className="min-h-full max-w-[900px] px-8 text-zinc-200">
          <p className="min-h-full font-[CabinetGrotesk-ExtraBold] text-3xl max-md:text-2xl">
            <span className="text-4xl text-white">
              About <span className="text-main">Parve AI</span>
            </span>
            <br />
            <br />
            <span className="text-main">Parve AI</span> is a groundbreaking
            project created by two computer science and science students with a
            shared passion for technology, learning, and community
            collaboration. The project originated with the ambition to
            participate in the 'Supabase Launch Week 8 Hackathon' and to
            contribute to the advancement of knowledge dissemination.
            <br />
            <br />
            The inspiration behind <span className="text-main">
              Parve AI
            </span>{" "}
            lies in the convergence of artificial intelligence and the human
            quest for knowledge. By capturing images of written content and
            utilizing AI-driven algorithms,{" "}
            <span className="text-main">Parve AI</span>
            transforms the way we engage with information, providing
            comprehensive solutions and explanations for a diverse range of
            questions spanning various subjects.
            <br />
            <br />
            As advocates of open-source development, we have chosen to make
            Parve AI entirely open-source. All project details, code
            repositories, and related information can be accessed on our GitHub
            repositories and associated accounts. Our commitment to transparency
            and collaboration is a fundamental aspect of our project's ethos.
            <br />
            <br />
            <span className="text-main">Parve AI</span> is a testament to the
            potential of technology to bridge the gap between complex subjects
            and curious minds. Our journey is fueled by the desire to empower
            users with a deeper understanding of the world around them and to
            foster a community where knowledge is accessible, shareable, and
            ever-expanding.
          </p>
          <br />
          <br />
          <div className="min-h-full font-[CabinetGrotesk-Bold] text-2xl">
            <span className="text-3xl font-[CabinetGrotesk-ExtraBold] text-white">
              Abstract
            </span>
            <br />
            <span className="text-main">Parve AI</span> is an innovative
            platform that leverages artificial intelligence to decipher and
            explain the contents of an image containing text. Whether it
            pertains to mathematics, physics, psychology, philosophy, software,
            or any other field, <span className="text-main">Parve AI</span> uses
            advanced AI algorithms to analyze and solve questions embedded
            within the image, providing detailed explanations for the answers.
            <br />
            <br />
            <span className="text-3xl font-[CabinetGrotesk-ExtraBold] text-white">
              Introduction
            </span>
            <br />
            <span className="text-main">Parve AI</span> redefines the way we
            interact with written content by seamlessly blending cutting-edge
            technology and human curiosity. By harnessing the power of AI, this
            platform empowers users to capture images of written material and
            gain insightful explanations for complex queries across diverse
            subjects.
            <br />
            <br />
            <span className="text-3xl font-[CabinetGrotesk-ExtraBold] text-white">
              Key Features
            </span>
            <br />
            Image-based Question Solving: Users capture images of text, and
            Parve AI employs state-of-the-art artificial intelligence to
            understand and solve questions, ensuring comprehensive explanations
            for each answer.
            <br />
            <br />
            Collective Knowledge: <span className="text-main">
              Parve AI
            </span>{" "}
            allows users to organize and categorize their questions through
            customizable collection pages, streamlining information retrieval
            and organization.
            <br />
            <br />
            Community Interaction: Users can explore other users' questions,
            solutions, and profiles, fostering a collaborative environment that
            encourages knowledge sharing and learning.
            <br />
            <br />
            Video Explanations: <span className="text-main">Parve AI</span>'s
            future roadmap includes the integration of AI-generated video
            explanations for answers, enhancing the learning experience through
            engaging multimedia content.
            <br />
            <br />
            <span className="text-3xl font-[CabinetGrotesk-ExtraBold] text-white">
              Technological Stack
            </span>
            <br />
            <span className="text-main">Parve AI</span> is built upon a robust
            technological foundation, including:
            <br />
            <br />
            Supabase Edge Functions: Leveraging Supabase's edge functions to
            enhance platform responsiveness and user experience. Supabase Auth:
            Ensuring secure user authentication and seamless access to the
            platform's features. Supabase Database: Storing and retrieving user
            data efficiently and reliably. Supabase Storage: Managing image
            storage and retrieval seamlessly within the Supabase ecosystem.
            Cloudflare Workers: Optimizing performance and delivering content
            efficiently through Cloudflare's serverless platform. Cloudflare CDN
            Solutions: Accelerating content delivery to users worldwide using
            Cloudflare's content delivery network. Cloudflare Pages: Hosting and
            deploying the <span className="text-main">Parve AI</span> web
            application with ease and reliability. Vercel: Utilizing Vercel's
            platform for continuous deployment and efficient front-end hosting.
            OpenAI: Harnessing the capabilities of OpenAI to enhance AI-driven
            question-solving and explanation generation. Open Source Philosophy{" "}
            <span className="text-main">Parve AI</span> is committed to
            open-source principles, with all project details available on our
            GitHub repositories and associated accounts. This project was
            conceived by two passionate computer science and science students
            with the goal of participating in the 'Supabase Launch Week 8
            Hackathon' and providing assistance to the community.
            <br />
            <br />
            <span className="text-3xl font-[CabinetGrotesk-ExtraBold] text-white">
              Future Developments
            </span>
            <br />
            In the future, <span className="text-main">Parve AI</span> envisions
            introducing exciting features, including collection pages for
            organizing questions, profile pages for connecting with other users,
            and AI-generated video explanations for answers, taking user
            engagement and learning to new heights.
            <br />
            <br />
            <span className="text-main">Parve AI</span> is more than just a
            platform; it's a gateway to understanding and exploration, uniting
            the realms of technology and knowledge in an innovative and
            user-centric manner.
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
