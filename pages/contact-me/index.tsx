/* eslint-disable @next/next/no-img-element */
import { Layout } from "../../components/Layout";
import { Text } from "../../components/Text";
import {
  getPersonalInfo,
  getPersonalLinks,
  LinkInfo,
  PersonalInfo,
} from "../api/data";

import styles from "./styles.module.scss";

type Props = {
  personalInfo: PersonalInfo;
  links: LinkInfo[];
};

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      personalInfo: getPersonalInfo(),
      links: getPersonalLinks(),
    },
  };
}

export default function ContactMe({ personalInfo, links }: Props) {
  return (
    <Layout title={`Contact me`} personalInfo={personalInfo}>
      <div>
        You can find me almost everywhere by{" "}
        <Text highlight>{personalInfo.nickname}</Text> nickname
      </div>
      <div>
        <div className={styles.links}>
          {links.map(({ label, url, img }) => (
            <a
              key={label}
              href={url}
              title={label}
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={img} alt={label} />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
