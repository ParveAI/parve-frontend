import Head from "next/head";
import { useRouter } from "next/router";
export default function Collection() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | Collection</title>
      </Head>
      <div className="w-full h-full flex items-center justify-center text-white">
        <h1>{slug}</h1>
      </div>
    </>
  );
}
