import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./LayoutEngine.css";

function LayoutEngine(props) {
  const theme = props.theme;

  return (
    <div className="layout-engine-main" style={{ backgroundColor: theme.body }}>
      <Header theme={theme} setTheme={props.setTheme} />
      
      <div className="layout-engine-container">
        <Fade bottom duration={1500} distance="40px">
          <div className="layout-engine-header">
            <h1 className="layout-title" style={{ color: theme.text }}>
              Schema-Driven Layout Engine & Orchestration Platform
            </h1>
            <p className="layout-subtitle" style={{ color: theme.secondaryText }}>
              Decoupling page structures from Next.js deployments to boost UI delivery velocity by 40%.
            </p>
            <div className="layout-tags">
              <span className="layout-tag" style={{ backgroundColor: theme.projectCard, color: theme.text }}>Next.js</span>
              <span className="layout-tag" style={{ backgroundColor: theme.projectCard, color: theme.text }}>React Suspense</span>
              <span className="layout-tag" style={{ backgroundColor: theme.projectCard, color: theme.text }}>Redux Toolkit</span>
              <span className="layout-tag" style={{ backgroundColor: theme.projectCard, color: theme.text }}>Styled Components</span>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1700} distance="40px">
          <div className="layout-engine-body" style={{ color: theme.text }}>
            
            <section className="layout-section">
              <h2 style={{ color: theme.text }}>1. The Challenge of Scale</h2>
              <p style={{ color: theme.secondaryText }}>
                In enterprise SaaS platforms supporting multiple white-label configurations or client portals, hardcoding pages is a major liability. Every custom layout requirement, dashboard tweak, or new form page demands code changes, developer review, testing, and full production deployments. This results in:
              </p>
              <ul style={{ color: theme.secondaryText }}>
                <li>🚀 <strong>High Delivery Friction:</strong> Simple layout tweaks require a full deployment cycle.</li>
                <li>📦 <strong>Bloated Client Bundles:</strong> Monolithic imports load unused page components.</li>
                <li>❌ <strong>Team Bottlenecks:</strong> Multiple product lines stepping on each other during releases.</li>
              </ul>
            </section>

            <section className="layout-section">
              <h2 style={{ color: theme.text }}>2. The Solution: A Declarative UI Engine</h2>
              <p style={{ color: theme.secondaryText }}>
                I designed and implemented a dynamic **layout engine** where pages are represented entirely as structured JSON schemas. Instead of writing rigid React layouts, pages are composed of nested configurations specifying:
              </p>
              <ul style={{ color: theme.secondaryText }}>
                <li><strong>Hierarchy:</strong> Layout containers, columns, blocks, and visual dividers.</li>
                <li><strong>Dynamic Components:</strong> Lazily imported component types (inputs, selects, buttons, graphs).</li>
                <li><strong>Data Operations:</strong> Automatic pre-fetching and data mapping.</li>
                <li><strong>Conditional State Actions:</strong> Interactivity rules (visibility, validation, disables) bound directly to a global Redux store.</li>
              </ul>

              {/* Graphical Architecture Representation */}
              <div className="architecture-viz" style={{ backgroundColor: theme.projectCard }}>
                <div className="viz-box">
                  <div className="viz-title">Routing Check</div>
                  <div className="viz-desc">URL matches pages/[pageSlugMenu]</div>
                </div>
                <div className="viz-arrow">↓</div>
                <div className="viz-box">
                  <div className="viz-title">Schema Resolver & Pre-fetcher</div>
                  <div className="viz-desc">Loads JSON schema & fetches initial API datasets</div>
                </div>
                <div className="viz-arrow">↓</div>
                <div className="viz-box">
                  <div className="viz-title">Component Orchestration</div>
                  <div className="viz-desc">next/dynamic + React.Suspense maps JSON to React instances</div>
                </div>
                <div className="viz-arrow">↓</div>
                <div className="viz-box accent-box" style={{ borderColor: theme.accentColor }}>
                  <div className="viz-title" style={{ color: theme.accentColor }}>Bidirectional State Binding</div>
                  <div className="viz-desc">Redux (pageSlice) tracks dynamic form updates and action rules</div>
                </div>
              </div>
            </section>

            <section className="layout-section">
              <h2 style={{ color: theme.text }}>3. Lazy Loading & Modular Orchestration</h2>
              <p style={{ color: theme.secondaryText }}>
                To avoid a massive bundle penalty, the core orchestration engine (<code>ComponentsInitialize.jsx</code>) utilizes Next.js dynamic imports with React Suspense. Components are split at the bundle level and are only fetched when referenced in the active page's JSON schema.
              </p>
              <div className="code-container" style={{ backgroundColor: theme.projectCard }}>
                <pre><code>{`// Lazy Dynamic Component Imports
const Block = dynamic(() => import("./Block"), { suspense: true });
const PageCalender = dynamic(() => import("../components/Calender/Calender"), { suspense: true });
const PageButton = dynamic(() => import("./PageButton"), { suspense: true });
const PageTextInput = dynamic(() => import("./PageTextInput"), { suspense: true });

const Components = { Block, PageCalender, PageButton, PageTextInput };

const ComponentsInitialize = (props) => {
  if (typeof Components[props.type] !== "undefined") {
    return (
      <Suspense fallback={<RoundedLoader size={16} />}>
        {React.createElement(Components[props.type], {
          key: props.id,
          information: JSON.parse(JSON.stringify(props)),
        })}
      </Suspense>
    );
  }
  return <div>Component not found</div>;
};`}</code></pre>
              </div>
            </section>

            <section className="layout-section">
              <h2 style={{ color: theme.text }}>4. Interactivity via Redux Bindings</h2>
              <p style={{ color: theme.secondaryText }}>
                One of the most complex aspects is dynamic interaction: for example, a button on one part of the page opening a modal or disabling an input on another. The layout engine solves this by using dynamic schemas to drive bidirectional Redux state updates.
              </p>
              <p style={{ color: theme.secondaryText }}>
                A button, input, or checkbox specifies its event triggers in the JSON configuration (such as <code>buttonActionsType: "updateStateValue"</code>). Upon interaction, it dispatches structural updates to the store:
              </p>
              <div className="code-container" style={{ backgroundColor: theme.projectCard }}>
                <pre><code>{`// PageButton.jsx schema action handler
const handleButtonClick = () => {
    if (attr.buttonActionsType === "updateStateValue") {
        attr.conditions?.forEach((cond) => {
            if (cond.operator === "default" && cond.compareWith?.type === "updateStateValue") {
                const { fieldName, fieldValue } = cond.compareWith;
                // Dispatching to Redux slice to trigger layout updates dynamically
                dispatch(updatePageState({ [fieldName]: fieldValue }));
            }
        });
    }
};`}</code></pre>
              </div>
            </section>

            <section className="layout-section">
              <h2 style={{ color: theme.text }}>5. Summary of Impact</h2>
              <div className="impact-grid">
                <div className="impact-card" style={{ backgroundColor: theme.projectCard }}>
                  <div className="impact-val" style={{ color: theme.accentColor }}>40%</div>
                  <div className="impact-label">Acceleration in UI Development Cycle</div>
                </div>
                <div className="impact-card" style={{ backgroundColor: theme.projectCard }}>
                  <div className="impact-val" style={{ color: theme.accentColor }}>Zero</div>
                  <div className="impact-label">Rebuilds required for Layout Adjustments</div>
                </div>
                <div className="impact-card" style={{ backgroundColor: theme.projectCard }}>
                  <div className="impact-val" style={{ color: theme.accentColor }}>Optimal</div>
                  <div className="impact-label">Initial Bundle Sizes via Suspense Splitting</div>
                </div>
              </div>
            </section>

          </div>
        </Fade>
      </div>

      <Footer theme={theme} onToggle={props.onToggle} />
    </div>
  );
}

export default LayoutEngine;
