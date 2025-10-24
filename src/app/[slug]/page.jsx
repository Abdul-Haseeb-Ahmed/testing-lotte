// app/[slug]/page.jsx
import AboutLCPL from "../../Components/CompanyPages/AboutLCPL";
import Vision from "../../Components/CompanyPages/Vision";
import Culture from "../../Components/CompanyPages/Culture";
import LCPLHistory from "../../Components/CompanyPages/LCPLHistory";
import LOTTEGlobal from "../../Components/CompanyPages/LOTTEGlobal";
import LOTTEGroupVision from "../../Components/CompanyPages/LOTTEGroupVision";
import CharlottesStory from "../../Components/CompanyPages/CharlottesStory";

// Products
import PTA from "../../Components/PTAPages/PTA";
import ProcessTechnology from "../../Components/PTAPages/ProcessTechnology";
import Specification from "../../Components/PTAPages/Specification";
import CustomerSatisfaction from "../../Components/PTAPages/CustomerSatisfaction";

// Investors
import InvestorInformation from "../../Components/InvestorPages/InvestorInformation";
import FinancialDocuments from "../../Components/InvestorPages/FinancialDocuments";
import BoardOfDirector from "../../Components/InvestorPages/BoardOfDirector";
import CorporateGovernance from "../../Components/InvestorPages/CorporateGovernance";
import CorporateBriefing from "../../Components/InvestorPages/CorporateBriefing";
import ShareHolding from "../../Components/InvestorPages/ShareHolding";
import FinancialHighlights from "../../Components/InvestorPages/FinancialHighlights";
import Notifications from "../../Components/InvestorPages/Notifications";
import InvestorFeedback from "../../Components/InvestorPages/InvestorFeedback";
import FreeFloat from "../../Components/InvestorPages/FreeFloat";
import GenderPayGap from "../../Components/InvestorPages/GenderPayGap";
import ElectionOfDirectors from "../../Components/InvestorPages/ElectionOfDirectors";
import UnclaimedDividend from "../../Components/InvestorPages/UnclaimedDividend";
import DividendWithheld from "../../Components/InvestorPages/DividendWithheld";
import RequestForm from "../../Components/InvestorPages/StandardRequestForm";

// Career
import CareerGrowth from "../../Components/Career/CareerGrowth";
import Recrutiment from "../../Components/Career/Recrutiment";
import EqualOpportunity from "../../Components/Career/EqualOpportunity";
import TrainingDevelopment from "../../Components/Career/TrainingDevelopment";
import TechnicalTraining from "../../Components/Career/TechnicalTraining";
import CurrentVacancies from "../../Components/Career/CurrentVacancies";
import Support from "../../Components/Career/Support";

// Newsletter
import Newsletter from "../../Components/Newsletter/Newsletter";

// CSR
import CSRInFocus from "../../Components/CSRPages/CSRInFocus";
import Community from "../../Components/CSRPages/Community";
import Education from "../../Components/CSRPages/Education";
import Health from "../../Components/CSRPages/Health";
import Environment from "../../Components/CSRPages/Environment";

// HSE
import HSEInFocus from "../../Components/HSEPages/HSEInFocus";
import HealthSafety from "../../Components/HSEPages/HealthSafety";
import HSEEnvironment from "../../Components/HSEPages/HSEEnvironment";
import Policies from "../../Components/HSEPages/Policies";

import Disclaimer from "@/Components/Footer/Disclamier";

import { notFound } from "next/navigation";

const pageComponents = {
  // Company Pages
  "about-lcpl": AboutLCPL,
  "vision": Vision,
  "culture": Culture,
  "lcpl-history": LCPLHistory,
  "lotte-global": LOTTEGlobal,
  "lotte-group-vision": LOTTEGroupVision,
  "charlottes-story": CharlottesStory,

  // Products Pages
  "pta": PTA,
  "process-technology": ProcessTechnology,
  "specification": Specification,
  "customer-satisfaction": CustomerSatisfaction,

  // Investors Pages
  "investor-information": InvestorInformation,
  "financial-documents": FinancialDocuments,
  "board-of-director": BoardOfDirector,
  "corporate-governance": CorporateGovernance,
  "corporate-briefing": CorporateBriefing,
  "share-holding": ShareHolding,
  "financial-highlights": FinancialHighlights,
  "notifications": Notifications,
  "investor-feedback": InvestorFeedback,
  "free-float": FreeFloat,
  "gender-pay-gap": GenderPayGap,
  "election-of-directors": ElectionOfDirectors,
  "unclaimed-dividend": UnclaimedDividend,
  "dividend-withheld": DividendWithheld,
  "request-form": RequestForm,

  // Career Pages
  "growth": CareerGrowth,
  "recrutiment": Recrutiment,
  "equal-opportunity": EqualOpportunity,
  "training-development": TrainingDevelopment,
  "technical-training": TechnicalTraining,
  "current-vacancies": CurrentVacancies,
  "support": Support,

  // Newsletter
  "newsletter": Newsletter,

  // CSR Pages
  "csr-in-focus": CSRInFocus,
  "community": Community,
  "education": Education,
  "health": Health,
  "environment": Environment,

  // HSE Pages
  "hse-in-focus": HSEInFocus,
  "health-safety": HealthSafety,
  "hse-environment": HSEEnvironment,
  "policies": Policies,

  "disclamier": Disclaimer
};

export async function generateStaticParams() {
  const slugs = Object.keys(pageComponents);
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;

  const Component = pageComponents[slug];

  if (!Component) {
    notFound();
  }

  return <Component />;
}