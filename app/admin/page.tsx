
"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGauge,
  faClipboardList,
  faUsers,
  faFileLines,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

type Inscricao = {
  id: number;
  nome: string;
  email: string;
  tipo: string;
  data: string;
  status: string;
};

const inscricoesIniciais: Inscricao[] = [
  {
  id: 1,
  nome: "Maria Júlia Queiroz",
  email: "beatrizsolangeedesign@gmail.com",
  tipo: "Participante",
  data: "27/10/2026",
  status: "Pendente",
},
  {
    id: 2,
    nome: "Ana Clara Martins",
    email: "ana.clara@email.com",
    tipo: "Participante",
    data: "26/10/2026",
    status: "Em análise",
  },
  {
    id: 3,
    nome: "Isabela Santos",
    email: "isabela@email.com",
    tipo: "Apoiadora",
    data: "25/10/2026",
    status: "Aprovada",
  },
  {
    id: 4,
    nome: "Juliana Oliveira",
    email: "juliana@email.com",
    tipo: "Participante",
    data: "24/10/2026",
    status: "Correção solicitada",
  },
];

const statusDisponiveis = [
  "Pendente",
  "Em análise",
  "Aprovada",
  "Rejeitada",
  "Correção solicitada",
];

export default function AdminPage() {
  const [inscricoes, setInscricoes] =
    useState<Inscricao[]>(inscricoesIniciais);
  const [carregado, setCarregado] = useState(false);


useEffect(() => {
  try {
    const dadosSalvos = localStorage.getItem(
      "apoia-mulher-inscricoes"
    );

    if (dadosSalvos) {
      const inscricoesSalvas: Inscricao[] = JSON.parse(dadosSalvos);

      const inscricoesAtualizadas = inscricoesSalvas.map(
        (inscricao) =>
          inscricao.id === 1
            ? {
                ...inscricao,
                nome: "Maria Júlia Queiroz",
                email: "beatrizsolangeedesign@gmail.com",
                tipo: "Participante",
              }
            : inscricao
      );

      setInscricoes(inscricoesAtualizadas);
    } else {
      setInscricoes(inscricoesIniciais);
    }
  } catch {
    console.error("Não foi possível carregar as inscrições salvas.");
    setInscricoes(inscricoesIniciais);
  } finally {
    setCarregado(true);
  }
}, []);


useEffect(() => {
  if (!carregado) return;

  localStorage.setItem(
    "apoia-mulher-inscricoes",
    JSON.stringify(inscricoes)
  );
}, [inscricoes, carregado]);
    const [busca, setBusca] = useState("");
  const [menuAtivo, setMenuAtivo] = useState("Inscrições");

  const filtradas = inscricoes.filter((inscricao) =>
    `${inscricao.nome} ${inscricao.email}`
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  function alterarStatus(id: number, status: string) {
    setInscricoes((atuais) =>
      atuais.map((inscricao) =>
        inscricao.id === id
          ? { ...inscricao, status }
          : inscricao
      )
    );
  }

  const pendentes = inscricoes.filter(
    (item) => item.status === "Pendente"
  ).length;

  const aprovadas = inscricoes.filter(
    (item) => item.status === "Aprovada"
  ).length;

  const emAnalise = inscricoes.filter(
    (item) => item.status === "Em análise"
  ).length;

const menu = [
  { nome: "Visão geral", icone: faGauge },
  { nome: "Inscrições", icone: faClipboardList },
  { nome: "Participantes", icone: faUsers },
  { nome: "Documentos", icone: faFileLines },
  { nome: "Relatórios", icone: faChartColumn },
];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
       
<div className="admin-brand">
  <div>
    <strong className="brand-name">ApoiaMulherIFB</strong>
    <span>Painel administrativo</span>
  </div>
</div>


        <div className="admin-section-label">MENU PRINCIPAL</div>

        <nav className="admin-nav">
          {menu.map((item) => (
            <button
              key={item.nome}
              onClick={() => setMenuAtivo(item.nome)}
              className={
                menuAtivo === item.nome
                  ? "admin-nav-item active"
                  : "admin-nav-item"
              }
            >
              <span className="nav-icon">
               <FontAwesomeIcon icon={item.icone} />
                </span>
              {item.nome}
              {item.nome === "Inscrições" && pendentes > 0 && (
                <span className="nav-count">{pendentes}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-avatar">AD</div>
          <div className="admin-user-info">
            <strong>Administradora</strong>
            <span>Gestão do projeto</span>
          </div>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="breadcrumb">
              ApoiaMulherIFB / Administração
            </span>
            <h1>{menuAtivo}</h1>
          </div>
          <div className="admin-topbar-right">
            <span className="admin-date">Painel de demonstração</span>
            <div className="admin-avatar top-avatar">AD</div>
          </div>
        </header>

        <section className="admin-welcome">
          <div>
            <h2>Olá, administradora! 👋</h2>
            <p>
              Acompanhe as inscrições e gerencie as solicitações
              do ApoiaMulherIFB.
            </p>
          </div>
          <div className="welcome-decoration">♡</div>
        </section>

        <section className="admin-stats">
          <article className="stat-card">
            <div className="stat-top">
              <span>Total de inscrições</span>
              <div className="stat-icon purple">▤</div>
            </div>
            <strong>{inscricoes.length}</strong>
            <p>Solicitações recebidas</p>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>Pendentes</span>
              <div className="stat-icon yellow">◷</div>
            </div>
            <strong>{pendentes}</strong>
            <p>Aguardando análise</p>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>Em análise</span>
              <div className="stat-icon blue">⌕</div>
            </div>
            <strong>{emAnalise}</strong>
            <p>Em avaliação administrativa</p>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>Aprovadas</span>
              <div className="stat-icon green">✓</div>
            </div>
            <strong>{aprovadas}</strong>
            <p>Solicitações aprovadas</p>
          </article>
        </section>

        {menuAtivo === "Inscrições" ||
        menuAtivo === "Visão geral" ? (
          <section className="admin-panel">
            <div className="panel-heading">
              <div>
                <h2>Inscrições recentes</h2>
                <p>
                  Consulte as solicitações e atualize seus status.
                </p>
              </div>
              <span className="panel-total">
                {filtradas.length} registros
              </span>
            </div>

            <div className="admin-filters">
              <div className="admin-search">
                <span>⌕</span>
                <input
                  type="text"
                  placeholder="Buscar por nome ou e-mail..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
            </div>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>PARTICIPANTE</th>
                    <th>TIPO</th>
                    <th>DATA</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {filtradas.map((inscricao) => (
                    <tr key={inscricao.id}>
                      <td>
                        <div className="participant-cell">
                          <div className="participant-avatar">
                            {inscricao.nome
                              .split(" ")
                              .slice(0, 2)
                              .map((parte) => parte[0])
                              .join("")}
                          </div>
                          <div>
                            <strong>{inscricao.nome}</strong>
                            <span>{inscricao.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>{inscricao.tipo}</td>
                      <td>{inscricao.data}</td>
                      <td>
                        <select
                          value={inscricao.status}
                          onChange={(e) =>
                            alterarStatus(
                              inscricao.id,
                              e.target.value
                            )
                          }
                          className={`status-select status-${inscricao.status
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(/\s+/g, "-")}`}
                          aria-label={`Status de ${inscricao.nome}`}
                        >
                          {statusDisponiveis.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                  {filtradas.length === 0 && (
                    <tr>
                      <td colSpan={4} className="empty-state">
                        Nenhuma inscrição encontrada.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="panel-footer">
              <span>
                Os dados exibidos são fictícios para demonstração.
              </span>
            </div>
          </section>
        ) : (
          <section className="admin-panel placeholder-panel">
            <div className="placeholder-icon">♡</div>
            <h2>{menuAtivo}</h2>
            <p>
              Esta seção será desenvolvida na próxima etapa.
            </p>
            <button
              className="back-button"
              onClick={() => setMenuAtivo("Inscrições")}
            >
              Voltar para inscrições
            </button>
          </section>
        )}

        <footer className="admin-footer">
          ApoiaMulherIFB · Painel administrativo
        </footer>
      </main>

      <style jsx>{`
        .admin-layout {
          --pink: #be89bd;
          --lilac: #937fbe;
          --dark: #303030;
          min-height: 100vh;
          background: #f8f6fa;
          color: var(--dark);
          display: flex;
          font-family: var(--font-urbanist, "Urbanist"), sans-serif;
        }

        .admin-sidebar {
          width: 255px;
          min-width: 255px;
          min-height: 100vh;
          background: #fff;
          border-right: 1px solid #eee8f1;
          padding: 28px 18px 20px;
          display: flex;
          flex-direction: column;
        }

        .admin-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 0 7px 34px;
        }

        .brand-icon {
          width: 43px;
          height: 43px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--pink), var(--lilac));
          color: white;
          display: grid;
          place-items: center;
          font-size: 24px;
          font-weight: 800;
        }

        .admin-brand strong,
        .admin-brand span,
        .admin-user-info strong,
        .admin-user-info span {
          display: block;
        }

      .admin-brand .brand-name {
  display: block;
  font-family: var(--font-vastago, "Vastago Grotesk"), sans-serif;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #BE89BD 0%, #937FBE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
        .admin-brand span {
          margin-top: 4px;
          font-size: 11px;
          color: #918b98;
        }

        .admin-section-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.1px;
          color: #aaa1b0;
          padding: 0 11px;
          margin-bottom: 13px;
        }

        .admin-nav {
          display: grid;
          gap: 7px;
        }

        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          border: 0;
          background: transparent;
          color: #77717f;
          padding: 13px 12px;
          border-radius: 11px;
          text-align: left;
          font: inherit;
          font-size: 13px;
          cursor: pointer;
          transition: 0.2s;
        }

        .admin-nav-item:hover {
          background: #faf6fc;
          color: var(--lilac);
        }

        .admin-nav-item.active {
          background: #f1eaf7;
          color: #765ca3;
          font-weight: 800;
        }

        .nav-icon {
          width: 20px;
          text-align: center;
          font-size: 19px;
        }

        .nav-count {
          margin-left: auto;
          min-width: 22px;
          padding: 3px 6px;
          border-radius: 7px;
          background: #e4d6f0;
          color: #765ca3;
          font-size: 11px;
          text-align: center;
        }

        .admin-sidebar-bottom {
          margin-top: auto;
          border-top: 1px solid #f0eaf2;
          padding: 20px 5px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .admin-avatar {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: #e8d9ef;
          color: #765ca3;
          display: grid;
          place-items: center;
          font-size: 12px;
          font-weight: 800;
        }

        .admin-user-info strong {
          font-size: 12px;
        }

        .admin-user-info span {
          margin-top: 4px;
          font-size: 10px;
          color: #918b98;
        }

        .admin-main {
          min-width: 0;
          flex: 1;
          padding: 0 34px;
        }

        .admin-topbar {
          min-height: 94px;
          border-bottom: 1px solid #eee8f1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .breadcrumb {
          font-size: 11px;
          color: #928a9a;
        }

        .admin-topbar h1 {
          margin: 6px 0 0;
          font-size: 25px;
          letter-spacing: -0.8px;
        }

        .admin-topbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .admin-date {
          font-size: 11px;
          color: #817989;
        }

        .top-avatar {
          width: 36px;
          height: 36px;
        }

        .admin-welcome {
          margin: 27px 0 24px;
          padding: 23px 26px;
          border-radius: 17px;
          background: linear-gradient(110deg, #f0e6f5, #f9eff6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
        }

        .admin-welcome h2 {
          margin: 0;
          font-size: 21px;
          letter-spacing: -0.5px;
        }

        .admin-welcome p {
          margin: 8px 0 0;
          color: #786d7e;
          font-size: 13px;
          line-height: 1.6;
        }

        .welcome-decoration {
          color: #c49bcf;
          font-size: 66px;
          padding-right: 12px;
          line-height: 1;
        }

        .admin-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 25px;
        }

        .stat-card {
          padding: 19px;
          border: 1px solid #eee8f1;
          border-radius: 15px;
          background: #fff;
          min-width: 0;
        }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 7px;
          color: #77717f;
          font-size: 12px;
        }

        .stat-icon {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          font-size: 17px;
        }

        .purple { background: #f0e6f6; color: #8e6cb0; }
        .yellow { background: #fff3d9; color: #bd8d31; }
        .blue { background: #e5efff; color: #648dc6; }
        .green { background: #e2f4e8; color: #50996b; }

        .stat-card > strong {
          display: block;
          margin-top: 16px;
          font-size: 29px;
          letter-spacing: -1px;
        }

        .stat-card > p {
          margin: 5px 0 0;
          font-size: 11px;
          color: #a098a7;
        }

        .admin-panel {
          background: #fff;
          border: 1px solid #eee8f1;
          border-radius: 16px;
          overflow: hidden;
        }

        .panel-heading {
          padding: 23px 23px 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .panel-heading h2,
        .placeholder-panel h2 {
          margin: 0;
          font-size: 17px;
          letter-spacing: -0.4px;
        }

        .panel-heading p {
          margin: 7px 0 0;
          font-size: 12px;
          color: #938a9a;
        }

        .panel-total {
          border-radius: 8px;
          padding: 7px 10px;
          background: #f6f0fa;
          color: #80649e;
          font-size: 11px;
          white-space: nowrap;
        }

        .admin-filters {
          padding: 0 23px 18px;
        }

        .admin-search {
          display: flex;
          align-items: center;
          gap: 9px;
          max-width: 370px;
          padding: 0 12px;
          height: 39px;
          border: 1px solid #eae4ed;
          border-radius: 9px;
          color: #9a8fa4;
        }

        .admin-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #403846;
          font: inherit;
          font-size: 12px;
        }

        .admin-table-wrapper {
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          white-space: nowrap;
        }

        .admin-table thead {
          background: #faf8fb;
        }

        .admin-table th {
          padding: 13px 18px;
          color: #9a92a0;
          font-size: 9px;
          letter-spacing: 0.8px;
          font-weight: 800;
        }

        .admin-table td {
          padding: 15px 18px;
          border-top: 1px solid #f1edf3;
          font-size: 12px;
          color: #716a79;
        }

        .participant-cell {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .participant-avatar {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border-radius: 11px;
          background: #f0e7f5;
          color: #886ba8;
          display: grid;
          place-items: center;
          font-size: 10px;
          font-weight: 800;
        }

        .participant-cell strong,
        .participant-cell span {
          display: block;
        }

        .participant-cell strong {
          color: #413948;
          font-size: 12px;
          font-weight: 800;
        }

        .participant-cell span {
          margin-top: 5px;
          font-size: 10px;
          color: #9b93a1;
        }

        .status-select {
          max-width: 175px;
          padding: 7px 9px;
          border: 1px solid transparent;
          border-radius: 8px;
          font: inherit;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          outline-offset: 2px;
        }

        .status-pendente { background: #fff3d9; color: #9b7424; }
        .status-em-analise { background: #e7efff; color: #5275b2; }
        .status-aprovada { background: #e2f4e8; color: #43835a; }
        .status-rejeitada { background: #fce7e7; color: #b74f58; }
        .status-correcao-solicitada { background: #f1e8fa; color: #8663a7; }

        .empty-state {
          padding: 35px !important;
          text-align: center;
          color: #999 !important;
        }

        .panel-footer {
          padding: 15px 23px;
          border-top: 1px solid #f1edf3;
          color: #a098a7;
          font-size: 10px;
        }

        .placeholder-panel {
          padding: 60px 20px;
          text-align: center;
        }

        .placeholder-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          margin: 0 auto 17px;
          background: #f1e8f7;
          color: #8e6cb0;
          border-radius: 17px;
          font-size: 27px;
        }

        .placeholder-panel p {
          color: #938a9a;
          font-size: 13px;
        }

        .back-button {
          border: 0;
          border-radius: 9px;
          background: #937fbe;
          color: #fff;
          padding: 11px 17px;
          margin-top: 12px;
          font: inherit;
          font-size: 12px;
          cursor: pointer;
        }

        .admin-footer {
          padding: 25px 0;
          text-align: center;
          color: #a098a7;
          font-size: 10px;
        }

        @media (max-width: 1100px) {
          .admin-sidebar {
            width: 215px;
            min-width: 215px;
          }

          .admin-main {
            padding: 0 22px;
          }

          .admin-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .admin-layout {
            display: block;
          }

          .admin-sidebar {
            width: 100%;
            min-width: 0;
            min-height: auto;
            padding: 16px;
            border-right: 0;
            border-bottom: 1px solid #eee8f1;
          }

          .admin-brand {
            padding-bottom: 17px;
          }

          .admin-section-label,
          .admin-sidebar-bottom {
            display: none;
          }

          .admin-nav {
            display: flex;
            overflow-x: auto;
          }

          .admin-nav-item {
            width: auto;
            flex-shrink: 0;
            padding: 10px;
          }

          .nav-count {
            margin-left: 0;
          }

          .admin-main {
            padding: 0 14px;
          }

          .admin-topbar {
            min-height: 82px;
          }

          .admin-topbar h1 {
            font-size: 21px;
          }

          .admin-date {
            display: none;
          }

          .admin-welcome {
            padding: 19px;
          }

          .admin-welcome h2 {
            font-size: 17px;
          }

          .admin-welcome p {
            font-size: 12px;
          }

          .welcome-decoration {
            font-size: 42px;
            padding-right: 0;
          }

          .admin-stats {
            gap: 10px;
          }

          .stat-card {
            padding: 14px;
          }

          .stat-top {
            font-size: 11px;
          }

          .stat-icon {
            width: 29px;
            height: 29px;
          }

          .stat-card > strong {
            font-size: 25px;
          }

          .panel-heading {
            padding: 18px 15px;
          }

          .admin-filters {
            padding: 0 15px 15px;
          }

          .admin-table th,
          .admin-table td {
            padding: 13px;
          }
        }
      `}</style>
    </div>
  );
}
