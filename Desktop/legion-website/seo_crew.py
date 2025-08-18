from dotenv import load_dotenv
import os
from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('seo_crew.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Initialize LLM with proxy API
llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_API_BASE"),
    temperature=0.7,
    verbose=True
)

# Agent 1: Idea Analyst - analyzes business idea
idea_analyst = Agent(
    role="Business Idea Analyst",
    goal="Analyze business idea and determine key elements for landing page",
    backstory="""You are an experienced business analyst with 10+ years of experience in analyzing startups and business ideas. 
    You can quickly understand the essence of a business and identify key advantages 
    that need to be communicated to customers.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Agent 2: Template Selector - selects best template
template_selector = Agent(
    role="Landing Page Template Selector",
    goal="Select optimal landing page template based on business idea analysis",
    backstory="""You are a UX/UI design expert with deep understanding of user psychology. 
    You know which landing page elements work best for different types of businesses 
    and can adapt templates to specific tasks.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Agent 3: Frontend Engineer - generates HTML/CSS code
frontend_engineer = Agent(
    role="Frontend Engineer",
    goal="Create quality HTML/CSS code for landing page based on selected template",
    backstory="""You are an experienced frontend developer with 8+ years of experience creating landing pages. 
    You know modern web development standards, can create responsive pages 
    and optimize them for fast loading.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Agent 4: SEO Optimizer - improves content for SEO
seo_optimizer = Agent(
    role="SEO Content Optimizer",
    goal="Optimize landing page content for search engines",
    backstory="""You are an SEO specialist with 6+ years of experience in search engine optimization. 
    You know all modern search engine algorithms, can work with keywords, 
    optimize headings and meta tags for better ranking.""",
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# Task 1: Analyze business idea
analyze_idea_task = Task(
    description="""Analyze the provided business idea and determine:
    1. Main value for customers
    2. Key advantages
    3. Target audience
    4. Main pain points that the product solves
    5. Calls to action (CTA)
    
    Business idea: {business_idea}
    
    Provide structured analysis in JSON format.""",
    agent=idea_analyst,
    expected_output="JSON with business idea analysis",
    verbose=True
)

# Task 2: Select template
select_template_task = Task(
    description="""Based on business idea analysis, select optimal landing page template:
    1. Determine landing page type (sales, informational, lead capture)
    2. Choose page structure
    3. Define key sections
    4. Suggest color scheme and style
    
    Idea analysis: {idea_analysis}
    
    Provide detailed template description in JSON format.""",
    agent=template_selector,
    expected_output="JSON with landing page template description",
    verbose=True
)

# Task 3: Generate HTML/CSS
generate_code_task = Task(
    description="""Create HTML/CSS code for landing page based on selected template:
    1. Create semantically correct HTML structure
    2. Add responsive CSS styles
    3. Optimize for fast loading
    4. Add basic interactivity
    
    Template: {template_description}
    
    Provide complete HTML/CSS code.""",
    agent=frontend_engineer,
    expected_output="HTML/CSS code for landing page",
    verbose=True
)

# Task 4: SEO optimization
seo_optimize_task = Task(
    description="""Optimize landing page for search engines:
    1. Add SEO meta tags (title, description, keywords)
    2. Optimize headings H1-H6
    3. Add alt attributes for images
    4. Structure data (Schema.org)
    5. Optimize URL structure
    
    HTML code: {html_code}
    
    Provide SEO-optimized HTML code with improvements.""",
    agent=seo_optimizer,
    expected_output="SEO-optimized HTML code",
    verbose=True
)

# Create crew of agents
seo_crew = Crew(
    agents=[idea_analyst, template_selector, frontend_engineer, seo_optimizer],
    tasks=[analyze_idea_task, select_template_task, generate_code_task, seo_optimize_task],
    process=Process.sequential,
    verbose=True
)

def create_seo_landing(business_idea):
    """
    Creates SEO-optimized landing page based on business idea
    
    Args:
        business_idea (str): Business idea description
        
    Returns:
        str: Complete HTML code for landing page
    """
    try:
        logger.info(f"Starting landing page creation for idea: {business_idea[:100]}...")
        
        # Start crew execution
        result = seo_crew.kickoff()
        
        logger.info("Landing page successfully created!")
        return result
        
    except Exception as e:
        logger.error(f"Error creating landing page: {str(e)}")
        raise

if __name__ == "__main__":
    # Example usage
    business_idea = """
    We are creating an innovative personal finance management application 
    that helps people track expenses, plan budgets and 
    achieve financial goals with AI assistant.
    """
    
    try:
        landing_page = create_seo_landing(business_idea)
        print("=== COMPLETE LANDING PAGE ===")
        print(landing_page)
        
        # Save result to file
        with open("generated_landing.html", "w", encoding="utf-8") as f:
            f.write(landing_page)
        print("\nLanding page saved to file 'generated_landing.html'")
        
    except Exception as e:
        print(f"Error: {e}")
