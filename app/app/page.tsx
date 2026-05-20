import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  Target,
  Workflow
} from "lucide-react";

const metrics = [
  { label: "Capital Strategy", value: "Private" },
  { label: "Deal Focus", value: "Real Estate" },
  { label: "Approach", value: "Structured" },
  { label: "Client Standard", value: "Discreet" }
];

const services = [
  {
    icon: Landmark,
    title: "Private Lending Relationships",
    description:
      "Relationship-driven capital placement for qualified borrowers, operators, and real estate investors."
  },
  {
    icon: Building2,
    title: "Real Estate Capital Structuring",
    description:
      "Strategic support for acquisitions, refinances, development opportunities, and asset-backed transactions."
  },
  {
    icon: Workflow,
    title: "Creative Finance Solutions",
    description:
      "Deal architecture designed around timing, collateral, capital stack complexity, and execution risk."
  },
  {
    icon: BarChart3,
    title: "Acquisition Advisory",
    description:
      "Analytical review of opportunity structure, financing pathways, positioning, and exit logic."
  }
];

const process = [
  "Review the opportunity and capital objective",
  "Analyze collateral, risk, timing, and transaction structure",
  "Position the deal for appropriate capital relationships",
  "Coordinate next steps with discretion and documentation discipline"
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="brandMark">VC</div>
          <div>
            <p className="brandName">Viper Capital</p>
            <p className="brandSub">Private Capital Advisory</p>
          </div>
        </div>

        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Private Capital · Real Estate · Strategic Finance</p>

          <h1>
            Capital strategy for complex real estate and private finance
            opportunities.
          </h1>

          <p className="heroText">
            Viper Capital is a private capital advisory concept built for
            operators, investors, and borrowers who need disciplined deal
            structuring, discreet relationship management, and thoughtful
            capital placement support.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#contact">
              Request a Private Review <ArrowRight size={18} />
            </a>
            <a className="secondaryButton" href="#services">
              View Services
            </a>
          </div>
        </div>

        <div className="heroPanel">
          <div className="panelHeader">
            <ShieldCheck size={22} />
            <span>Operating Standard</span>
          </div>

          <h2>Discreet. Analytical. Relationship-first.</h2>

          <p>
            Built for transactions where trust, structure, timing, and capital
            alignment matter more than noise.
          </p>

          <div className="panelGrid">
            <div>
              <span>Risk Review</span>
              <strong>Structured</strong>
            </div>
            <div>
              <span>Capital Path</span>
              <strong>Strategic</strong>
            </div>
            <div>
              <span>Communication</span>
              <strong>Private</strong>
            </div>
            <div>
              <span>Execution</span>
              <strong>Measured</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="metricsStrip">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="sectionIntro">
          <p className="eyebrow">Capabilities</p>
          <h2>Private capital support with institutional discipline.</h2>
          <p>
            A clean advisory framework for capital placement, borrower
            positioning, real estate finance, and acquisition-oriented
            structuring.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="serviceCard" key={service.title}>
                <div className="iconWrap">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="splitSection" id="process">
        <div>
          <p className="eyebrow">Process</p>
          <h2>A calmer way to evaluate capital opportunities.</h2>
          <p>
            The objective is not to chase every deal. The objective is to
            understand the transaction, identify the right capital path, and
            protect credibility through disciplined execution.
          </p>

          <div className="principles">
            <div>
              <LockKeyhole size={20} />
              <span>Confidential review</span>
            </div>
            <div>
              <Target size={20} />
              <span>Strategic positioning</span>
            </div>
            <div>
              <CircleDollarSign size={20} />
              <span>Capital stack awareness</span>
            </div>
          </div>
        </div>

        <div className="processCard">
          {process.map((item, index) => (
            <div className="processStep" key={item}>
              <div className="stepNumber">{index + 1}</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section darkSection">
        <div className="sectionIntro">
          <p className="eyebrow">Transaction Focus</p>
          <h2>Designed for serious conversations, not mass-market noise.</h2>
          <p>
            This example layout is intentionally conservative, high-trust, and
            finance-oriented. It can later be connected to a database, AI
            dashboards, lead intake forms, and private investor pages.
          </p>
        </div>

        <div className="checkGrid">
          {[
            "Asset-backed lending scenarios",
            "Real estate acquisition opportunities",
            "Private investor relationship management",
            "Borrower intake and deal qualification",
            "Monthly market commentary",
            "Internal pipeline dashboards"
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div>
          <p className="eyebrow">Private Review</p>
          <h2>Have a capital opportunity worth evaluating?</h2>
          <p>
            Submit a brief overview of the transaction, capital need, collateral
            position, and timing requirement.
          </p>
        </div>

        <a className="primaryButton" href="mailto:info@example.com">
          Begin Review <ArrowRight size={18} />
        </a>
      </section>

      <footer>
        <div>
          <strong>Viper Capital</strong>
          <p>Private Capital Advisory · Strategic Finance · Real Estate</p>
        </div>

        <p className="disclaimer">
          Example website only. Viper Capital is a placeholder brand. This page
          does not offer securities, investment advice, legal advice, or lending
          commitments.
        </p>
      </footer>
    </main>
  );
}
