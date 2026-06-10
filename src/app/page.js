import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TKSBox from "@/components/TKSBox";
import SubmitButton from "@/components/SubmitButton";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Top Header with Logos and Title */}
      <section className="conference-header">
        <div className="header-container">
          <div className="header-logo-left">
            <img src="/img/left_logo.png" alt="ISCESTI Logo" />
          </div>

          <div className="header-title-section">
            <h1 className="conference-main-title">
              International Conference on
              <br />
              Innovation and Sustainability in Civil Engineering: Shaping
              Tomorrow’s Infrastructure 2027{" "}
              <span className="conf-year">(ISCESTI-2027)</span>
            </h1>
            <p className="conference-date-text">
              May 27-29, 2027 · Department of Civil Engineering, NIT Patna
            </p>
          </div>
          <div className="header-logo-right">
            <img src="/img/image.webp" alt="NIT Patna Logo" />
          </div>
        </div>
      </section>

      {/* Full Poster Image with Overlay Content */}
      <section className="poster-image-section">
        <div className="poster-image-container">
          <img
            src="/front_page.png"
            alt="ISCESTI 2026 Conference Poster"
            className="full-poster-image"
          />

          {/* Overlay Content */}
          <div className="poster-overlay-content">
            {/* CTA Buttons */}
            <div className="cta-buttons-overlay">
              <SubmitButton />
              <a href="/brochure.pdf" className="btn btn-brochure" download>
                Download Brochure
              </a>
            </div>

            {/* Organizer Information Overlay */}
            <div className="organizer-overlay">
              <p className="organized-by-overlay">Organized by</p>
              <p className="institute-overlay">
                 Department of Civil Engineering
                <br />
                National Institute of Technology Patna, Ashok Rajpath, Patna,
                Bihar, India
              </p>
              <p className="institute-tagline-overlay">
                An Institute of National Importance under Ministry of Education
                (Shiksha Mantralaya), Government of India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Triangle Divider */}
<div class="triangle-divider align-items:center justify-content:center">
  <div class="triangle-text-layer align-items:center justify-content:center">
    <div class="cmt-notice-box ">
      <h2 class="triangle-header">ACKNOWLEDGMENT</h2>
      {/* <!-- The text is split into two valid paragraphs to comply with CMT rules --> */}
      <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference.</p>
      <p>This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
    </div>
  </div>
</div>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="container">
          <h2>About the Conference</h2>
          <div className="intro-content">
            <div className="intro-text">
              <p>
                ISCESTI-2027 brings together researchers, practitioners and
                industry to discuss innovations and sustainability in civil
                engineering. The conference aims to foster knowledge exchange
                across geotechnical, structural, environmental, transportation
                and water resources engineering, and to highlight research that
                supports resilient, low-cost and sustainable infrastructure.
              </p>
              <p>
                The conference will include keynote lectures, technical
                sessions, poster presentations and a field trip for registered
                participants. Selected high-quality papers will be considered
                for publication in indexed proceedings or partner journals.
              </p>
            </div>
            <div className="intro-media">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xIe4k14wh7U?si=vrqB-z6ddCRNg2Vn"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="intro-buttons">
                <a href="/brochure.pdf" className="btn" download>
                  Download Brochure
                </a>
                <a
                  href="https://docs.google.com/document/d/1LoWSV6uDYA3TxyNGTAFu_gzk65qLBEdL/edit?usp=sharing&amp;ouid=108782734878398070057&amp;rtpof=true&amp;sd=true"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Template Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="scope">
        <div className="container">
          <h2>Themes</h2>
          <p>
            The conference covers conceptual and applied topics in civil
            engineering. Key themes include (but are not limited to):
          </p>

          <div className="scope-cards">
            <div className="card">
              <i className="fas fa-archway"></i>
              <h3>Geotechnical & Geo-environmental Engineering</h3>
              <p>
                Soil dynamics, rock mechanics, tunnelling, ground improvement
                and sustainable practices.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-city"></i>
              <h3>Structural Engineering</h3>
              <p>
                Innovative materials, design for resilience, computational
                mechanics and numerical modelling.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-leaf"></i>
              <h3>Water Resources & Hydraulic Engineering</h3>
              <p>
                River hydraulics, hydrological modelling, watershed management
                and climate adaptation.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Transportation & Pavement Engineering</h3>
              <p>
                Traffic modelling, pavement materials, low-cost alternatives and
                sustainable transport solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TKS Sections */}
      <section className="tks-box">
        <p className="key-areas-title">
          <b>Key Areas</b>
        </p>

        {/* First Box - TKS in Architecture */}
        <TKSBox title="TKS in architecture and planning">
          <ol>
            <li>
              <h2>Indigenous Architectural Styles and Practices</h2>
              <ul>
                <li>
                  Study of traditional building techniques, materials, and
                  designs used by indigenous communities.
                </li>
                <li>
                  Influence of climate, geography, and culture on architectural
                  forms.
                </li>
                <li>
                  Vernacular architecture and its sustainable practices in local
                  contexts.
                </li>
              </ul>
            </li>
            <li>
              <h2>
                Sustainable Building Materials in Traditional Architecture
              </h2>
              <ul>
                <li>
                  Use of local, natural materials such as mud, bamboo, timber,
                  and stone in traditional construction.
                </li>
                <li>
                  Benefits of using these materials for energy efficiency and
                  ecological sustainability.
                </li>
                <li>
                  The role of traditional construction in reducing carbon
                  footprints.
                </li>
              </ul>
            </li>
            <li>
              <h2>Traditional Urban Planning and Spatial Organization</h2>
              <ul>
                <li>
                  Indigenous urban planning principles, including village
                  layouts and space usage.
                </li>
                <li>
                  Relationship between natural landscapes, water bodies, and
                  settlement patterns in traditional planning.
                </li>
                <li>
                  Social and cultural dimensions of space in indigenous
                  communities (e.g., sacred spaces, community centers).
                </li>
              </ul>
            </li>
            <li>
              <h2>Climate-Responsive Traditional Architecture</h2>
              <ul>
                <li>
                  How traditional knowledge systems have adapted architecture to
                  different climatic conditions.
                </li>
                <li>
                  Passive design strategies in traditional architecture (e.g.,
                  natural ventilation, thermal mass, shading).
                </li>
                <li>
                  Examples of architectural innovations like courtyards, thick
                  walls, and sloped roofs.
                </li>
              </ul>
            </li>
            <li>
              <h2>
                Integration of Traditional Knowledge in Modern Architecture
              </h2>
              <ul>
                <li>
                  Revitalizing traditional building techniques in contemporary
                  architecture.
                </li>
                <li>
                  Case studies of contemporary buildings that blend traditional
                  knowledge with modern designs.
                </li>
                <li>
                  Challenges and opportunities in integrating traditional
                  knowledge into modern architectural education and practice.
                </li>
              </ul>
            </li>
            <li>
              <h2>Sacred Architecture and Cultural Significance</h2>
              <ul>
                <li>
                  The role of traditional architecture in religious and
                  spiritual practices (e.g., temples, shrines, mosques, etc.).
                </li>
                <li>
                  Symbolism and sacred geometry in indigenous architectural
                  practices.
                </li>
                <li>
                  Conservation and preservation of culturally significant
                  buildings and monuments.
                </li>
              </ul>
            </li>
            <li>
              <h2>Traditional Landscaping and Environmental Planning</h2>
              <ul>
                <li>
                  The relationship between traditional architectural design and
                  landscaping (e.g., traditional gardens, agricultural land
                  use).
                </li>
                <li>
                  Indigenous knowledge of water management and landscape
                  conservation (e.g., rainwater harvesting, terracing,
                  agroforestry).
                </li>
                <li>
                  Use of traditional landscape elements for environmental
                  resilience, such as the preservation of natural habitats and
                  biodiversity.
                </li>
              </ul>
            </li>
            <li>
              <h2>Community-Led Architecture and Participatory Design</h2>
              <ul>
                <li>
                  How indigenous communities have historically contributed to
                  the design and construction of their living spaces.
                </li>
                <li>
                  Participatory design processes and co-creation of spaces with
                  local communities.
                </li>
                <li>
                  The value of community knowledge in shaping architectural
                  forms and urban spaces.
                </li>
              </ul>
            </li>
            <li>
              <h2>Traditional Knowledge and Disaster-Resilient Architecture</h2>
              <ul>
                <li>
                  Traditional building methods for earthquake, flood, and
                  cyclone resistance.
                </li>
                <li>
                  The role of traditional knowledge in designing
                  disaster-resilient communities and structures.
                </li>
                <li>
                  Learning from historical responses to natural disasters and
                  climate-related challenges in indigenous communities.
                </li>
              </ul>
            </li>
            <li>
              <h2>
                Cultural Preservation and Revitalization of Traditional
                Architecture
              </h2>
            </li>
          </ol>
        </TKSBox>

        {/* Second Box - TKS in Engineering */}
        <TKSBox title="Traditional knowledge system in Engineering">
          <ol>
            <li>
              <h2>
                Traditional Building Materials and Techniques in Engineering
              </h2>
              <ul>
                <li>
                  Exploration of indigenous construction materials and
                  traditional building techniques
                </li>
                <li>
                  Traditional water harvesting, storage, and distribution
                  systems used in ancient cultures.
                </li>
                <li>
                  How traditional engineering solutions can address modern water
                  scarcity challenges.
                </li>
                <li>Indigenous Water Management Systems in Engineering</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Knowledge of Renewable Energy Systems</h2>
              <ul>
                <li>
                  Indigenous practices related to energy generation, such as
                  wind, water, and solar energy.
                </li>
                <li>
                  The role of traditional energy systems in sustainable
                  engineering, focusing on off-grid communities.
                </li>
                <li>The use of traditional irrigation techniques.</li>
                <li>
                  Indigenous knowledge of crop rotation, soil conservation, and
                  sustainable farming methods.
                </li>
                <li>
                  The integration of traditional agricultural engineering
                  practices with modern sustainable farming technologies.
                  Traditional Engineering Practices for Disaster-Resilient
                  Infrastructure
                </li>
                <li>
                  Indigenous knowledge in designing disaster-resistant
                  structures (e.g., earthquake-resistant buildings, flood
                  mitigation techniques).
                </li>
                <li>
                  How traditional engineering methods help in creating resilient
                  infrastructure in regions prone to natural disasters.
                </li>
                <li>
                  The role of community-based traditional knowledge in enhancing
                  disaster preparedness and recovery through local engineering
                  solutions.
                </li>
              </ul>
            </li>
          </ol>
        </TKSBox>

        {/* Third Box - Environmental Conservation */}
        <TKSBox title="Traditional Knowledge system in Environmental Conservation">
          <ol>
            <li>
              <h2>Indigenous Approaches to Sustainable Land Management</h2>
              <ul>
                <li>
                  Traditional agricultural practices that promote soil fertility
                  and prevent erosion (e.g., crop rotation, agroforestry,
                  terracing).
                </li>
                <li>
                  Indigenous knowledge of land stewardship and sustainable land
                  use to preserve biodiversity.
                </li>
                <li>
                  Case studies of sustainable land management practices from
                  different regions and cultures.
                </li>
              </ul>
            </li>
            <li>
              <h2>Traditional Water Conservation Techniques</h2>
              <ul>
                <li>
                  Indigenous methods of water management, such as rainwater
                  harvesting, water catchment systems, and canal networks.
                </li>
                <li>
                  The role of community-based water management systems in
                  ensuring equitable access and sustainability.
                </li>
                <li>
                  The impact of traditional water conservation methods on
                  drought-prone areas.
                </li>
              </ul>
            </li>
            <li>
              <h2>Biodiversity Conservation through Indigenous Knowledge</h2>
              <ul>
                <li>
                  Traditional practices of protecting ecosystems and species
                  through sacred groves, tabu areas, and hunting restrictions.
                </li>
                <li>
                  The role of indigenous knowledge in conserving endangered
                  species and their habitats.
                </li>
                <li>
                  Integrating traditional ecological knowledge with modern
                  biodiversity conservation efforts.
                </li>
              </ul>
            </li>
            <li>
              <h2>Sacred Natural Sites and Cultural Heritage Conservation</h2>
              <ul>
                <li>
                  The importance of sacred landscapes, forests, and waters in
                  indigenous cultures and their role in environmental
                  protection.
                </li>
                <li>
                  How the preservation of sacred natural sites contributes to
                  broader conservation goals.
                </li>
                <li>
                  The balance between cultural heritage preservation and
                  environmental sustainability in sacred spaces.
                </li>
              </ul>
            </li>
            <li>
              <h2>
                Traditional Knowledge for Climate Change Adaptation and
                Mitigation
              </h2>
              <ul>
                <li>
                  Indigenous strategies for adapting to climate change based on
                  historical environmental knowledge.
                </li>
                <li>
                  The role of traditional knowledge in building resilience to
                  climate impacts such as flooding, droughts, and extreme
                  weather.
                </li>
                <li>
                  Case studies on the use of traditional knowledge in climate
                  adaptation and mitigation projects.
                </li>
              </ul>
            </li>
            <li>
              <h2>Traditional Knowledge and Ecosystem Restoration</h2>
              <ul>
                <li>
                  Approaches to restoring degraded lands, forests, and
                  ecosystems using traditional methods.
                </li>
                <li>
                  The role of indigenous peoples in the recovery and
                  conservation of critical ecosystems such as wetlands,
                  mangroves, and grasslands.
                </li>
                <li>
                  Traditional ecological knowledge in the context of
                  reforestation and habitat restoration efforts.
                </li>
              </ul>
            </li>
            <li>
              <h2>Traditional Practices in Marine Conservation</h2>
              <ul>
                <li>
                  Indigenous knowledge of sustainable fishing, marine resource
                  management, and conservation of marine ecosystems.
                </li>
                <li>
                  Traditional marine conservation practices, such as seasonal
                  fishing restrictions, taboo areas, and conservation of coral
                  reefs.
                </li>
                <li>
                  The role of indigenous coastal communities in protecting
                  marine biodiversity and ensuring sustainable fisheries.
                </li>
              </ul>
            </li>
            <li>
              <h2>
                Integration of Traditional and Modern Environmental Conservation
                Practices
              </h2>
              <ul>
                <li>
                  The potential for combining traditional ecological knowledge
                  with modern scientific approaches for effective conservation.
                </li>
                <li>
                  Collaborative models between indigenous communities,
                  scientists, and policymakers for integrated conservation
                  strategies.
                </li>
                <li>
                  Challenges and benefits of merging traditional knowledge with
                  contemporary environmental management techniques.
                </li>
              </ul>
            </li>
          </ol>
        </TKSBox>

        {/* Fourth Box - Indian Knowledge System */}
        <TKSBox title="Indian Knowledge System">
          <ol>
            <li>
              <h2>Indian Knowledge System in Planning</h2>
            </li>
            <li>
              <h2>Vaastu Shastra in traditional Architecture and Planning</h2>
              <ul>
                <li>Principles and Foundations of Vastu Shastra</li>
                <li>Vastu and Site Selection in Architecture</li>
                <li>Vastu and Spatial Organization</li>
                <li>Vastu in Residential Architecture</li>
                <li>Vastu in Commercial and Public Buildings</li>
                <li>Vastu and Environmental Integration</li>
                <li>
                  Modern Adaptations of Vastu in Contemporary Architecture
                </li>
                <li>Vastu and Sustainable Design</li>
                <li>Vastu and Interior Design</li>
                <li>Vastu and the Psychology of Space</li>
                <li>Vastu and Urban Planning</li>
                <li>Vastu for Heritage Preservation</li>
              </ul>
            </li>
          </ol>
        </TKSBox>
      </section>

      <Footer />
    </>
  );
}
