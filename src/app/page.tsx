import { MainLayout } from "../layouts/main/main-layout";
import { SkillCard } from "../components/skill-card/skill-card";
import { WorkCard} from "../components/work_card/work_card";

const skills = [
  {
    title: "Next.js",
    description:
      "ページ作成、ルーティング、コンポーネント分割を練習しています。",
  },
  {
    title: "Tailwind CSS",
    description: "classNameを使って、余白、色、レイアウトを調整できます。",
  },
  {
    title: "GitHub",
    description: "ブランチ、コミット、push、PR作成を練習しています。",
  },
];

const works = [
  {
    title: "Portfolio Site",
    description: "自分のプロフィール、スキル、制作物をまとめるサイトです。",
    href: "#",
  },
  {
    title: "Todo App",
    description: "タスクの追加、完了、削除ができる練習用アプリです。",
    href: "#",
  },
];



export default function Home() {
  return (
    <MainLayout>
      <div className="bg-neutral-900">
      <div className='mx-auto w-full flex max-w-5xl flex-col gap-16 px-6 py-12'>
        <section className='rounded-2xl bg-neutral-600 px-8 py-16 text-white'>
          <p className='text-sm font-bold text-sky-300'>Portfolio</p>
          <h1 className='mt-4 text-4xl font-bold'>Hello,World I am Tasuki Kurihara</h1>
          <p className='mt-4 max-w-2xl text-neutral-300'>Next.jsとTailwind CSSを使って、ポートフォリオを作っています。</p>
        </section>

        <section id='skills'>
          <h2 className='text-3xl font-bold text-sky-500'>Skills</h2>
          <div className='grid gap-4 mt-6 md:grid-cols-3'>
            {skills.map((skill) => (
              <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              />
            ))}
          </div>
        </section>
        <section id='works'>
          <h2 className='text-2xl font-bold text-white'>Works</h2>
           <div className='mt-6 grid gap-4 md:grid-cols-2'>
            {works.map((work) => (
              <WorkCard
              key={work.title}
               title={work.title}
                description={work.description}
                href={work.href}
               />
            ))}
          </div>
        </section>
      </div>
      </div>
    </MainLayout>
  );
}
