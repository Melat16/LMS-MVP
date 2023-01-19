import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import PackageDetail from "../components/PackageDetail";

export default function Detail() {
  const router = useRouter();
  const { subpackage } = router.query;
  return (
    <>
      <Head>
        <title>LUCY - Package Detail</title>
      </Head>
      <div className="pt-32 bg-white">
        <PackageDetail packageName={subpackage} />
      </div>
    </>
  );
}
