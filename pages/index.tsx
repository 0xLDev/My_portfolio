import { Layout } from "../components/Layout";

import { getPersonalInfo, PersonalInfo } from "./api/data";

type Props = {
  personalInfo: PersonalInfo;
};

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      personalInfo: getPersonalInfo(),
    },
  };
}

export default function Home({ personalInfo }: Props) {
  return <Layout personalInfo={personalInfo} />;
}
