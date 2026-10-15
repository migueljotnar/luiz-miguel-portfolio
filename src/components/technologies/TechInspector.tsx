import type { ReactNode, Ref } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { getProjectsByTechnology } from '../../lib/technologies';
import type { Technology } from '../../types/portfolio';
import { StatusTag } from '../terminal/StatusTag';
import { TerminalContainer } from '../terminal/TerminalContainer';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { PILL_BASE, PILL_OUTLINE } from '../ui/pill';

interface TechInspectorProps {
  id: string;
  technology: Technology;
  ref?: Ref<HTMLDivElement>;
  /** Abre a seção PROJETOS filtrada por esta tecnologia. */
  onShowProjects: () => void;
}

/** Painel que "abre o arquivo" da tecnologia selecionada: detalhes de uso e projetos vinculados. */
export function TechInspector({ id, technology, ref, onShowProjects }: TechInspectorProps) {
  const projects = getProjectsByTechnology(technology.id);

  return (
    // `aria-live` anuncia a troca de tecnologia para leitores de tela.
    <div ref={ref} id={id} aria-live="polite" className="w-full scroll-mt-4">
      <TerminalContainer title={portfolioData.terminal.windowTitle}>
        <div className="flex flex-col gap-4 text-left">
          <TerminalPrompt path="tecnologias" command={`type ${technology.id}.txt`} />

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            <Field label="NOME">
              <span className="font-semibold text-term-bright">{technology.name}</span>
            </Field>
            <Field label="PACOTE">{technology.packageName}</Field>
            <Field label="CATEGORIA">{technology.category}</Field>
            <Field label="USO">
              <span className="leading-relaxed text-pretty">{technology.description}</span>
            </Field>
            <Field label="PROJETOS">
              {projects.length === 0 ? (
                <span className="text-term-muted">
                  <StatusTag status="info" /> nenhum projeto publicado ainda
                </span>
              ) : (
                <div className="flex flex-col gap-1.5">
                  <span>{projects.length === 1 ? '1 projeto' : `${projects.length} projetos`}</span>
                  <ul className="flex flex-col gap-1 text-term-muted">
                    {projects.map((project) => (
                      <li key={project.id} className="flex gap-2">
                        <span aria-hidden="true" className="shrink-0 text-term-dim">
                          -
                        </span>
                        <span>{project.title}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={onShowProjects}
                    className={`${PILL_BASE} ${PILL_OUTLINE} mt-1 self-start`}
                  >
                    ver em PROJETOS →
                  </button>
                </div>
              )}
            </Field>
          </dl>
        </div>
      </TerminalContainer>
    </div>
  );
}

interface FieldProps {
  label: string;
  children: ReactNode;
}

/** Linha "chave  valor" do painel, como a saída de um comando de sistema. */
function Field({ label, children }: FieldProps) {
  return (
    <>
      <dt className="text-xs leading-5 tracking-widest text-term-dim">{label}</dt>
      <dd className="min-w-0">{children}</dd>
    </>
  );
}
