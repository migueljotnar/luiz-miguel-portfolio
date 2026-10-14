import { portfolioData } from '../../data/portfolioData';
import { useTypewriter } from '../../hooks/useTypewriter';
import { getSectionMeta, sectionTitleId } from '../../lib/sections';
import { Section } from '../layout/Section';
import { StatusTag } from '../terminal/StatusTag';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { ButtonLink } from '../ui/ButtonLink';
import { ProfileAvatar } from '../ui/ProfileAvatar';

const SECTION = getSectionMeta('inicio');

/** Seção INÍCIO: foto de perfil, comando de apresentação e resumo profissional. */
export function HeroSection() {
  const { profile, hero } = portfolioData;
  const { education } = profile;
  const { typed, done } = useTypewriter(SECTION.command);

  return (
    <Section id={SECTION.id} className="min-h-[calc(100dvh-var(--header-height))] justify-center">
      <ProfileAvatar photo={profile.photo} name={profile.displayName} />

      <TerminalPrompt command={typed} showCursor />

      {/* A saída fica no DOM desde o início (SEO e leitores de tela); só a opacidade anima. */}
      <div
        className={`flex flex-col items-center gap-3 transition-opacity duration-700 ${
          done ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 id={sectionTitleId(SECTION.id)} className="text-2xl font-bold text-balance text-term-bright sm:text-4xl">
          {profile.fullName}
        </h1>
        <p className="sm:text-lg">{profile.headline}</p>
        <p className="text-sm text-term-muted">
          <StatusTag status="ok" /> {education.level} em {education.degree} ({education.shortName})
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-pretty text-term-muted sm:text-base">{profile.summary}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {hero.actions.map((action) => (
            <ButtonLink key={action.targetId} href={`#${action.targetId}`} emphasis={action.emphasis}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </Section>
  );
}
