import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Portfolio',
  description: 'Projects and research work in AI, machine learning, geospatial analysis, and disaster analytics.',
  path: '/portfolio',
});

const projects = {
  funded: [
    {
      title: 'Disruption Identification and Dynamic Mapping During Disasters',
      description: 'Developed document classification and deep learning models to identify infrastructure disruptions during disasters using streaming Twitter data. Funded by the National Science Foundation (NSF) ORDER-CRISP project.',
      tags: ['Deep Learning', 'NLP', 'Python', 'Keras', 'Sklearn'],
      year: '2020',
      link: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/mice.12573',
      category: 'NSF Funded',
    },
    {
      title: 'Modeling the Dynamics of Hurricane Evacuation',
      description: 'Built Hidden Markov Models and activity classification systems to understand evacuation behavior patterns using Twitter data, demographic information, and hurricane data. Funded by the Southeast Transportation Center.',
      tags: ['Hidden Markov Model', 'Semi-supervised Learning', 'Python', 'ArcPy'],
      year: '2019',
      link: 'https://trid.trb.org/view/1573010',
      category: 'UTC Funded',
    },
    {
      title: 'Quantifying Human Mobility Resilience',
      description: 'Developed a novel approach to detect events and measure resilience using geo-tagged Twitter data. Published in EPJ Data Science.',
      tags: ['Resilience Analysis', 'Geospatial', 'Python', 'Event Detection'],
      year: '2019',
      link: 'https://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-019-0196-6',
      category: 'UTC Funded',
    },
    {
      title: 'Real-Time Traffic Information Sharing via Twitter',
      description: 'Analyzed the effectiveness and information content of FDOT Twitter accounts for sharing traffic information. Applied topic modeling and logit models. Funded by Florida DOT.',
      tags: ['Topic Modeling', 'Logit Model', 'Python', 'R', 'SAS'],
      year: '2019',
      link: 'https://www.frontiersin.org/articles/10.3389/fbuil.2019.00083/full',
      category: 'FDOT Funded',
    },
    {
      title: 'Social Media Crisis Communication During Hurricane Sandy',
      description: 'Analyzed the efficiency of social media-based crisis communication using entropy analysis, logit models, and regression analysis. Published in the International Journal of Information Management.',
      tags: ['Entropy Analysis', 'Regression', 'Python', 'R', 'SAS'],
      year: '2020',
      link: 'https://www.sciencedirect.com/science/article/pii/S0268401218308673',
      category: 'UTC Funded',
    },
    {
      title: 'Hurricane Evacuation Traffic Demand Prediction',
      description: 'Integrated multiple data sources (geo-tagged Twitter, traffic sensors, socio-demographic data) to predict evacuation traffic using LSTM models.',
      tags: ['LSTM', 'Machine Learning', 'Multi-source Data', 'Python'],
      year: '2017',
      link: 'https://ctr.utk.edu/STC-wordpress-docs/2017/Hasan-OE-2017-Final.pdf',
      category: 'UTC Funded',
    },
    {
      title: 'Agent-Based Modeling for Human Behavior and Infrastructure Disruption',
      description: 'Developed agent-based simulations to understand the interaction between human behavior and infrastructure during disasters. Funded by NSF ORDER-CRISP.',
      tags: ['Agent-Based Modeling', 'Repast Simphony', 'Java', 'Simulation'],
      year: '2020',
      category: 'NSF Funded',
    },
    {
      title: 'Risk Perception and Evacuation Decision Modeling',
      description: 'Built agent-based models to understand how multiple information sources influence risk perception and evacuation decisions during disasters.',
      tags: ['Agent-Based Modeling', 'Decision Modeling', 'Java', 'Python'],
      year: '2020',
      category: 'NSF Funded',
    },
  ],
  covid: [
    {
      title: 'COVID-19 Spatio-temporal Comparison Visualization',
      description: 'Built a live interactive map to visualize and compare COVID-19 cases and deaths across regions using Johns Hopkins University data.',
      tags: ['Python', 'Django', 'Folium', 'AWS S3', 'Heroku'],
      year: '2020',
      link: 'https://covid19comparisionkcr.herokuapp.com/',
      category: 'Personal Project',
    },
    {
      title: 'COVID-19 Temporal Visualization by County',
      description: 'Created temporal visualizations showing the spread of COVID-19 across US counties using New York Times data and county shapefiles.',
      tags: ['Python', 'Folium', 'JavaScript', 'HTML'],
      year: '2020',
      link: 'https://kamol-roy.github.io/',
      category: 'Personal Project',
    },
    {
      title: 'COVID-19 ABM for Los Angeles Reopening',
      description: 'Developed high fidelity location-based risk estimates using agent-based modeling for the LA COVID-19 Data Science Challenge.',
      tags: ['Agent-Based Modeling', 'Repast Simphony', 'Java', 'Python', 'ArcGIS'],
      year: '2020',
      link: 'https://github.com/Kamol-Roy/COVID19_ABM_beta',
      category: 'Data Challenge',
    },
    {
      title: 'Data Challenge Competition Platform',
      description: 'Built a web platform for hosting data science competitions with submission and scoring capabilities.',
      tags: ['Django', 'Python', 'AWS S3', 'Web Development'],
      year: '2020',
      link: 'https://hostacompetition.herokuapp.com/',
      category: 'Personal Project',
    },
  ],
  collaboration: [
    {
      title: 'Dynamics of Social Media Communication in Major Hurricanes',
      description: 'Applied dynamic topic modeling to understand how social media communication evolves during major hurricanes. Collaboration with N-HIRS at Florida International University.',
      tags: ['Dynamic Topic Model', 'Python', 'Gensim', 'ArcPy'],
      year: '2019',
      link: 'https://www.abstractsonline.com/pp8/#!/6818/presentation/9293',
      category: 'Collaboration',
    },
    {
      title: 'Information Diffusion and Evacuation Decision Modeling',
      description: 'Developed contagion models (SIS/SIR) to understand how information spreads and influences evacuation decisions during disasters.',
      tags: ['Contagion Model', 'SIS/SIR', 'Python', 'Network Analysis'],
      year: '2019',
      link: 'https://www.abstractsonline.com/pp8/#!/6818/presentation/9293',
      category: 'Research',
    },
  ],
  individual: [
    {
      title: 'Traffic Intersection Simulation with VISSIM',
      description: 'Modeled traffic operations at complex intersections using PTV VISSIM microsimulation to analyze feasible traffic operation alternatives.',
      tags: ['VISSIM', 'Traffic Simulation', 'R', 'Transportation'],
      year: '2015',
      link: 'https://www.researchgate.net/publication/282158033_A_Study_On_Feasible_Traffic_Operation_Alternatives_At_Signalized_Intersection_In_Dhaka_City',
      category: 'Personal Project',
    },
    {
      title: 'Climate Stress Impact on Human Mobility',
      description: 'Analyzed mobile phone data to understand the impact of climate stress on human mobility and resilience. Honorable Mention at UN Global Pulse Data for Climate Action Challenge.',
      tags: ['Mobile Data Analysis', 'Lasso Regression', 'Python', 'ArcGIS'],
      year: '2017',
      category: 'Data Challenge',
    },
    {
      title: 'Bicycle Crash Prediction with Machine Learning',
      description: 'Built machine learning models to predict bicycle crashes using Capital Bikeshare and climate data. First Prize at NSF Big Data Innovation Hub Transportation Data Challenge.',
      tags: ['Machine Learning', 'Regression', 'Python', 'Sklearn', 'SPSS'],
      year: '2017',
      link: 'https://github.com/Kamol-Roy/Hackathon-Project-MBDH-',
      category: 'Hackathon Winner',
    },
  ],
};

export default function PortfolioPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        A collection of my research projects and technical work in AI, machine learning,
        geospatial analysis, and disaster analytics. Most projects from my academic career (2016-2020).
      </p>

      {/* Featured: GeoTasker */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Work</h2>
        <a
          href="https://geotasker.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
                Active Development
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">GeoTasker.ai</h3>
              <p className="text-gray-600 max-w-xl mb-4">
                AI-powered geospatial storytelling platform. Describe any topic and get a
                narrated video with maps, animations, data visualizations, and background music.
                Built with Claude AI, Next.js, FastAPI, and GPU-accelerated rendering.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Claude AI', 'Geospatial', 'Video Generation', 'Next.js', 'FastAPI'].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-blue-600 text-2xl">&rarr;</span>
          </div>
        </a>

        {/* GeoManim */}
        <a
          href="https://github.com/Kamol-Roy/geomanim"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 mt-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Open Source
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium text-amber-700 bg-amber-100 rounded-full">
                  Coming to PyPI
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">GeoManim</h3>
              <p className="text-gray-600 max-w-xl mb-4">
                Python library for creating animated geospatial visualizations using Manim.
                One-line API for animated maps, choropleths, route animations, and more.
                Install from GitHub: <code className="text-sm bg-gray-100 px-1 rounded">pip install git+https://github.com/Kamol-Roy/geomanim</code>
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Manim', 'Geospatial', 'Animation', 'Open Source'].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-green-600 text-2xl">&rarr;</span>
          </div>
        </a>
      </section>

      {/* Funded Research */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Funded Research Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.funded.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* COVID-19 Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">COVID-19 Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.covid.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Collaboration Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Collaboration Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.collaboration.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Individual/Challenge Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Individual & Challenge Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.individual.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
