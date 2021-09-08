import { Layout } from "../../components/Layout";
import { DateFormat, formatDate } from "../../utils/date";
import {
  getPersonalInfo,
  getPersonalSkills,
  LinkInfo,
  PersonalInfo,
} from "../api/data";

import styles from "./styles.module.scss";

type Props = {
  personalInfo: PersonalInfo;
  skills: LinkInfo[];
  birthYear: string;
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const personalInfo = getPersonalInfo();

  return {
    props: {
      personalInfo,
      skills: getPersonalSkills(),
      birthYear: formatDate(personalInfo.birthDate, DateFormat.FullYear),
    },
  };
}

export default function AboutMe({ personalInfo, birthYear, skills }: Props) {
  return (
    <Layout title={`About me`} personalInfo={personalInfo}>
      <p>
        I was born in {personalInfo.birthCity}, {personalInfo.birthCountry}, in{" "}
        {birthYear}.
      </p>
      {!!skills.length && (
        <p>
          Skills:{" "}
          <div className={styles.skills}>
            {skills.map((skill) => (
              <a
                key={skill.label}
                href={skill.url}
                title={skill.label}
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={skill.img} alt={skill.label} />
              </a>
            ))}
          </div>
        </p>
      )}
    </Layout>
  );
}
