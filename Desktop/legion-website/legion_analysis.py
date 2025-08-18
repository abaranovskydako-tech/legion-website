from dotenv import load_dotenv
import os
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('legion_analysis.log'),
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

def analyze_legion_business():
    """Analyzes LEGION business and provides recommendations"""
    logger.info("🔍 Analyzing LEGION business...")
    
    system_prompt = """You are an experienced business analyst and SEO specialist with 10+ years of experience. 
    Analyze the provided business description and provide:
    1. Main value proposition for customers
    2. Key competitive advantages
    3. Target audience segments
    4. Main pain points that the service solves
    5. Calls to action (CTA) recommendations
    6. SEO optimization suggestions
    7. Content improvement recommendations
    8. Landing page structure suggestions
    
    Provide structured analysis in JSON format with actionable insights."""
    
    business_description = """
    LEGION is a personnel outsourcing company based in Novosibirsk, Russia. 
    
    Core Services:
    - Linear personnel outsourcing (loaders, pickers, cleaners)
    - Staff from 350 rubles/hour
    - Deployment to site within 3 hours or 2 days
    - 24/7 support
    - Medical books and documents included
    - Shifts from 6 hours
    - 72-hour project launch
    
    Target Market: Novosibirsk and surrounding areas
    Competitive Advantages: Speed, quality, legal compliance, scalability
    Current Website: Classic HTML version with calculator, forms, responsive design
    
    Business Model: B2B outsourcing services for companies needing temporary or permanent staff
    """
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Business description: {business_description}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ LEGION analysis completed")
    return response.content

def generate_seo_recommendations(analysis):
    """Generates specific SEO recommendations for LEGION"""
    logger.info("🔍 Generating SEO recommendations...")
    
    system_prompt = """You are an SEO specialist. Based on the business analysis, provide:
    1. Keyword strategy recommendations
    2. Meta tags optimization suggestions
    3. Content structure improvements
    4. Local SEO optimization for Novosibirsk
    5. Technical SEO improvements
    6. Content marketing suggestions
    
    Provide practical, actionable recommendations."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Business analysis: {analysis}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ SEO recommendations generated")
    return response.content

def suggest_landing_page_improvements(analysis):
    """Suggests landing page improvements for LEGION"""
    logger.info("🎨 Suggesting landing page improvements...")
    
    system_prompt = """You are a UX/UI expert and conversion optimization specialist. Based on the analysis, suggest:
    1. Landing page structure improvements
    2. Conversion optimization elements
    3. Trust signals and social proof
    4. Call-to-action placement and design
    5. Mobile optimization suggestions
    6. A/B testing ideas
    
    Focus on practical improvements that can increase conversions."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Business analysis: {analysis}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ Landing page improvements suggested")
    return response.content

if __name__ == "__main__":
    try:
        print("🚀 Starting LEGION Business Analysis...\n")
        
        # Step 1: Business Analysis
        business_analysis = analyze_legion_business()
        print("=== BUSINESS ANALYSIS ===")
        print(business_analysis)
        
        # Step 2: SEO Recommendations
        seo_recommendations = generate_seo_recommendations(business_analysis)
        print("\n=== SEO RECOMMENDATIONS ===")
        print(seo_recommendations)
        
        # Step 3: Landing Page Improvements
        landing_improvements = suggest_landing_page_improvements(business_analysis)
        print("\n=== LANDING PAGE IMPROVEMENTS ===")
        print(landing_improvements)
        
        # Save results to file
        with open("legion_analysis_results.txt", "w", encoding="utf-8") as f:
            f.write("=== LEGION BUSINESS ANALYSIS ===\n\n")
            f.write(business_analysis)
            f.write("\n\n=== SEO RECOMMENDATIONS ===\n\n")
            f.write(seo_recommendations)
            f.write("\n\n=== LANDING PAGE IMPROVEMENTS ===\n\n")
            f.write(landing_improvements)
        
        print("\n💾 Results saved to 'legion_analysis_results.txt'")
        print("\n🎉 LEGION analysis completed successfully!")
        
    except Exception as e:
        print(f"❌ Error: {e}")
